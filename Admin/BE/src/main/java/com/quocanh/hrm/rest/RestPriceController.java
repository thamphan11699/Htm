package com.quocanh.hrm.rest;

import com.quocanh.hrm.Service.PriceService;
import com.quocanh.hrm.dto.NewsDto;
import com.quocanh.hrm.dto.PriceDto;
import com.quocanh.hrm.dto.serachdto.SearchDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(value = "*")
@RequestMapping(path = "api/price")
public class RestPriceController {

    @Autowired
    PriceService priceService;

    @PostMapping(value = "/searchByPage")
    public ResponseEntity<Page<PriceDto>> searchBypage(@RequestBody SearchDto dto) {
        Page<PriceDto> result = priceService.searchByPage(dto);
        return  new ResponseEntity<>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @PostMapping(value = "")
    public ResponseEntity<PriceDto> create(@RequestBody PriceDto dto) {
        PriceDto result = priceService.saveOrUpdate(dto, null);
        return  new ResponseEntity<>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }
    @PutMapping(value = "/{id}")
    public ResponseEntity<PriceDto> update(@RequestBody PriceDto dto, @PathVariable("id") Long id) {
        PriceDto result = priceService.saveOrUpdate(dto, id);
        return  new ResponseEntity<>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<PriceDto> getOne(@PathVariable("id") Long id) {
        PriceDto result = priceService.getOne(id);
        return  new ResponseEntity<>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Boolean> delete(@PathVariable("id") Long id) {
        priceService.delete(id);
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    @PostMapping(value = "check-code")
    public boolean checkCodewasUse(@RequestBody PriceDto dto) {
        boolean result = true;
        if (dto.getCode() != null && StringUtils.hasText(dto.getCode()) )
            result = priceService.checkCodeWasUsed(dto.getCode(), dto.getId());
        return result;
    }

    @PostMapping(value = "check-name")
    public boolean checkNamewasUse(@RequestBody PriceDto dto) {
        boolean result = true;
        if (dto.getName() != null && StringUtils.hasText(dto.getName())) {
            result = priceService.checkNameWasUsed(dto.getName(), dto.getId());
        }
        return result;
    }
}
