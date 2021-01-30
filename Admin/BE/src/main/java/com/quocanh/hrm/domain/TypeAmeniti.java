package com.quocanh.hrm.domain;

import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
@Table(name = "tbl_type_ameniti")
@Entity
public class TypeAmeniti extends BaseObject{

    @ManyToOne
    @JoinColumn(name = "type_id")
    @NotFound(action = NotFoundAction.IGNORE)
    private Type type;

    @ManyToOne
    @JoinColumn(name = "ameniti_id")
    @NotFound(action = NotFoundAction.IGNORE)
    private Ameniti ameniti;

    public Type getType() {
        return type;
    }

    public void setType(Type type) {
        this.type = type;
    }

    public Ameniti getAmeniti() {
        return ameniti;
    }

    public void setAmeniti(Ameniti ameniti) {
        this.ameniti = ameniti;
    }
}
