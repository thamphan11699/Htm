package com.quocanh.hrm.dto;

import com.quocanh.hrm.domain.Role;
import com.quocanh.hrm.domain.User;

import java.util.HashSet;
import java.util.Set;

public class RoleDto extends BaseObjectDto{
    private String name;
    private String code;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }


    public RoleDto() {
    }

    public RoleDto(Role entity) {
        this.id = entity.getId();
        this.createDate = entity.getCreateDate();
        this.modifyDate = entity.getModifyDate();
        this.name = entity.getName();
        this.code = entity.getCode();
    }
}
