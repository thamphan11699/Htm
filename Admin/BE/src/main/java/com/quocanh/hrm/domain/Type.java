package com.quocanh.hrm.domain;

import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.ws.Action;
import java.util.Set;

@XmlRootElement
@Table(name = "tbl_type")
@Entity
public class Type extends BaseObject{
    @Column(name = "name")
    private String name;

    @Column(name = "code")
    private String code;

    @Column(name = "adults")
    private int adults;

    @Column(name = "children")
    private int children;

    @Column(name = "description")
    private String description;

    @OneToMany(mappedBy = "type", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<TypeAmeniti> typeAmenitis;

    @OneToMany(mappedBy = "type", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<RoomType> roomTypes;

    @OneToMany(mappedBy = "type", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private Set<TypeImage> typeImages;



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

    public int getAdults() {
        return adults;
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Set<TypeAmeniti> getTypeAmenitis() {
        return typeAmenitis;
    }

    public void setTypeAmenitis(Set<TypeAmeniti> typeAmenitis) {
        this.typeAmenitis = typeAmenitis;
    }

    public Set<RoomType> getRoomTypes() {
        return roomTypes;
    }

    public void setRoomTypes(Set<RoomType> roomTypes) {
        this.roomTypes = roomTypes;
    }

    public Set<TypeImage> getTypeImages() {
        return typeImages;
    }

    public void setTypeImages(Set<TypeImage> typeImages) {
        this.typeImages = typeImages;
    }
}
