package com.quocanh.hrm.repository;

import com.quocanh.hrm.domain.EmployeeShift;
import com.quocanh.hrm.domain.RoomType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RoomTypeRepository extends JpaRepository<RoomType, Long> {
    @Query("SELECT entity FROM RoomType entity WHERE entity.type.id = ?1 AND entity.room.id = ?2")
    public RoomType getRoomTypeFromTypeIdAndRoomId(Long typeId, Long roomId);

    @Query("select entity.id From RoomType entity WHERE room.id = ?1")
    public List<Long> getRoomTypeFromRoomId(Long roomId);
}
