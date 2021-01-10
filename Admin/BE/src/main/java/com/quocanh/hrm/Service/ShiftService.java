package com.quocanh.hrm.Service;

import com.quocanh.hrm.dto.ShiftDto;
import com.quocanh.hrm.dto.serachdto.SearchDto;
import org.springframework.data.domain.Page;

public interface ShiftService {
    Page<ShiftDto> searchByPage(SearchDto dto);
    ShiftDto saveOrUpdate(ShiftDto dto, Long id);
    ShiftDto getOne(Long id);
    void delete(Long id);
    boolean checkCodeWasUsed(String code, Long id);
    boolean checkNameWasUsed(String name, Long id);
}
