package com.quocanh.hrm.dto;

import com.quocanh.hrm.domain.RoomType;

public class RoomTypeDto extends BaseObjectDto{
    private String name;
    private String code;
    private Boolean children;
    private String description;

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

    public Boolean getChildren() {
        return children;
    }

    public void setChildren(Boolean children) {
        this.children = children;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public RoomTypeDto() {}

    public RoomTypeDto(RoomType entity) {
        this.id = entity.getId();
        this.createDate = entity.getCreateDate();
        this.modifyDate = entity.getModifyDate();
        this.name = entity.getName();
        this.code = entity.getCode();
        this.children = entity.getChildren();
        this.description = entity.getDescription();
    }
}
