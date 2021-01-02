package com.quocanh.hrm.Service;

import com.quocanh.hrm.dto.NewsDto;
import com.quocanh.hrm.dto.RoleDto;
import com.quocanh.hrm.dto.serachdto.SearchDto;
import org.springframework.data.domain.Page;

public interface NewsService {
    Page<NewsDto> searchByPage(SearchDto dto);
    NewsDto saveOrUpdate(NewsDto dto, Long id);
    NewsDto getOne(Long id);
    void delete(Long id);
    boolean checkCodeWasUsed(String code, Long id);
    boolean checkNameWasUsed(String name, Long id);
}
