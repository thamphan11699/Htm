package com.quocanh.hrm.rest;

import com.quocanh.hrm.Service.ShiftService;
import com.quocanh.hrm.dto.AdvertisementDto;
import com.quocanh.hrm.dto.ShiftDto;
import com.quocanh.hrm.dto.serachdto.SearchDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(value = "*")
@RequestMapping(path = "api/shift")
public class RestShiftController {

    @Autowired
    ShiftService shiftService;

    @PostMapping(value = "/searchByPage")
    public ResponseEntity<Page<ShiftDto>> searchBypage(@RequestBody SearchDto dto) {
        Page<ShiftDto> result = shiftService.searchByPage(dto);
        return  new ResponseEntity<>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @PostMapping(value = "")
    public ResponseEntity<ShiftDto> create(@RequestBody ShiftDto dto) {
        ShiftDto result = shiftService.saveOrUpdate(dto, null);
        return  new ResponseEntity<>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }
    @PutMapping(value = "/{id}")
    public ResponseEntity<ShiftDto> update(@RequestBody ShiftDto dto, @PathVariable("id") Long id) {
        ShiftDto result = shiftService.saveOrUpdate(dto, id);
        return  new ResponseEntity<>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<ShiftDto> getOne(@PathVariable("id") Long id) {
        ShiftDto result = shiftService.getOne(id);
        return  new ResponseEntity<>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Boolean> delete(@PathVariable("id") Long id) {
        shiftService.delete(id);
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    @PostMapping(value = "check-code")
    public boolean checkCodewasUse(@RequestBody ShiftDto dto) {
        boolean result = true;
        if (dto.getCode() != null && StringUtils.hasText(dto.getCode()) )
            result = shiftService.checkCodeWasUsed(dto.getCode(), dto.getId());
        return result;
    }

    @PostMapping(value = "check-name")
    public boolean checkNamewasUse(@RequestBody ShiftDto dto) {
        boolean result = true;
        if (dto.getName() != null && StringUtils.hasText(dto.getName())) {
            result = shiftService.checkNameWasUsed(dto.getName(), dto.getId());
        }
        return result;
    }
}
