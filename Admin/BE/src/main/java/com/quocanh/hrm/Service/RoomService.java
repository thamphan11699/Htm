package com.quocanh.hrm.Service;

import com.quocanh.hrm.dto.RoomDto;
import com.quocanh.hrm.dto.serachdto.SearchDto;
import org.springframework.data.domain.Page;

public interface RoomService {
    Page<RoomDto> searchByPage(SearchDto dto);
    RoomDto saveOrUpdate(RoomDto dto, Long id);
    RoomDto getOne(Long id);
    void delete(Long id);
    boolean checkCodeWasUsed(String code, Long id);
    boolean checkNameWasUsed(String name, Long id);
}
