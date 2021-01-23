package com.quocanh.hrm.dto;

import com.quocanh.hrm.domain.Customer;

import java.util.Date;

public class CustomerDto extends BaseObjectDto{
    private String name;
    private String code;
    private String email;
    private String phone;
    private String status;
    private Date checkInDate;
    private Date checkOutDate;
    private int adults;
    private int children;
    private String promotionCode;
    private String description;
    private RoomDto room;
    private String identityCard;
    private String totalMoney;
    private String roomWasIn;

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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Date getCheckInDate() {
        return checkInDate;
    }

    public void setCheckInDate(Date checkInDate) {
        this.checkInDate = checkInDate;
    }

    public Date getCheckOutDate() {
        return checkOutDate;
    }

    public void setCheckOutDate(Date checkOutDate) {
        this.checkOutDate = checkOutDate;
    }

    public int getAdults() {
        return adults;
    }

    public RoomDto getRoom() {
        return room;
    }

    public void setRoom(RoomDto room) {
        this.room = room;
    }

    public String getIdentityCard() {
        return identityCard;
    }

    public void setIdentityCard(String identityCard) {
        this.identityCard = identityCard;
    }

    public void setAdults(int adults) {
        this.adults = adults;
    }

    public int getChildren() {
        return children;
    }

    public void setChildren(int children) {
        this.children = children;
    }

    public String getPromotionCode() {
        return promotionCode;
    }

    public void setPromotionCode(String promotionCode) {
        this.promotionCode = promotionCode;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getTotalMoney() {
        return totalMoney;
    }

    public void setTotalMoney(String totalMoney) {
        this.totalMoney = totalMoney;
    }

    public String getRoomWasIn() {
        return roomWasIn;
    }

    public void setRoomWasIn(String roomWasIn) {
        this.roomWasIn = roomWasIn;
    }

    public CustomerDto() {}

    public CustomerDto(Customer entity) {
        this.id = entity.getId();
        this.createDate = entity.getCreateDate();
        this.modifyDate = entity.getModifyDate();
        this.name = entity.getName();
        this.code = entity.getCode();
        this.checkInDate = entity.getCheckInDate();
        this.checkOutDate = entity.getCheckOutDate();
        this.email = entity.getEmail();
        this.phone = entity.getPhone();
        this.status = entity.getStatus();
        this.adults = entity.getAdults();
        this.children = entity.getChildren();
        this.promotionCode = entity.getPromotionCode();
        this.description = entity.getDescription();
        this.identityCard = entity.getIdentityCard();
        this.totalMoney = entity.getTotalMoney();
        this.roomWasIn = entity.getRoomWasIn();
        if (entity.getRoom() != null) {
            this.room = new RoomDto(entity.getRoom());
        }
    }
}
