package com.quocanh.hrm.dto;

import com.quocanh.hrm.domain.Shift;

import java.text.SimpleDateFormat;
import java.util.Date;

public class ShiftDto extends BaseObjectDto{
    private String name;
    private String code;
    private Date startTime;
    private Date endTime;
    private double totalHours;

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

    public Date getStartTime() {
        return startTime;
    }

    public void setStartTime(Date startTime) {
        this.startTime = startTime;
    }

    public Date getEndTime() {
        return endTime;
    }

    public void setEndTime(Date endTime) {
        this.endTime = endTime;
    }

    public double getTotalHours() {
        return totalHours;
    }

    public void setTotalHours(double totalHours) {
        this.totalHours = totalHours;
    }

    public ShiftDto() {}

    public ShiftDto(Shift entity) {
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("HH:mm");
        this.id = entity.getId();
        this.createDate = entity.getCreateDate();
        this.modifyDate = entity.getModifyDate();
        this.name = entity.getName();
        this.code = entity.getCode();
        this.startTime = entity.getStartTime();
        this.endTime = entity.getEndTime();
        this.totalHours = entity.getTotalHours();
    }
}
