package com.quocanh.hrm.Service;

import com.quocanh.hrm.dto.RoomTypeDto;
import com.quocanh.hrm.dto.TypeDto;
import com.quocanh.hrm.dto.serachdto.SearchDto;
import org.springframework.data.domain.Page;

public interface TypeService {
    Page<TypeDto> searchByPage(SearchDto dto);
    TypeDto saveOrUpdate(TypeDto dto, Long id);
    TypeDto getOne(Long id);
    void delete(Long id);
    boolean checkCodeWasUsed(String code, Long id);
    boolean checkNameWasUsed(String name, Long id);
}
