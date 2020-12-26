package com.quocanh.hrm.Service;

import com.quocanh.hrm.dto.EmployeeDto;
import com.quocanh.hrm.dto.serachdto.SearchDto;
import org.springframework.data.domain.Page;

public interface EmployeeService {
    void delete(Long id);
    EmployeeDto saveOrUpdate(EmployeeDto dto, Long id, Long UserId);
    EmployeeDto getOne(Long id);
    Page<EmployeeDto> searchByPage(SearchDto dto);
    EmployeeDto updateImgae(String imagePath, Long id);

}
