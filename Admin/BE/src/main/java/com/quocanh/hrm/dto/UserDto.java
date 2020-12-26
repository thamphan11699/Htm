package com.quocanh.hrm.dto;

import com.quocanh.hrm.domain.Role;
import com.quocanh.hrm.domain.User;

public class UserDto extends BaseObjectDto{
    private String username;
    private String password;
    private RoleDto role;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public RoleDto getRole() {
        return role;
    }

    public void setRole(RoleDto role) {
        this.role = role;
    }

    public UserDto() {
    }

    public UserDto(User entity) {
        this.id = entity.getId();
        this.createDate = entity.getCreateDate();
        this.modifyDate = entity.getModifyDate();
        this.username = entity.getUsername();
        this.password = entity.getPassword();
        this.role = new RoleDto(entity.getRole());
    }
}
