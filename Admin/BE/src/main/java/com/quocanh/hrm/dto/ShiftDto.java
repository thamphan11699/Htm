package com.quocanh.hrm.dto;

import com.quocanh.hrm.domain.EmployeeShift;
import com.quocanh.hrm.domain.Shift;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

public class ShiftDto extends BaseObjectDto{
    private String name;
    private String code;
    private Date startTime;
    private Date endTime;
    private double totalHours;
    private Set<EmployeeDto> employees;

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

    public Set<EmployeeDto> getEmployees() {
        return employees;
    }

    public void setEmployees(Set<EmployeeDto> employees) {
        this.employees = employees;
    }

    public ShiftDto() {}

    public ShiftDto(Shift entity) {
        this.id = entity.getId();
        this.createDate = entity.getCreateDate();
        this.modifyDate = entity.getModifyDate();
        this.name = entity.getName();
        this.code = entity.getCode();
        this.startTime = entity.getStartTime();
        this.endTime = entity.getEndTime();
        this.totalHours = entity.getTotalHours();
//        if (entity.getEmployeeShifts() != null && entity.getEmployeeShifts().size() > 0) {
//            this.employees = new HashSet<EmployeeDto>();
//            for (EmployeeShift employeeShift : entity.getEmployeeShifts()) {
//                EmployeeDto dto = new EmployeeDto(employeeShift.getEmployee());
//                this.employees.add(dto);
//            }
//        }
    }
    public ShiftDto(Shift entity, boolean simple) {
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
