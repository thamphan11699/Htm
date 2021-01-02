package com.quocanh.hrm.Service;

import com.quocanh.hrm.dto.NewsDto;
import com.quocanh.hrm.dto.RoomTypeDto;
import com.quocanh.hrm.dto.serachdto.SearchDto;
import org.springframework.data.domain.Page;

public interface RoomTypeService {
    Page<RoomTypeDto> searchByPage(SearchDto dto);
    RoomTypeDto saveOrUpdate(RoomTypeDto dto, Long id);
    RoomTypeDto getOne(Long id);
    void delete(Long id);
    boolean checkCodeWasUsed(String code, Long id);
    boolean checkNameWasUsed(String name, Long id);
}
