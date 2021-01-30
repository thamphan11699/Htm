package com.quocanh.hrm.domain;

import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.Set;

@XmlRootElement
@Table(name = "tbl_ameniti")
@Entity
public class Ameniti extends BaseObject{

    @Column(name = "name")
    private String name;

    @Column(name = "code")
    private String code;

    @Column(name = "description")
    private String description;

    @OneToMany(mappedBy = "ameniti", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @NotFound(action = NotFoundAction.IGNORE)
    private Set<TypeAmeniti> typeAmenitis;

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
}
