package com.quocanh.hrm.rest;

import com.quocanh.hrm.Service.CustomerService;
import com.quocanh.hrm.domain.Customer;
import com.quocanh.hrm.dto.CustomerDto;
import com.quocanh.hrm.dto.NewsDto;
import com.quocanh.hrm.dto.serachdto.CustomerSearchDto;
import com.quocanh.hrm.dto.serachdto.SearchDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(value = "*")
@RequestMapping(path = "api/customer")
public class RestCustomerController {

    @Autowired
    CustomerService customerService;

    @PostMapping(value = "/searchByPage")
    public ResponseEntity<Page<CustomerDto>> searchBypage(@RequestBody CustomerSearchDto dto) {
        Page<CustomerDto> result = customerService.searchByPage(dto);
        return  new ResponseEntity<>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }
    @PostMapping(value = "/booking")
    public ResponseEntity<CustomerDto> pending(@RequestBody CustomerDto dto) {
        CustomerDto result = customerService.Booking(dto, null);
        return  new ResponseEntity<>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @PutMapping(value = "/accept/{id}")
    public ResponseEntity<CustomerDto> accep(@RequestBody CustomerDto dto, @PathVariable("id") Long id) {
        CustomerDto result = customerService.acceptance(dto, id);
        return  new ResponseEntity<>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @PutMapping(value = "/reject/{id}")
    public ResponseEntity<CustomerDto> reject(@RequestBody CustomerDto dto, @PathVariable("id") Long id) {
        CustomerDto result = customerService.reject(dto, id);
        return  new ResponseEntity<>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @PostMapping(value = "/check-in")
    public ResponseEntity<CustomerDto> checkInAtHotel(@RequestBody CustomerDto dto) {
        CustomerDto result = customerService.checkIn(dto, null);
        return  new ResponseEntity<>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }
    @PutMapping(value = "/check-in/{id}")
    public ResponseEntity<CustomerDto> checkInWithBooking(@RequestBody CustomerDto dto, @PathVariable("id") Long id) {
        CustomerDto result = customerService.checkIn(dto, id);
        return  new ResponseEntity<>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @PutMapping(value = "/check-out/{id}")
    public ResponseEntity<CustomerDto> chectOut(@RequestBody CustomerDto dto, @PathVariable("id") Long id) {
        CustomerDto result = customerService.checkOut(dto, id);
        return  new ResponseEntity<>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<CustomerDto> getOne(@PathVariable("id") Long id) {
        CustomerDto result = customerService.getOne(id);
        return  new ResponseEntity<>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @GetMapping(value = "")
    public ResponseEntity<List<CustomerDto>> getAll() {
        List<CustomerDto> result = customerService.getAll();
        return  new ResponseEntity<>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Boolean> delete(@PathVariable("id") Long id) {
        customerService.delete(id);
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

}
