package com.quocanh.hrm.domain;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.Set;

@XmlRootElement
@Table(name = "tbl_room")
@Entity
public class Room extends BaseObject{

    @Column(name = "name")
    private String name;

    @Column(name = "code")
    private String code;

    @Column(name = "status")
    private boolean status;

    @OneToMany(mappedBy = "room", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<RoomType> roomTypes;

    @OneToMany(mappedBy = "room", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<RoomPrice> roomPrices;

    @OneToMany(mappedBy = "room", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<RoomPromotion> roomPromotions;

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

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public Set<RoomType> getRoomTypes() {
        return roomTypes;
    }

    public void setRoomTypes(Set<RoomType> roomTypes) {
        this.roomTypes = roomTypes;
    }

    public Set<RoomPrice> getRoomPrices() {
        return roomPrices;
    }

    public void setRoomPrices(Set<RoomPrice> roomPrices) {
        this.roomPrices = roomPrices;
    }

    public Set<RoomPromotion> getRoomPromotions() {
        return roomPromotions;
    }

    public void setRoomPromotions(Set<RoomPromotion> roomPromotions) {
        this.roomPromotions = roomPromotions;
    }
}
