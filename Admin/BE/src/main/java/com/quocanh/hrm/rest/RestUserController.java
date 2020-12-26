package com.quocanh.hrm.rest;

import com.quocanh.hrm.Service.UserService;
import com.quocanh.hrm.dto.RoleDto;
import com.quocanh.hrm.dto.UserDto;
import com.quocanh.hrm.dto.serachdto.SearchDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(value = "*")
@RequestMapping(path = "api/user")
public class RestUserController {
    @Autowired
    UserService userService;

    @PostMapping(value = "/searchByPage")
    public ResponseEntity<Page<UserDto>> searchByPage(@RequestBody SearchDto dto) {
        Page<UserDto> page = userService.searchByPage(dto);
        return new ResponseEntity<>(page, page != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @PostMapping(value = "")
    public ResponseEntity<UserDto> create(@RequestBody UserDto dto) {
        UserDto result = userService.saveOrUpdate(dto, null);
        return new ResponseEntity<>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<UserDto> update(@RequestBody UserDto dto, @PathVariable("id") Long id) {
        UserDto result = userService.saveOrUpdate(dto, id);
        return new ResponseEntity<>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<UserDto> getOne(@PathVariable("id") Long id) {
        UserDto result = userService.getOne(id);
        return new ResponseEntity<>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Boolean> delete(@PathVariable("id") Long id) {
        userService.delete(id);
        return new ResponseEntity<>(true, HttpStatus.OK);
    }
    @PostMapping(value = "check-username")
    public Boolean codeUsername(@RequestBody UserDto dto) {
        boolean result = true;
        if (dto.getUsername() != null && StringUtils.hasText(dto.getUsername()) )
            result = userService.checkUsename(dto.getUsername(), dto.getId());
        return result;
    }
}
