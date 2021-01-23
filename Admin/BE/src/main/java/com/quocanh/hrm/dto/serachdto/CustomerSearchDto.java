package com.quocanh.hrm.dto.serachdto;

public class CustomerSearchDto extends SearchDto{
    private int customerType;

    public int getCustomerType() {
        return customerType;
    }

    public void setCustomerType(int customerType) {
        this.customerType = customerType;
    }
}
