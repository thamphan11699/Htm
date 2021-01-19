package com.quocanh.hrm.domain;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.Set;

@XmlRootElement
@Table(name = "tbl_promotion")
@Entity
public class Promotion extends BaseObject{

    @Column(name = "name")
    private String name;

    @Column(name = "code")
    private String code;

    @Column(name = "value")
    private Integer value;

    @Column(name = "description")
    private String description;

    @OneToMany(mappedBy = "promotion", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
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

    public Integer getValue() {
        return value;
    }

    public void setValue(Integer value) {
        this.value = value;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Set<RoomPromotion> getRoomPromotions() {
        return roomPromotions;
    }

    public void setRoomPromotions(Set<RoomPromotion> roomPromotions) {
        this.roomPromotions = roomPromotions;
    }
}
