package com.quocanh.hrm.dto;

import com.quocanh.hrm.domain.News;

public class NewsDto extends BaseObjectDto{
    private String name;
    private String code;
    private String title;
    private String content;

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

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public NewsDto() {
    }

    public NewsDto(News entity) {
        this.id = entity.getId();
        this.createDate = entity.getCreateDate();
        this.modifyDate = entity.getModifyDate();
        this.name = entity.getName();
        this.code = entity.getCode();
        this.title = entity.getTitle();
        this.content = entity.getContent();

    }
}
