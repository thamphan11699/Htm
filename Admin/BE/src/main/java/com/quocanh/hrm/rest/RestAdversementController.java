package com.quocanh.hrm.rest;

import com.quocanh.hrm.Service.AdvertisementService;
import com.quocanh.hrm.dto.AdvertisementDto;
import com.quocanh.hrm.dto.NewsDto;
import com.quocanh.hrm.dto.serachdto.SearchDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(value = "*")
@RequestMapping(path = "api/adv")
public class RestAdversementController {

    @Autowired
    AdvertisementService advertisementService;

    @PostMapping(value = "/searchByPage")
    public ResponseEntity<Page<AdvertisementDto>> searchBypage(@RequestBody SearchDto dto) {
        Page<AdvertisementDto> result = advertisementService.searchByPage(dto);
        return  new ResponseEntity<>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @PostMapping(value = "")
    public ResponseEntity<AdvertisementDto> create(@RequestBody AdvertisementDto dto) {
        AdvertisementDto result = advertisementService.saveOrUpdate(dto, null);
        return  new ResponseEntity<>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }
    @PutMapping(value = "/{id}")
    public ResponseEntity<AdvertisementDto> update(@RequestBody AdvertisementDto dto, @PathVariable("id") Long id) {
        AdvertisementDto result = advertisementService.saveOrUpdate(dto, id);
        return  new ResponseEntity<>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<AdvertisementDto> getOne(@PathVariable("id") Long id) {
        AdvertisementDto result = advertisementService.getOne(id);
        return  new ResponseEntity<>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Boolean> delete(@PathVariable("id") Long id) {
        advertisementService.delete(id);
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    @PostMapping(value = "check-code")
    public boolean checkCodewasUse(@RequestBody NewsDto dto) {
        boolean result = true;
        if (dto.getCode() != null && StringUtils.hasText(dto.getCode()) )
            result = advertisementService.checkCodeWasUsed(dto.getCode(), dto.getId());
        return result;
    }

    @PostMapping(value = "check-name")
    public boolean checkNamewasUse(@RequestBody NewsDto dto) {
        boolean result = true;
        if (dto.getName() != null && StringUtils.hasText(dto.getName())) {
            result = advertisementService.checkNameWasUsed(dto.getName(), dto.getId());
        }
        return result;
    }
}
