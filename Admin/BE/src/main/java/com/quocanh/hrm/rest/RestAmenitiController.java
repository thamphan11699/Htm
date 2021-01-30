package com.quocanh.hrm.rest;

import com.quocanh.hrm.Service.AmenitiService;
import com.quocanh.hrm.dto.AdvertisementDto;
import com.quocanh.hrm.dto.AmenitiDto;
import com.quocanh.hrm.dto.serachdto.SearchDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(value = "*")
@RequestMapping(path = "api/ameniti")
public class RestAmenitiController {

    @Autowired
    AmenitiService amenitiService;

    @PostMapping(value = "/searchByPage")
    public ResponseEntity<Page<AmenitiDto>> searchBypage(@RequestBody SearchDto dto) {
        Page<AmenitiDto> result = amenitiService.searchByPage(dto);
        return  new ResponseEntity<>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @PostMapping(value = "")
    public ResponseEntity<AmenitiDto> create(@RequestBody AmenitiDto dto) {
        AmenitiDto result = amenitiService.saveOrUpdate(dto, null);
        return  new ResponseEntity<>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }
    @PutMapping(value = "/{id}")
    public ResponseEntity<AmenitiDto> update(@RequestBody AmenitiDto dto, @PathVariable("id") Long id) {
        AmenitiDto result = amenitiService.saveOrUpdate(dto, id);
        return  new ResponseEntity<>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<AmenitiDto> getOne(@PathVariable("id") Long id) {
        AmenitiDto result = amenitiService.getOne(id);
        return  new ResponseEntity<>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Boolean> delete(@PathVariable("id") Long id) {
        amenitiService.delete(id);
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    @PostMapping(value = "/check-code")
    public boolean checkCodewasUse(@RequestBody AmenitiDto dto) {
        boolean result = true;
        if (dto.getCode() != null && StringUtils.hasText(dto.getCode()) )
            result = amenitiService.checkCodeWasUsed(dto.getCode(), dto.getId());
        return result;
    }

    @PostMapping(value = "/check-name")
    public boolean checkNamewasUse(@RequestBody AmenitiDto dto) {
        boolean result = true;
        if (dto.getName() != null && StringUtils.hasText(dto.getName())) {
            result = amenitiService.checkNameWasUsed(dto.getName(), dto.getId());
        }
        return result;
    }
}
