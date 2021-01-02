package com.quocanh.hrm.dto;

import com.quocanh.hrm.domain.Promotion;

public class PromotionDto extends BaseObjectDto{
    private String name;
    private String code;
    private Integer value;
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

    public Integer getValue() {
        return value;
    }

    public void setValue(Integer value) {
        this.value = value;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public PromotionDto() {}

    public PromotionDto(Promotion entity) {
        this.id = entity.getId();
        this.createDate = entity.getCreateDate();
        this.modifyDate = entity.getModifyDate();
        this.name = entity.getName();
        this.code = entity.getCode();
        this.value = entity.getValue();
        this.description = entity.getDescription();
    }
}
