package com.quocanh.hrm.domain;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.Set;

@XmlRootElement
@Table(name = "tbl_price")
@Entity
public class Price extends BaseObject{

    @Column(name = "name")
    private String name;

    @Column(name = "code")
    private String code;

    @Column(name = "value")
    private String value;

    @OneToMany(mappedBy = "price", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<RoomPrice> roomPrices;

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

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public Set<RoomPrice> getRoomPrices() {
        return roomPrices;
    }

    public void setRoomPrices(Set<RoomPrice> roomPrices) {
        this.roomPrices = roomPrices;
    }
}
