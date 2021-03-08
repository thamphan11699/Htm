package com.quocanh.hrm.rest;

import com.quocanh.hrm.Service.AnalyticsService;
import com.quocanh.hrm.dto.AmenitiDto;
import com.quocanh.hrm.dto.Analytics;
import com.quocanh.hrm.dto.serachdto.AnalyticsSearch;
import com.quocanh.hrm.dto.serachdto.SearchDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(value = "*")
@RequestMapping(path = "api/analytics")
public class RestAnalyticsController {

    @Autowired
    AnalyticsService analyticsService;

    @PostMapping(value = "")
    public ResponseEntity<Analytics> searchBypage(@RequestBody AnalyticsSearch dto) {
        Analytics result = analyticsService.getAnalytics(dto);
        return  new ResponseEntity<>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }
}
