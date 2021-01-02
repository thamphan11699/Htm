package com.quocanh.hrm.rest;

import com.quocanh.hrm.Service.RoomTypeService;
import com.quocanh.hrm.dto.NewsDto;
import com.quocanh.hrm.dto.RoomTypeDto;
import com.quocanh.hrm.dto.serachdto.SearchDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(value = "*")
@RequestMapping(path = "api/room-type")
public class RestRoomTypeController {
    @Autowired
    RoomTypeService roomTypeService;

    @PostMapping(value = "/searchByPage")
    public ResponseEntity<Page<RoomTypeDto>> searchBypage(@RequestBody SearchDto dto) {
        Page<RoomTypeDto> result = roomTypeService.searchByPage(dto);
        return  new ResponseEntity<>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @PostMapping(value = "")
    public ResponseEntity<RoomTypeDto> create(@RequestBody RoomTypeDto dto) {
        RoomTypeDto result = roomTypeService.saveOrUpdate(dto, null);
        return  new ResponseEntity<>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }
    @PutMapping(value = "/{id}")
    public ResponseEntity<RoomTypeDto> update(@RequestBody RoomTypeDto dto, @PathVariable("id") Long id) {
        RoomTypeDto result = roomTypeService.saveOrUpdate(dto, id);
        return  new ResponseEntity<>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<RoomTypeDto> getOne(@PathVariable("id") Long id) {
        RoomTypeDto result = roomTypeService.getOne(id);
        return  new ResponseEntity<>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Boolean> delete(@PathVariable("id") Long id) {
        roomTypeService.delete(id);
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    @PostMapping(value = "check-code")
    public boolean checkCodewasUse(@RequestBody NewsDto dto) {
        boolean result = true;
        if (dto.getCode() != null && StringUtils.hasText(dto.getCode()) )
            result = roomTypeService.checkCodeWasUsed(dto.getCode(), dto.getId());
        return result;
    }

    @PostMapping(value = "check-name")
    public boolean checkNamewasUse(@RequestBody NewsDto dto) {
        boolean result = true;
        if (dto.getName() != null && StringUtils.hasText(dto.getName())) {
            result = roomTypeService.checkNameWasUsed(dto.getName(), dto.getId());
        }
        return result;
    }

}
