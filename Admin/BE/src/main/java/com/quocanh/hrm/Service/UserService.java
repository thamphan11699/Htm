package com.quocanh.hrm.Service;

import com.quocanh.hrm.dto.UserDto;
import com.quocanh.hrm.dto.serachdto.SearchDto;
import org.springframework.data.domain.Page;

public interface UserService {
    Page<UserDto> searchByPage(SearchDto dto);
    UserDto saveOrUpdate(UserDto dto, Long id);
    UserDto getOne(Long id);
    void delete(Long id);
    boolean checkUsename(String username, Long id);
    UserDto checkLogin(UserDto dto);
}
