package com.quocanh.hrm.dto.serachdto;

import java.util.Set;

public class RoomSearchDto extends SearchDto{
    private String type;

    private Integer typeStatus;

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Integer getTypeStatus() {
        return typeStatus;
    }

    public void setTypeStatus(Integer typeStatus) {
        this.typeStatus = typeStatus;
    }
}
