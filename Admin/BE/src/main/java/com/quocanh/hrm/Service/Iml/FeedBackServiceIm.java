package com.quocanh.hrm.Service.Iml;

import com.quocanh.hrm.Service.FeedBackService;
import com.quocanh.hrm.domain.FeedBack;
import com.quocanh.hrm.dto.AdvertisementDto;
import com.quocanh.hrm.dto.FeedBackDto;
import com.quocanh.hrm.dto.serachdto.SearchDto;
import com.quocanh.hrm.repository.FeedBackRepository;
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
public class FeedBackServiceIm implements FeedBackService {
    @Autowired
    EntityManager manager;

    public SessionFactory getSessionFactory() {
        Session session = manager.unwrap(Session.class);
        return session.getSessionFactory();
    }

    @Autowired
    FeedBackRepository feedBackRepository;

    @Override
    public Page<FeedBackDto> searchByPage(SearchDto dto) {
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

        String sqlCount = "select count(entity.id) from FeedBack as entity where (1=1)";
        String sql = "select new com.quocanh.hrm.dto.FeedBackDto(entity) from FeedBack as entity where (1=1)";

        if (dto.getKeyword() != null && StringUtils.hasText(dto.getKeyword())) {
            whereClause += " AND ( UPPER(entity.name) LIKE UPPER(:text) OR UPPER(entity.email) LIKE UPPER(:text) " +
                    "OR UPPER(entity.content) LIKE UPPER(:text) OR UPPER(entity.phone) LIKE UPPER(:text) )";
        }

        sql += whereClause + orderBy;
        sqlCount += whereClause;

        Query q = manager.createQuery(sql, FeedBackDto.class);
        Query qCount = manager.createQuery(sqlCount);

        if (dto.getKeyword() != null && StringUtils.hasText(dto.getKeyword())) {
            q.setParameter("text", '%' + dto.getKeyword() + '%');
            qCount.setParameter("text", '%' + dto.getKeyword() + '%');
        }

        int startPosition = pageIndex * pageSize;
        q.setFirstResult(startPosition);
        q.setMaxResults(pageSize);
        List<FeedBackDto> entities = q.getResultList();
        long count = (long) qCount.getSingleResult();

        Pageable pageable = PageRequest.of(pageIndex, pageSize);
        Page<FeedBackDto> result = new PageImpl<FeedBackDto>(entities, pageable, count);
        return result;
    }

    @Override
    public FeedBackDto saveOrUpdate(FeedBackDto dto, Long id) {
        if (dto != null) {
            FeedBack entity = null;
            if (id != null) {
                if (dto.getId() != null && !dto.getId().equals(id)) {
                    return null;
                }
                entity = feedBackRepository.getOne(id);
                entity.setModifyDate(new Date());
            }
            if (entity == null) {
                entity = new FeedBack();
                entity.setModifyDate(new Date());
                entity.setCreateDate(new Date());
            }
            entity.setName(dto.getName());
            entity.setEmail(dto.getEmail());
            entity.setPhone(dto.getPhone());
            entity.setContent(dto.getContent());
            entity = feedBackRepository.save(entity);
            if (entity != null) {
                return new FeedBackDto(entity);
            }
        }
        return null;
    }

    @Override
    public FeedBackDto getOne(Long id) {
        FeedBack entity = feedBackRepository.getOne(id);
        if (entity != null) {
            return new FeedBackDto(entity);
        }
        return null;
    }

    @Override
    public void delete(Long id) {
        FeedBack entity = feedBackRepository.getOne(id);
        if (entity != null) {
            feedBackRepository.delete(entity);
        }
    }
}
