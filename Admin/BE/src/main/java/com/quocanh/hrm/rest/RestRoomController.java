package com.quocanh.hrm.rest;

import com.quocanh.hrm.Service.RoomService;
import com.quocanh.hrm.dto.NewsDto;
import com.quocanh.hrm.dto.RoomDto;
import com.quocanh.hrm.dto.serachdto.SearchDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(value = "*")
@RequestMapping(path = "api/room")
public class RestRoomController {
    @Autowired
    RoomService roomService;

    @PostMapping(value = "/searchByPage")
    public ResponseEntity<Page<RoomDto>> searchBypage(@RequestBody SearchDto dto) {
        Page<RoomDto> result = roomService.searchByPage(dto);
        return  new ResponseEntity<>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @PostMapping(value = "")
    public ResponseEntity<RoomDto> create(@RequestBody RoomDto dto) {
        RoomDto result = roomService.saveOrUpdate(dto, null);
        return  new ResponseEntity<>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }
    @PutMapping(value = "/{id}")
    public ResponseEntity<RoomDto> update(@RequestBody RoomDto dto, @PathVariable("id") Long id) {
        RoomDto result = roomService.saveOrUpdate(dto, id);
        return  new ResponseEntity<>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<RoomDto> getOne(@PathVariable("id") Long id) {
        RoomDto result = roomService.getOne(id);
        return  new ResponseEntity<>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Boolean> delete(@PathVariable("id") Long id) {
        roomService.delete(id);
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    @PostMapping(value = "check-code")
    public boolean checkCodewasUse(@RequestBody RoomDto dto) {
        boolean result = true;
        if (dto.getCode() != null && StringUtils.hasText(dto.getCode()) )
            result = roomService.checkCodeWasUsed(dto.getCode(), dto.getId());
        return result;
    }

    @PostMapping(value = "check-name")
    public boolean checkNamewasUse(@RequestBody RoomDto dto) {
        boolean result = true;
        if (dto.getName() != null && StringUtils.hasText(dto.getName())) {
            result = roomService.checkNameWasUsed(dto.getName(), dto.getId());
        }
        return result;
    }
}
