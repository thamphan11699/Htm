package com.quocanh.hrm.Service.Iml;

import com.quocanh.hrm.Service.TypeService;
import com.quocanh.hrm.domain.*;
import com.quocanh.hrm.dto.AmenitiDto;
import com.quocanh.hrm.dto.TypeDto;
import com.quocanh.hrm.dto.serachdto.SearchDto;
import com.quocanh.hrm.repository.*;
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
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TypeServiceIm implements TypeService {
    @Autowired
    EntityManager manager;

    public SessionFactory getSessionFactory() {
        Session session = manager.unwrap(Session.class);
        return session.getSessionFactory();
    }

    @Autowired
    TypeRepository typeRepository;

    @Autowired
    TypeAmenitiRepository typeAmenitiRepository;

    @Autowired
    AmenitiRepository amenitiRepository;

    @Autowired
    ImageRepository imageRepository;

    @Autowired
    TypeImageRepository typeImageRepository;


    @Override
    public Page<TypeDto> searchByPage(SearchDto dto) {
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

        String sqlCount = "select count(entity.id) from Type as entity where (1=1)";
        String sql = "select new com.quocanh.hrm.dto.TypeDto(entity, true) from Type as entity where (1=1)";

        if (dto.getKeyword() != null && StringUtils.hasText(dto.getKeyword())) {
            whereClause += " AND ( UPPER(entity.name) LIKE UPPER(:text) OR UPPER(entity.code) LIKE UPPER(:text) " +
                    "OR UPPER(entity.description) LIKE UPPER(:text) )";
        }

        sql += whereClause + orderBy;
        sqlCount += whereClause;

        Query q = manager.createQuery(sql, TypeDto.class);
        Query qCount = manager.createQuery(sqlCount);

        if (dto.getKeyword() != null && StringUtils.hasText(dto.getKeyword())) {
            q.setParameter("text", '%' + dto.getKeyword() + '%');
            qCount.setParameter("text", '%' + dto.getKeyword() + '%');
        }

        int startPosition = pageIndex * pageSize;
        q.setFirstResult(startPosition);
        q.setMaxResults(pageSize);
        List<TypeDto> entities = q.getResultList();
        long count = (long) qCount.getSingleResult();

        Pageable pageable = PageRequest.of(pageIndex, pageSize);
        Page<TypeDto> result = new PageImpl<TypeDto>(entities, pageable, count);
        return result;
    }

    @Override
    public TypeDto saveOrUpdate(TypeDto dto, Long id) {
        if (dto != null) {
            Type entity = null;
            if (id != null) {
                if (dto.getId() != null && !dto.getId().equals(id)) {
                    return null;
                }
                entity = typeRepository.getOne(id);
                entity.setModifyDate(new Date());
            }
            if (entity == null) {
                entity = new Type();
                entity.setCreateDate(new Date());
                entity.setModifyDate(new Date());
            }
            entity.setCode(dto.getCode());
            entity.setName(dto.getName());
            entity.setDescription(dto.getDescription());
            entity.setChildren(dto.getChildren());
            entity.setAdults(dto.getAdults());
            entity = typeRepository.save(entity);
            if (dto.getAmenities() != null && dto.getAmenities().size() > 0) {
                if (id != null) {
                    List<Long> ids = typeAmenitiRepository.getAmenitiFromTypeId(id);
                    for (Long typeId : ids) {
                        TypeAmeniti typeAmeniti = typeAmenitiRepository.getOne(typeId);
                        typeAmenitiRepository.delete(typeAmeniti);
                    }
                    for (AmenitiDto amenitiDto : dto.getAmenities()) {
                        TypeAmeniti typeAmeniti = new TypeAmeniti();
                        Ameniti ameniti = amenitiRepository.getOne(amenitiDto.getId());
                        typeAmeniti.setType(entity);
                        typeAmeniti.setAmeniti(ameniti);
                        typeAmeniti.setCreateDate(new Date());
                        typeAmeniti.setModifyDate(new Date());
                        typeAmenitiRepository.save(typeAmeniti);

                    }
                } else {
                    for (AmenitiDto amenitiDto : dto.getAmenities()) {
                        TypeAmeniti typeAmeniti = new TypeAmeniti();
                        Ameniti ameniti = amenitiRepository.getOne(amenitiDto.getId());
                        typeAmeniti.setType(entity);
                        typeAmeniti.setAmeniti(ameniti);
                        typeAmeniti.setCreateDate(new Date());
                        typeAmeniti.setModifyDate(new Date());
                        typeAmenitiRepository.save(typeAmeniti);

                    }
                }
            }
            if (entity != null) {
                return  new TypeDto(entity, true);
            }
        }
        return null;
    }

    @Override
    public TypeDto getOne(Long id) {
        Type entity = typeRepository.getOne(id);
        if (entity != null) {
            return new TypeDto(entity, true);
        }
        return null;
    }

    @Override
    public void delete(Long id) {
        Type entity = typeRepository.getOne(id);
        if (entity != null) {
            typeRepository.delete(entity);
        }
    }

    @Override
    public boolean checkCodeWasUsed(String code, Long id) {
        List<Type> entities = typeRepository.findByCode(code);
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
        List<Type> entities = typeRepository.findByName(name);
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
    public TypeDto updateImage(List<Long> imageDtos, Long id) {
        Type entity = typeRepository.getOne(id);
        for (Long iamgeId : imageDtos) {
            Image image = imageRepository.getOne(iamgeId);
            TypeImage typeImage = new TypeImage();
            typeImage.setImage(image);
            typeImage.setType(entity);
            typeImageRepository.save(typeImage);
        }
        return new TypeDto(entity, true);
    }
}
