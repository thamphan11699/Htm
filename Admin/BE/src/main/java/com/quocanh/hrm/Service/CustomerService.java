package com.quocanh.hrm.Service;

import com.quocanh.hrm.domain.Customer;
import com.quocanh.hrm.dto.CustomerDto;
import com.quocanh.hrm.dto.NewsDto;
import com.quocanh.hrm.dto.serachdto.CustomerSearchDto;
import com.quocanh.hrm.dto.serachdto.SearchDto;
import org.springframework.data.domain.Page;

public interface CustomerService {
    Page<CustomerDto> searchByPage(CustomerSearchDto dto);
    CustomerDto Booking(CustomerDto dto, Long id);
    CustomerDto checkIn(CustomerDto dto, Long id);
    CustomerDto checkOut(CustomerDto dto, Long id);
    CustomerDto acceptance(CustomerDto dto, Long id);
    CustomerDto reject(CustomerDto dto, Long id);
    CustomerDto getOne(Long id);
    void delete(Long id);
    boolean checkCodeWasUsed(String code, Long id);
    boolean checkNameWasUsed(String name, Long id);
}
