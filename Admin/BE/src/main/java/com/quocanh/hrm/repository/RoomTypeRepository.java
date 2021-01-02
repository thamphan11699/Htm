package com.quocanh.hrm.repository;

import com.quocanh.hrm.domain.News;
import com.quocanh.hrm.domain.RoomType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RoomTypeRepository extends JpaRepository<RoomType, Long> {
    @Query("select c FROM RoomType c where c.code = ?1 " )
    List<RoomType> findByCode(String code);

    @Query("select c FROM RoomType c where c.name = ?1 " )
    List<RoomType> findByName(String name);
}
