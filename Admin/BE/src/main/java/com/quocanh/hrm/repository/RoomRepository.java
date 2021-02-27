package com.quocanh.hrm.repository;

import com.quocanh.hrm.domain.News;
import com.quocanh.hrm.domain.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RoomRepository extends JpaRepository<Room, Long> {
    @Query("select c FROM Room c where c.code = ?1 " )
    List<Room> findByCode(String code);

    @Query("select c FROM Room c where c.name = ?1 " )
    List<Room> findByName(String name);

    @Query("select count(c.id) FROM Room c where c.status = 0")
    Long checkRoom();
}
