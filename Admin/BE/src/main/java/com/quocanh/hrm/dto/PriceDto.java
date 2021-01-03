package com.quocanh.hrm.dto;

import com.quocanh.hrm.domain.Price;

public class PriceDto extends BaseObjectDto{
    private String name;
    private String code;
    private String value;

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

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public PriceDto() {}

    public PriceDto(Price entity) {
        this.id = entity.getId();
        this.createDate = entity.getCreateDate();
        this.modifyDate = entity.getModifyDate();
        this.name = entity.getName();
        this.code = entity.getCode();
        this.value = entity.getValue();
    }
}
