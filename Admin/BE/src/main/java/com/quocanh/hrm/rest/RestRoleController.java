package com.quocanh.hrm.rest;

import com.quocanh.hrm.Service.RoleService;
import com.quocanh.hrm.dto.RoleDto;
import com.quocanh.hrm.dto.serachdto.SearchDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import javax.management.relation.Role;

@RestController
@CrossOrigin(value = "*")
@RequestMapping(path = "api/role")
public class RestRoleController {
    @Autowired
    RoleService roleService;

    @PostMapping(value = "/searchByPage")
    public ResponseEntity<Page<RoleDto>> searchByPage(@RequestBody SearchDto dto) {
        Page<RoleDto> page = roleService.searchByPage(dto);
        return new ResponseEntity<Page<RoleDto>>(page, page != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @PostMapping(value = "")
    public ResponseEntity<RoleDto> create(@RequestBody RoleDto dto) {
        RoleDto result = roleService.saveOrUpdate(dto, null);
        return new ResponseEntity<RoleDto>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<RoleDto> update(@RequestBody RoleDto dto, @PathVariable("id") Long id) {
        RoleDto result = roleService.saveOrUpdate(dto, id);
        return new ResponseEntity<RoleDto>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<RoleDto> getOne(@PathVariable("id") Long id) {
        RoleDto result = roleService.getOne(id);
        return new ResponseEntity<RoleDto>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Boolean> delete(@PathVariable("id") Long id) {
        roleService.delete(id);
        return new ResponseEntity<>(true, HttpStatus.OK);
    }
    @PostMapping(value = "check-code")
    public Boolean codeWasUsed(@RequestBody RoleDto dto) {
        boolean result = true;
        if (dto.getCode() != null && StringUtils.hasText(dto.getCode()) )
            result = roleService.checkCodeWasUsed(dto.getCode(), dto.getId());
        return result;
    }
}
