package com.quocanh.hrm.rest;

import com.quocanh.hrm.Service.NewsService;
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
@RequestMapping(path = "api/news")
public class RestNewsController {

    @Autowired
    NewsService newsService;

    @PostMapping(value = "/searchByPage")
    public ResponseEntity<Page<NewsDto>> searchBypage(@RequestBody SearchDto dto) {
        Page<NewsDto> result = newsService.searchByPage(dto);
        return  new ResponseEntity<>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @PostMapping(value = "")
    public ResponseEntity<NewsDto> create(@RequestBody NewsDto dto) {
        NewsDto result = newsService.saveOrUpdate(dto, null);
        return  new ResponseEntity<>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }
    @PutMapping(value = "/{id}")
    public ResponseEntity<NewsDto> update(@RequestBody NewsDto dto, @PathVariable("id") Long id) {
        NewsDto result = newsService.saveOrUpdate(dto, id);
        return  new ResponseEntity<>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<NewsDto> getOne(@PathVariable("id") Long id) {
        NewsDto result = newsService.getOne(id);
        return  new ResponseEntity<>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Boolean> delete(@PathVariable("id") Long id) {
        newsService.delete(id);
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    @PostMapping(value = "check-code")
    public boolean checkCodewasUse(@RequestBody NewsDto dto) {
        boolean result = true;
        if (dto.getCode() != null && StringUtils.hasText(dto.getCode()) )
            result = newsService.checkCodeWasUsed(dto.getCode(), dto.getId());
        return result;
    }

    @PostMapping(value = "check-name")
    public boolean checkNamewasUse(@RequestBody NewsDto dto) {
        boolean result = true;
        if (dto.getName() != null && StringUtils.hasText(dto.getName())) {
            result = newsService.checkNameWasUsed(dto.getName(), dto.getId());
        }
        return result;
    }

}
