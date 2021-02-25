package com.quocanh.hrm.Service;

import com.quocanh.hrm.dto.FeedBackDto;
import com.quocanh.hrm.dto.serachdto.SearchDto;
import org.springframework.data.domain.Page;

public interface FeedBackService {
    Page<FeedBackDto> searchByPage(SearchDto dto);
    FeedBackDto saveOrUpdate(FeedBackDto dto, Long id);
    FeedBackDto getOne(Long id);
    void delete(Long id);
}
