package com.quocanh.hrm.Service.Iml;

import com.quocanh.hrm.Service.AmenitiService;
import com.quocanh.hrm.domain.Advertisement;
import com.quocanh.hrm.domain.Ameniti;
import com.quocanh.hrm.dto.AdvertisementDto;
import com.quocanh.hrm.dto.AmenitiDto;
import com.quocanh.hrm.dto.serachdto.SearchDto;
import com.quocanh.hrm.repository.AdvertisementRepository;
import com.quocanh.hrm.repository.AmenitiRepository;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import java.util.Date;
import java.util.List;

@Service
public class AmenitiServiceIm implements AmenitiService {
    @Autowired
    EntityManager manager;

    public SessionFactory getSessionFactory() {
        Session session = manager.unwrap(Session.class);
        return session.getSessionFactory();
    }

    @Autowired
    AmenitiRepository amenitiRepository;

    @Override
    public Page<AmenitiDto> searchByPage(SearchDto dto) {
        if (dto == null) {
            return null;
        }

        int pageIndex = dto.getPageIndex();
        int pageSize = dto.getPageSize();

        if (pageIndex > 0) {
            pageIndex--;
        } else {
            pageIndex = 0;
        }

        String whereClause = "";

        String orderBy = " ORDER BY entity.id DESC";
        if (dto.getOrderBy() != null && StringUtils.hasLength(dto.getOrderBy().toString())) {
            orderBy = " ORDER BY entity."+dto.getOrderBy()+" ASC";
        }

        String sqlCount = "select count(entity.id) from Ameniti as entity where (1=1)";
        String sql = "select new com.quocanh.hrm.dto.AmenitiDto(entity) from Ameniti as entity where (1=1)";

        if (dto.getKeyword() != null && StringUtils.hasText(dto.getKeyword())) {
            whereClause += " AND ( UPPER(entity.name) LIKE UPPER(:text) OR UPPER(entity.code) LIKE UPPER(:text) ) ";
        }

        sql += whereClause + orderBy;
        sqlCount += whereClause;

        Query q = manager.createQuery(sql, AmenitiDto.class);
        Query qCount = manager.createQuery(sqlCount);

        if (dto.getKeyword() != null && StringUtils.hasText(dto.getKeyword())) {
            q.setParameter("text", '%' + dto.getKeyword() + '%');
            qCount.setParameter("text", '%' + dto.getKeyword() + '%');
        }

        int startPosition = pageIndex * pageSize;
        q.setFirstResult(startPosition);
        q.setMaxResults(pageSize);
        List<AmenitiDto> entities = q.getResultList();
        long count = (long) qCount.getSingleResult();

        Pageable pageable = PageRequest.of(pageIndex, pageSize);
        Page<AmenitiDto> result = new PageImpl<AmenitiDto>(entities, pageable, count);
        return result;
    }

    @Override
    public AmenitiDto saveOrUpdate(AmenitiDto dto, Long id) {
        if (dto != null) {
            Ameniti entity = null;
            if (id != null) {
                if (dto.getId() != null && !dto.getId().equals(id)) {
                    return null;
                }
                entity = amenitiRepository.getOne(id);
                entity.setModifyDate(new Date());
            }
            if (entity == null) {
                entity = new Ameniti();
                entity.setCreateDate(new Date());
                entity.setModifyDate(new Date());
            }
            entity.setCode(dto.getCode());
            entity.setName(dto.getName());
            entity.setDescription(dto.getDescription());
            entity = amenitiRepository.save(entity);
            if (entity != null) {
                return new AmenitiDto(entity);
            }
        }
        return null;
    }

    @Override
    public AmenitiDto getOne(Long id) {
        Ameniti entity = amenitiRepository.getOne(id);
        if (entity != null) {
            return new AmenitiDto(entity);
        }
        return null;
    }

    @Override
    public void delete(Long id) {
        Ameniti entity = amenitiRepository.getOne(id);
        if (entity != null) {
            amenitiRepository.delete(entity);
        }
    }

    @Override
    public boolean checkCodeWasUsed(String code, Long id) {
        List<Ameniti> entities = amenitiRepository.findByCode(code);
        if (entities != null && entities.size() > 0 && entities.get(0) != null && entities.get(0).getId() != null) {
            if (id != null && StringUtils.hasText(id.toString())) {
                if (entities.get(0).getId().equals(id)) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }

    @Override
    public boolean checkNameWasUsed(String name, Long id) {
        List<Ameniti> entities = amenitiRepository.findByName(name);
        if (entities != null && entities.size() > 0 && entities.get(0) != null && entities.get(0).getId() != null) {
            if (id != null && StringUtils.hasText(id.toString())) {
                if (entities.get(0).getId().equals(id)) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }
}
