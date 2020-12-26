package com.quocanh.hrm.repository;

import com.quocanh.hrm.domain.Employee;
import com.quocanh.hrm.domain.User;
import com.quocanh.hrm.dto.EmployeeDto;
import com.quocanh.hrm.dto.UserDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    @Query("select p FROM Employee p where p.email = ?1 " )
    List<EmployeeDto> findByEmail(String email);


    @Query("select p FROM User p where p.username = ?1 " )
    List<UserDto> findByUsername(String username);
}
