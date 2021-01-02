package com.quocanh.hrm.rest;

import com.quocanh.hrm.Service.PromotionService;
import com.quocanh.hrm.dto.NewsDto;
import com.quocanh.hrm.dto.PromotionDto;
import com.quocanh.hrm.dto.serachdto.SearchDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(value = "*")
@RequestMapping(path = "api/promotion")
public class RestPromotionController {

    @Autowired
    PromotionService promotionService;

    @PostMapping(value = "/searchByPage")
    public ResponseEntity<Page<PromotionDto>> searchByPage(@RequestBody SearchDto dto) {
        Page<PromotionDto> page = promotionService.searchByPage(dto);
        return new ResponseEntity<>(page, page != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @PostMapping(value = "")
    public ResponseEntity<PromotionDto> create(@RequestBody PromotionDto dto) {
        PromotionDto result = promotionService.saveOrUpdate(dto, null);
        return new ResponseEntity<>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<PromotionDto> update(@RequestBody PromotionDto dto, @PathVariable("id") Long id) {
        PromotionDto result = promotionService.saveOrUpdate(dto, id);
        return new ResponseEntity<>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @GetMapping(value = "/{id")
    public ResponseEntity<PromotionDto> getOne(@PathVariable("id") Long id) {
        PromotionDto result = promotionService.getOne(id);
        return new ResponseEntity<>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Boolean> delete(@PathVariable("id") Long id) {
        promotionService.delete(id);
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    @PostMapping(value = "check-code")
    public boolean checkCodeWasUse(@RequestBody PromotionDto dto) {
        boolean result = true;
        if (dto.getCode() != null && StringUtils.hasText(dto.getCode()) )
            result = promotionService.checkCodeWasUsed(dto.getCode(), dto.getId());
        return result;
    }

    @PostMapping(value = "check-name")
    public boolean checkNamewasUse(@RequestBody NewsDto dto) {
        boolean result = true;
        if (dto.getName() != null && StringUtils.hasText(dto.getName())) {
            result = promotionService.checkNameWasUsed(dto.getName(), dto.getId());
        }
        return result;
    }
}
