package com.quocanh.hrm.rest;

import com.quocanh.hrm.Service.EmployeeService;
import com.quocanh.hrm.dto.EmployeeDto;
import com.quocanh.hrm.dto.serachdto.SearchDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(value = "*")
@RequestMapping(path = "api/employee")
public class RestEmployeeController {

    @Autowired
    EmployeeService employeeService;

    @PostMapping(value = "/searchByPage")
    public ResponseEntity<Page<EmployeeDto>> searchByPage(@RequestBody SearchDto dto) {
        Page<EmployeeDto> page = employeeService.searchByPage(dto);
        return new ResponseEntity<>(page, page != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<EmployeeDto> getOne(@PathVariable("id") Long id) {
        EmployeeDto result = employeeService.getOne(id);
        return new ResponseEntity<>(result, result != null ? HttpStatus.OK :HttpStatus.BAD_REQUEST);
    }

    @PutMapping(value = "/{id}/{userID}")
    public ResponseEntity<EmployeeDto> update(@RequestBody EmployeeDto dto, @PathVariable("id") Long id, @PathVariable("userId") Long userId) {
        EmployeeDto result = employeeService.saveOrUpdate(dto, id, userId);
        return new ResponseEntity<>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Boolean> delete(@PathVariable("id") Long id) {
        employeeService.delete(id);
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    @GetMapping(value = "/get-employee-user-id/{userId}")
    public ResponseEntity<EmployeeDto> getEmployeeByUserId(@PathVariable("userId") Long userId) {
        EmployeeDto result = employeeService.getByUserId(userId);
        return new ResponseEntity<>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }
}
