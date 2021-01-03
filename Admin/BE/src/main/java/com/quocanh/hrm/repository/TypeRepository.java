package com.quocanh.hrm.repository;

import com.quocanh.hrm.domain.RoomType;
import com.quocanh.hrm.domain.Type;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TypeRepository extends JpaRepository<Type, Long> {
    @Query("select c FROM Type c where c.code = ?1 " )
    List<Type> findByCode(String code);

    @Query("select c FROM Type c where c.name = ?1 " )
    List<Type> findByName(String name);
}
