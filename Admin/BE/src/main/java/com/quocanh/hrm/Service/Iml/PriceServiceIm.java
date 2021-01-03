package com.quocanh.hrm.Service.Iml;

import com.quocanh.hrm.Service.PriceService;
import com.quocanh.hrm.domain.Price;
import com.quocanh.hrm.domain.Role;
import com.quocanh.hrm.dto.PriceDto;
import com.quocanh.hrm.dto.RoleDto;
import com.quocanh.hrm.dto.serachdto.SearchDto;
import com.quocanh.hrm.repository.PriceRepository;
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
public class PriceServiceIm implements PriceService {

    @Autowired
    EntityManager manager;

    public SessionFactory getSessionFactory() {
        Session session = manager.unwrap(Session.class);
        return session.getSessionFactory();
    }
    @Autowired
    PriceRepository priceRepository;

    @Override
    public Page<PriceDto> searchByPage(SearchDto dto) {
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

        String sqlCount = "select count(entity.id) from Price as entity where (1=1)";
        String sql = "select new com.quocanh.hrm.dto.PriceDto(entity) from Price as entity where (1=1)";

        if (dto.getKeyword() != null && StringUtils.hasText(dto.getKeyword())) {
            whereClause += " AND ( UPPER(entity.name) LIKE UPPER(:text) OR UPPER(entity.code) LIKE UPPER(:text) )";
        }

        sql += whereClause + orderBy;
        sqlCount += whereClause;

        Query q = manager.createQuery(sql, PriceDto.class);
        Query qCount = manager.createQuery(sqlCount);

        if (dto.getKeyword() != null && StringUtils.hasText(dto.getKeyword())) {
            q.setParameter("text", '%' + dto.getKeyword() + '%');
            qCount.setParameter("text", '%' + dto.getKeyword() + '%');
        }

        int startPosition = pageIndex * pageSize;
        q.setFirstResult(startPosition);
        q.setMaxResults(pageSize);
        List<PriceDto> entities = q.getResultList();
        long count = (long) qCount.getSingleResult();

        Pageable pageable = PageRequest.of(pageIndex, pageSize);
        Page<PriceDto> result = new PageImpl<PriceDto>(entities, pageable, count);
        return result;
    }

    @Override
    public PriceDto saveOrUpdate(PriceDto dto, Long id) {
        if (dto != null) {
            Price entity = null;
            if (id != null) {
                if (dto.getId() != null && !dto.getId().equals(id)) {
                    return null;
                }
                entity = priceRepository.getOne(id);
                entity.setModifyDate(new Date());
            }
            if (entity == null) {
                entity = new Price();
                entity.setCreateDate(new Date());
                entity.setModifyDate(new Date());
            }
            entity.setName(dto.getName());
            entity.setCode(dto.getCode());
            entity.setValue(dto.getValue());
            entity = priceRepository.save(entity);
            if (entity != null) {
                return new PriceDto(entity);
            }
        }
        return null;
    }

    @Override
    public PriceDto getOne(Long id) {
        if (id != null) {
            Price entity = priceRepository.getOne(id);
            if (entity != null) {
                return new PriceDto(entity);
            }
        }
        return null;
    }

    @Override
    public void delete(Long id) {
        Price entity = priceRepository.getOne(id);
        if (entity != null) {
            priceRepository.delete(entity);
        }
    }

    @Override
    public boolean checkCodeWasUsed(String code, Long id) {
        List<Price> entities = priceRepository.findByCode(code);
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
        List<Price> entities = priceRepository.findByName(name);
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
