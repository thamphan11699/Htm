package com.quocanh.hrm.domain;

import org.hibernate.annotations.NotFound;

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

    @Column(name = "children")
    private Boolean children;

    @Column(name = "description")
    private String description;

    @OneToMany(mappedBy = "type", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<RoomType> roomTypes;

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

    public Boolean getChildren() {
        return children;
    }

    public void setChildren(Boolean children) {
        this.children = children;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
