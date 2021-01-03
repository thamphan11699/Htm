package com.quocanh.hrm.rest;

import com.quocanh.hrm.Service.TypeService;
import com.quocanh.hrm.dto.NewsDto;
import com.quocanh.hrm.dto.RoomTypeDto;
import com.quocanh.hrm.dto.TypeDto;
import com.quocanh.hrm.dto.serachdto.SearchDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(value = "*")
@RequestMapping(path = "api/type")
public class RestTypeController {

    @Autowired
    TypeService typeService;

    @PostMapping(value = "/searchByPage")
    public ResponseEntity<Page<TypeDto>> searchBypage(@RequestBody SearchDto dto) {
        Page<TypeDto> result = typeService.searchByPage(dto);
        return  new ResponseEntity<>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @PostMapping(value = "")
    public ResponseEntity<TypeDto> create(@RequestBody TypeDto dto) {
        TypeDto result = typeService.saveOrUpdate(dto, null);
        return  new ResponseEntity<>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }
    @PutMapping(value = "/{id}")
    public ResponseEntity<TypeDto> update(@RequestBody TypeDto dto, @PathVariable("id") Long id) {
        TypeDto result = typeService.saveOrUpdate(dto, id);
        return  new ResponseEntity<>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<TypeDto> getOne(@PathVariable("id") Long id) {
        TypeDto result = typeService.getOne(id);
        return  new ResponseEntity<>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Boolean> delete(@PathVariable("id") Long id) {
        typeService.delete(id);
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    @PostMapping(value = "check-code")
    public boolean checkCodewasUse(@RequestBody TypeDto dto) {
        boolean result = true;
        if (dto.getCode() != null && StringUtils.hasText(dto.getCode()) )
            result = typeService.checkCodeWasUsed(dto.getCode(), dto.getId());
        return result;
    }

    @PostMapping(value = "check-name")
    public boolean checkNamewasUse(@RequestBody TypeDto dto) {
        boolean result = true;
        if (dto.getName() != null && StringUtils.hasText(dto.getName())) {
            result = typeService.checkNameWasUsed(dto.getName(), dto.getId());
        }
        return result;
    }
}
