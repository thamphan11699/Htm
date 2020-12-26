package com.quocanh.hrm.Service.Iml;

import com.quocanh.hrm.Service.UserService;
import com.quocanh.hrm.domain.Role;
import com.quocanh.hrm.domain.User;
import com.quocanh.hrm.dto.RoleDto;
import com.quocanh.hrm.dto.UserDto;
import com.quocanh.hrm.dto.serachdto.SearchDto;
import com.quocanh.hrm.repository.RoleRepository;
import com.quocanh.hrm.repository.UserRepository;
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
public class UserServiceIm implements UserService {

    @Autowired
    EntityManager manager;

    public SessionFactory getSessionFactory() {
        Session session = manager.unwrap(Session.class);
        return session.getSessionFactory();
    }

    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Override
    public Page<UserDto> searchByPage(SearchDto dto) {
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

        String sqlCount = "select count(entity.id) from User as entity where (1=1)";
        String sql = "select new com.quocanh.hrm.dto.UserDto(entity) from User as entity where (1=1)";

        if (dto.getKeyword() != null && StringUtils.hasText(dto.getKeyword())) {
            whereClause += " AND ( UPPER(entity.username) LIKE UPPER(:text) )";
        }

        sql += whereClause + orderBy;
        sqlCount += whereClause;

        Query q = manager.createQuery(sql, UserDto.class);
        Query qCount = manager.createQuery(sqlCount);

        if (dto.getKeyword() != null && StringUtils.hasText(dto.getKeyword())) {
            q.setParameter("text", '%' + dto.getKeyword() + '%');
            qCount.setParameter("text", '%' + dto.getKeyword() + '%');
        }

        int startPosition = pageIndex * pageSize;
        q.setFirstResult(startPosition);
        q.setMaxResults(pageSize);
        List<UserDto> entities = q.getResultList();
        long count = (long) qCount.getSingleResult();

        Pageable pageable = PageRequest.of(pageIndex, pageSize);
        Page<UserDto> result = new PageImpl<UserDto>(entities, pageable, count);
        return result;
    }

    @Override
    public UserDto saveOrUpdate(UserDto dto, Long id) {
        if (dto != null) {
            User entity = null;
            if (id != null) {
                if (dto.getId() != null && !dto.getId().equals(id)) {
                    return null;
                }
                entity = userRepository.getOne(id);
                entity.setModifyDate(new Date());
            }
            if (entity == null) {
                entity = new User();
                entity.setModifyDate(new Date());
                entity.setCreateDate(new Date());
            }
            entity.setUsername(dto.getUsername());
            entity.setPassword(dto.getPassword());
            if (dto.getRole() != null) {
                Role role = roleRepository.getOne(dto.getRole().getId());
                entity.setRole(role);
            }
            entity = userRepository.save(entity);
            if (entity != null) {
                return new UserDto(entity);
            }
        }
        return null;
    }

    @Override
    public UserDto getOne(Long id) {
        if (id != null) {
            User entity = userRepository.getOne(id);
            return new UserDto(entity);
        }
        return null;
    }

    @Override
    public void delete(Long id) {
        User entity = userRepository.getOne(id);
        if (entity != null) {
            userRepository.delete(entity);
        }
    }

    @Override
    public boolean checkUsename(String username, Long id) {
        List<User> entities = userRepository.checkUsername(username);
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
    public UserDto checkLogin(UserDto dto) {
        User user = userRepository.findByUsername(dto.getUsername());
        if (user != null && user.getId() != null) {
            if (dto.getUsername() != null && StringUtils.hasText(dto.getUsername().toString())) {
                if (dto.getUsername().equals(user.getUsername())) {
                    if (dto.getPassword().equals(user.getPassword())) {
                        return new UserDto(user);
                    }
                }
            }
        }
        return null;
    }

}
