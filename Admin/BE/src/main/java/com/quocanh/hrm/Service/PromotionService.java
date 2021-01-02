package com.quocanh.hrm.Service;

import com.quocanh.hrm.dto.NewsDto;
import com.quocanh.hrm.dto.PromotionDto;
import com.quocanh.hrm.dto.serachdto.SearchDto;
import org.springframework.data.domain.Page;

public interface PromotionService {
    Page<PromotionDto> searchByPage(SearchDto dto);
    PromotionDto saveOrUpdate(PromotionDto dto, Long id);
    PromotionDto getOne(Long id);
    void delete(Long id);
    boolean checkCodeWasUsed(String code, Long id);
    boolean checkNameWasUsed(String name, Long id);
}
