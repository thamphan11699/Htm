package com.quocanh.hrm.Service;

import com.quocanh.hrm.dto.RoleDto;
import com.quocanh.hrm.dto.UserDto;
import com.quocanh.hrm.dto.serachdto.SearchDto;
import org.springframework.data.domain.Page;

public interface RoleService {
    Page<RoleDto> searchByPage(SearchDto dto);
    RoleDto saveOrUpdate(RoleDto dto, Long id);
    RoleDto getOne(Long id);
    void delete(Long id);
    boolean checkCodeWasUsed(String code, Long id);
    boolean checkNameWasUsed(String name, Long id);
}
