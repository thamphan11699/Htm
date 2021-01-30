package com.quocanh.hrm.dto;

import com.quocanh.hrm.domain.RoomType;
import com.quocanh.hrm.domain.Type;
import com.quocanh.hrm.domain.TypeAmeniti;

import javax.persistence.Column;
import java.util.HashSet;
import java.util.Set;

public class TypeDto extends BaseObjectDto{
    private String name;
    private String code;
    private int adults;
    private int children;
    private String description;
    private Set<AmenitiDto> amenities;


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

    public Set<AmenitiDto> getAmenities() {
        return amenities;
    }

    public void setAmenities(Set<AmenitiDto> amenities) {
        this.amenities = amenities;
    }

    public TypeDto() {}

    public TypeDto(Type entity) {
        this.id = entity.getId();
        this.createDate = entity.getCreateDate();
        this.modifyDate = entity.getModifyDate();
        this.name = entity.getName();
        this.code = entity.getCode();
        this.children = entity.getChildren();
        this.description = entity.getDescription();
        this.adults = entity.getAdults();
    }
    public TypeDto(Type entity, boolean sample) {
        this.id = entity.getId();
        this.createDate = entity.getCreateDate();
        this.modifyDate = entity.getModifyDate();
        this.name = entity.getName();
        this.code = entity.getCode();
        this.children = entity.getChildren();
        this.adults = entity.getAdults();
        this.description = entity.getDescription();
        if (entity.getTypeAmenitis() != null && entity.getTypeAmenitis().size() > 0) {
            this.amenities = new HashSet<AmenitiDto>();
            for (TypeAmeniti typeAmeniti: entity.getTypeAmenitis()) {
                AmenitiDto amenitiDto = new AmenitiDto(typeAmeniti.getAmeniti());
                this.amenities.add(amenitiDto);
            }
        }

    }
}
