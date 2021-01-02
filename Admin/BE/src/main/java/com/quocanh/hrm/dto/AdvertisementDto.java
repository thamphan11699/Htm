package com.quocanh.hrm.dto;

import com.quocanh.hrm.domain.Advertisement;

public class AdvertisementDto extends BaseObjectDto{
    private String name;
    private String code;
    private String content;
    private String mainImage;

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

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getMainImage() {
        return mainImage;
    }

    public void setMainImage(String mainImage) {
        this.mainImage = mainImage;
    }
    public AdvertisementDto() {}

    public AdvertisementDto(Advertisement entity) {
        this.id = entity.getId();
        this.createDate = entity.getCreateDate();
        this.modifyDate = entity.getModifyDate();
        this.code = entity.getCode();
        this.name = entity.getName();
        this.content = entity.getContent();
        this.mainImage = entity.getMainImage();
    }
}
