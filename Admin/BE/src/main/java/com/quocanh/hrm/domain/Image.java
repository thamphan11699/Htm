package com.quocanh.hrm.domain;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.Set;

@XmlRootElement
@Table(name = "tbl_image")
@Entity
public class Image extends BaseObject{

    @Column(name = "url")
    private String url;

    @OneToMany(mappedBy = "image", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private Set<TypeImage> typeImages;

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public Set<TypeImage> getTypeImages() {
        return typeImages;
    }

    public void setTypeImages(Set<TypeImage> typeImages) {
        this.typeImages = typeImages;
    }
}
