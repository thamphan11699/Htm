package com.quocanh.hrm.Service.Iml;

import com.quocanh.hrm.Service.EmployeeService;
import com.quocanh.hrm.domain.Employee;
import com.quocanh.hrm.domain.User;
import com.quocanh.hrm.dto.EmployeeDto;
import com.quocanh.hrm.dto.UserDto;
import com.quocanh.hrm.dto.serachdto.SearchDto;
import com.quocanh.hrm.repository.EmployeeRepository;
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
public class EmployeServiceIm implements EmployeeService {

    @Autowired
    EntityManager manager;

    public SessionFactory getSessionFactory() {
        Session session = manager.unwrap(Session.class);
        return session.getSessionFactory();
    }

    @Autowired
    EmployeeRepository employeeRepository;

    @Autowired
    UserRepository userRepository;

    @Override
    public void delete(Long id) {
        Employee employee = employeeRepository.getOne(id);
        User user = userRepository.getOne(employee.getUser().getId());
        if (employee != null) {
            employeeRepository.delete(employee);
            userRepository.delete(user);
        }
    }

    @Override
    public EmployeeDto saveOrUpdate(EmployeeDto dto, Long id, Long UserId) {
        if (dto != null) {
            Employee entity = null;
            if (id != null) {
                if (dto.getId() != null && !dto.getId().equals(id)) {
                    return null;
                }
                entity = employeeRepository.getOne(id);
                entity.setModifyDate(new Date());
            }
            if (entity == null) {
                entity = new Employee();
                entity.setCreateDate(new Date());
                entity.setModifyDate(new Date());
            }
            entity.setFullName(dto.getFullName());
            entity.setEmail(dto.getEmail());
            entity.setPhoneNumber(dto.getPhoneNumber());
            entity.setBirthDay(dto.getBirthDay());
            entity.setGender(dto.getGender());
            entity.setAddress(dto.getAddress());
            if (UserId != null) {
                entity.setUser(userRepository.getOne(UserId));
            }
            entity = employeeRepository.save(entity);
            if (entity != null) {
                return new EmployeeDto(entity);
            }
        }
        return null;
    }

    @Override
    public EmployeeDto getOne(Long id) {
        if (id != null) {
            Employee entity = employeeRepository.getOne(id);
            return new EmployeeDto(entity);
        }
        return null;
    }

    @Override
    public Page<EmployeeDto> searchByPage(SearchDto dto) {
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

        String sqlCount = "select count(entity.id) from Employee as entity where (1=1)";
        String sql = "select new com.quocanh.hrm.dto.EmployeeDto(entity) from Employee as entity where (1=1)";

        if (dto.getKeyword() != null && StringUtils.hasText(dto.getKeyword())) {
            whereClause += " AND ( UPPER(entity.fullName) LIKE UPPER(:text) OR UPPER(entity.email) LIKE UPPER(:text)" +
                    " OR UPPER(entity.phoneNumber) LIKE UPPER(:text) OR UPPER(entity.address) LIKE UPPER(:text) )";
        }

        sql += whereClause + orderBy;
        sqlCount += whereClause;

        Query q = manager.createQuery(sql, EmployeeDto.class);
        Query qCount = manager.createQuery(sqlCount);

        if (dto.getKeyword() != null && StringUtils.hasText(dto.getKeyword())) {
            q.setParameter("text", '%' + dto.getKeyword() + '%');
            qCount.setParameter("text", '%' + dto.getKeyword() + '%');
        }

        int startPosition = pageIndex * pageSize;
        q.setFirstResult(startPosition);
        q.setMaxResults(pageSize);
        List<EmployeeDto> entities = q.getResultList();
        long count = (long) qCount.getSingleResult();

        Pageable pageable = PageRequest.of(pageIndex, pageSize);
        Page<EmployeeDto> result = new PageImpl<EmployeeDto>(entities, pageable, count);
        return result;
    }

    @Override
    public EmployeeDto updateImgae(String imagePath, Long id) {
        Employee entity = employeeRepository.getOne(id);
        entity.setImagePath(imagePath);
        entity = employeeRepository.save(entity);
        return new EmployeeDto(entity);
    }
}
