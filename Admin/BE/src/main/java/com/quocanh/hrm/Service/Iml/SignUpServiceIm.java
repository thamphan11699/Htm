package com.quocanh.hrm.Service.Iml;

import com.quocanh.hrm.Service.SignUpService;
import com.quocanh.hrm.domain.Employee;
import com.quocanh.hrm.domain.User;
import com.quocanh.hrm.dto.EmployeeDto;
import com.quocanh.hrm.dto.UserDto;
import com.quocanh.hrm.repository.EmployeeRepository;
import com.quocanh.hrm.repository.RoleRepository;
import com.quocanh.hrm.repository.UserRepository;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import javax.persistence.EntityManager;
import java.util.Date;
import java.util.List;

@Service
public class SignUpServiceIm implements SignUpService {

    @Autowired
    EntityManager manager;

    public SessionFactory getSessionFactory() {
        Session session = manager.unwrap(Session.class);
        return session.getSessionFactory();
    }
    @Autowired
    RoleRepository roleRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    EmployeeRepository employeeRepository;

    @Override
    public UserDto createUser(EmployeeDto dto) {
        User user = null;
        if (dto != null) {
            user = new User();
            user.setUsername(dto.getUsername());
            user.setPassword(dto.getPassword());
            user.setRole(roleRepository.getOne(dto.getRole().getId()));
            user.setCreateDate(new Date());
            user.setModifyDate(new Date());
            user = userRepository.save(user);

        }
        return new UserDto(user);
    }

    @Override
    public boolean checkEmail(EmployeeDto dto) {
        List<EmployeeDto> list = employeeRepository.findByEmail(dto.getEmail());
        if (list != null && list.size() > 0 && list.get(0) != null && list.get(0).getId() != null) {
            if (dto.getId() != null && StringUtils.hasText(dto.getId().toString())) {
                if (list.get(0).getId().equals(dto.getId())) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }

    @Override
    public UserDto updateUser(EmployeeDto dto, Long id) {
        if (dto != null) {
            if (id != null) {
                User user = userRepository.getOne(id);
                user.setModifyDate(new Date());
                user.setUsername(dto.getUsername());
                user.setPassword(dto.getPassword());
                user.setRole(roleRepository.getOne(dto.getRole().getId()));
                user = userRepository.save(user);
                return new UserDto(user);
            }
        }
        return null;
    }

    @Override
    public boolean checkUsername(EmployeeDto dto) {
        List<UserDto> list = employeeRepository.findByUsername(dto.getUsername());
        if (list != null && list.size() > 0 && list.get(0) != null && list.get(0).getId() != null) {
            if (dto.getUser().getId() != null && StringUtils.hasText(dto.getId().toString())) {
                if (list.get(0).getId().equals(dto.getUser().getId())) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }
}
