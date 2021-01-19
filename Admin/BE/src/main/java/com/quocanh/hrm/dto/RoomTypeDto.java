package com.quocanh.hrm.dto;

import com.quocanh.hrm.domain.RoomType;

public class RoomTypeDto extends BaseObjectDto{
    private RoomDto room;
    private TypeDto type;

    public RoomDto getRoom() {
        return room;
    }

    public void setRoom(RoomDto room) {
        this.room = room;
    }

    public TypeDto getType() {
        return type;
    }

    public void setType(TypeDto type) {
        this.type = type;
    }

    public RoomTypeDto(RoomType entity) {
        super();
        if (entity.getRoom() != null) {
            this.room = new RoomDto(entity.getRoom(), true);
        }
        if (entity.getType() != null) {
            this.type = new TypeDto(entity.getType(), true);
        }
    }
}
