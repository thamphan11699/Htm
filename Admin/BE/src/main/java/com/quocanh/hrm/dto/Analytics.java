package com.quocanh.hrm.dto;

public class Analytics {

    private String revenue;
    private String totalCustomer;
    private String momentCustomer;
    private String roomNotUsed;

    public String getRevenue() {
        return revenue;
    }

    public void setRevenue(String revenue) {
        this.revenue = revenue;
    }

    public String getTotalCustomer() {
        return totalCustomer;
    }

    public void setTotalCustomer(String totalCustomer) {
        this.totalCustomer = totalCustomer;
    }

    public String getMomentCustomer() {
        return momentCustomer;
    }

    public void setMomentCustomer(String momentCustomer) {
        this.momentCustomer = momentCustomer;
    }

    public String getRoomNotUsed() {
        return roomNotUsed;
    }

    public void setRoomNotUsed(String roomNotUsed) {
        this.roomNotUsed = roomNotUsed;
    }
}
