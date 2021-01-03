package com.quocanh.hrm.Service;

import com.quocanh.hrm.dto.PriceDto;
import com.quocanh.hrm.dto.RoleDto;
import com.quocanh.hrm.dto.serachdto.SearchDto;
import org.springframework.data.domain.Page;

public interface PriceService {
    Page<PriceDto> searchByPage(SearchDto dto);
    PriceDto saveOrUpdate(PriceDto dto, Long id);
    PriceDto getOne(Long id);
    void delete(Long id);
    boolean checkCodeWasUsed(String code, Long id);
    boolean checkNameWasUsed(String name, Long id);
}
