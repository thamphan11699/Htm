package com.quocanh.hrm.rest;

import com.quocanh.hrm.Service.EmployeeService;
import com.quocanh.hrm.Service.SignUpService;
import com.quocanh.hrm.Service.UserService;
import com.quocanh.hrm.dto.EmployeeDto;
import com.quocanh.hrm.dto.UserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(value = "*")
@RequestMapping(path = "public")
public class RestSignUpController {

    @Autowired
    SignUpService signUpService;

    @Autowired
    EmployeeService employeeService;

    @Autowired
    UserService userService;

    @PostMapping(value = "/signin")
    public ResponseEntity<EmployeeDto> createUser(@RequestBody EmployeeDto dto) {
        UserDto userDto = this.signUpService.createUser(dto);
        ResponseEntity<UserDto> resUser = new ResponseEntity<UserDto>(userDto,
                (userDto != null) ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
        EmployeeDto employeeDto = employeeService.saveOrUpdate(dto, null, resUser.getBody().getId());
        ResponseEntity<EmployeeDto> res = new ResponseEntity<EmployeeDto>(employeeDto,
                (employeeDto != null) ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
        return res;
    }

    @PutMapping(value = "/signin/{employeeId}/{userId}")
    public ResponseEntity<EmployeeDto> updateUser(@RequestBody EmployeeDto dto, @PathVariable("employeeId") Long employeeId, @PathVariable("userId") Long userId) {
        UserDto userDto = this.signUpService.updateUser(dto, userId);
        ResponseEntity<UserDto> resUser = new ResponseEntity<UserDto>(userDto,
                (userDto != null) ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
        EmployeeDto employeeDto = employeeService.saveOrUpdate(dto, employeeId, userId);
        ResponseEntity<EmployeeDto> res = new ResponseEntity<EmployeeDto>(employeeDto,
                (employeeDto != null) ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
        return res;
    }

    @PostMapping(value = "/check-email")
    public Boolean checkEmail(@RequestBody EmployeeDto dto) {
        boolean result = true;
        if (dto.getEmail() != null && StringUtils.hasText(dto.getEmail())) {
            result = signUpService.checkEmail(dto);
        }
        return result;
    }

    @PostMapping(value = "/check-username")
    public Boolean checkUsername(@RequestBody EmployeeDto dto) {
        boolean result = true;
        if (dto.getUsername() != null && StringUtils.hasText(dto.getUsername())) {
            result = signUpService.checkUsername(dto);
        }
        return result;
    }

    @PostMapping(value = "/login")
    public ResponseEntity<UserDto> login(@RequestBody UserDto dto  ) {
        UserDto result = userService.checkLogin(dto);
        ResponseEntity<UserDto> res = new ResponseEntity<UserDto>(result, HttpStatus.OK);
        return res;
    }

}
