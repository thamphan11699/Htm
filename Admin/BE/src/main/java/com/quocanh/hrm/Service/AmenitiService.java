package com.quocanh.hrm.Service;

import com.quocanh.hrm.dto.AmenitiDto;
import com.quocanh.hrm.dto.serachdto.SearchDto;
import org.springframework.data.domain.Page;

public interface AmenitiService {
    Page<AmenitiDto> searchByPage(SearchDto dto);
    AmenitiDto saveOrUpdate(AmenitiDto dto, Long id);
    AmenitiDto getOne(Long id);
    void delete(Long id);
    boolean checkCodeWasUsed(String code, Long id);
    boolean checkNameWasUsed(String name, Long id);
}
