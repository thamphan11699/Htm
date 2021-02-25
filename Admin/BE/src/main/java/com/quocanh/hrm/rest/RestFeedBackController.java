package com.quocanh.hrm.rest;

import com.quocanh.hrm.Service.FeedBackService;
import com.quocanh.hrm.dto.AdvertisementDto;
import com.quocanh.hrm.dto.FeedBackDto;
import com.quocanh.hrm.dto.serachdto.SearchDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import javax.persistence.criteria.Fetch;

@RestController
@CrossOrigin(value = "*")
@RequestMapping(path = "api/feed-back")
public class RestFeedBackController {

    @Autowired
    FeedBackService feedBackService;

    @PostMapping(value = "/searchByPage")
    public ResponseEntity<Page<FeedBackDto>> searchBypage(@RequestBody SearchDto dto) {
        Page<FeedBackDto> result = feedBackService.searchByPage(dto);
        return  new ResponseEntity<>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @PostMapping(value = "")
    public ResponseEntity<FeedBackDto> create(@RequestBody FeedBackDto dto) {
        FeedBackDto result = feedBackService.saveOrUpdate(dto, null);
        return  new ResponseEntity<>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }
    @PutMapping(value = "/{id}")
    public ResponseEntity<FeedBackDto> update(@RequestBody FeedBackDto dto, @PathVariable("id") Long id) {
        FeedBackDto result = feedBackService.saveOrUpdate(dto, id);
        return  new ResponseEntity<>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<FeedBackDto> getOne(@PathVariable("id") Long id) {
        FeedBackDto result = feedBackService.getOne(id);
        return  new ResponseEntity<>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Boolean> delete(@PathVariable("id") Long id) {
        feedBackService.delete(id);
        return new ResponseEntity<>(true, HttpStatus.OK);
    }


}
