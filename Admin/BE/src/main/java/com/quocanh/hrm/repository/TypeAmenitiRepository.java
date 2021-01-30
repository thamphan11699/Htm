package com.quocanh.hrm.repository;

import com.quocanh.hrm.domain.TypeAmeniti;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TypeAmenitiRepository extends JpaRepository<TypeAmeniti,Long> {
    @Query("select entity.id From TypeAmeniti entity WHERE type.id = ?1")
    public List<Long> getAmenitiFromTypeId(Long typeId);
}
