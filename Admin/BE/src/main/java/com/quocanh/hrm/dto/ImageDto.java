package com.quocanh.hrm.dto;

import com.quocanh.hrm.domain.Image;

public class ImageDto extends BaseObjectDto{

    private String url;

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public ImageDto() {}

    public ImageDto(Image entity) {
        this.id = entity.getId();
        this.createDate = entity.getCreateDate();
        this.modifyDate = entity.getModifyDate();
        this.url = entity.getUrl();
    }
}
