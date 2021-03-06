package com.quocanh.hrm.dto;

import com.quocanh.hrm.domain.Employee;
import com.quocanh.hrm.domain.EmployeeShift;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

public class EmployeeDto extends BaseObjectDto{

    private String code;
    private String fullName;
    private String email;
    private String phoneNumber;
    private Date birthDay;
    private String gender;
    private String address;
    private String username;
    private String password;
    private UserDto user;
    private RoleDto role;
    private String mainImageUrl;
    private Set<ShiftDto> shifts;

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public Date getBirthDay() {
        return birthDay;
    }

    public void setBirthDay(Date birthDay) {
        this.birthDay = birthDay;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public UserDto getUser() {
        return user;
    }

    public void setUser(UserDto user) {
        this.user = user;
    }

    public RoleDto getRole() {
        return role;
    }

    public void setRole(RoleDto role) {
        this.role = role;
    }

    public String getMainImageUrl() {
        return mainImageUrl;
    }

    public void setMainImageUrl(String mainImageUrl) {
        this.mainImageUrl = mainImageUrl;
    }

    public Set<ShiftDto> getShifts() {
        return shifts;
    }

    public void setShifts(Set<ShiftDto> shifts) {
        this.shifts = shifts;
    }

    public EmployeeDto() {}

    public EmployeeDto(Employee entity) {
        this.id = entity.getId();
        this.createDate = entity.getCreateDate();
        this.modifyDate = entity.getModifyDate();
        this.code = entity.getCode();
        this.fullName= entity.getFullName();
        this.email = entity.getEmail();
        this.phoneNumber = entity.getPhoneNumber();
        this.birthDay = entity.getBirthDay();
        this.gender = entity.getGender();
        this.address = entity.getAddress();
        this.user = new UserDto(entity.getUser());
        this.role = new RoleDto(entity.getUser().getRole());
        this.username = entity.getUser().getUsername();
        this.password = entity.getUser().getPassword();
        this.mainImageUrl = entity.getImagePath();
        if (entity.getEmployeeShifts() != null && entity.getEmployeeShifts().size() > 0) {
            this.shifts = new HashSet<ShiftDto>();
            for (EmployeeShift employeeShift : entity.getEmployeeShifts()) {
                ShiftDto dto = new ShiftDto(employeeShift.getShift());
                this.shifts.add(dto);
            }
        }
    }
    public EmployeeDto(Employee entity, boolean simple) {
        this.id = entity.getId();
        this.createDate = entity.getCreateDate();
        this.modifyDate = entity.getModifyDate();
        this.code = entity.getCode();
        this.fullName= entity.getFullName();
        this.email = entity.getEmail();
        this.phoneNumber = entity.getPhoneNumber();
        this.birthDay = entity.getBirthDay();
        this.gender = entity.getGender();
        this.address = entity.getAddress();
        this.user = new UserDto(entity.getUser());
        this.role = new RoleDto(entity.getUser().getRole());
        this.username = entity.getUser().getUsername();
        this.password = entity.getUser().getPassword();
        this.mainImageUrl = entity.getImagePath();
    }
}
