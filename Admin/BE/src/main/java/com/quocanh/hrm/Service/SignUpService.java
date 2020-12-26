package com.quocanh.hrm.Service;

import com.quocanh.hrm.dto.EmployeeDto;
import com.quocanh.hrm.dto.UserDto;

public interface SignUpService {
    UserDto createUser(EmployeeDto dto);
    boolean checkEmail(EmployeeDto dto);
    UserDto updateUser(EmployeeDto dto, Long id);
    boolean checkUsername(EmployeeDto dto);
}
