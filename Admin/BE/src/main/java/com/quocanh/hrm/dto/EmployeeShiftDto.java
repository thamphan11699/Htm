package com.quocanh.hrm.dto;

import com.quocanh.hrm.domain.EmployeeShift;

public class EmployeeShiftDto extends BaseObjectDto{
    private EmployeeDto employee;
    private ShiftDto shift;

    public EmployeeDto getEmployee() {
        return employee;
    }

    public void setEmployee(EmployeeDto employee) {
        this.employee = employee;
    }

    public ShiftDto getShift() {
        return shift;
    }

    public void setShift(ShiftDto shift) {
        this.shift = shift;
    }

    public EmployeeShiftDto() {}

    public EmployeeShiftDto(EmployeeShift entity) {
        this.id = entity.getId();
        this.createDate = entity.getCreateDate();
        this.modifyDate = entity.getModifyDate();
        if (entity.getEmployee() != null) {
            this.employee = new EmployeeDto(entity.getEmployee());
        }
        if (entity.getShift() != null) {
            this.shift = new ShiftDto(entity.getShift());
        }
    }
}
