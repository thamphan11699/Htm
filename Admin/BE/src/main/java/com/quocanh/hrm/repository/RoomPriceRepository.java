package com.quocanh.hrm.repository;

import com.quocanh.hrm.domain.RoomPrice;
import com.quocanh.hrm.domain.RoomType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RoomPriceRepository extends JpaRepository<RoomPrice, Long> {
    @Query("SELECT entity FROM RoomPrice entity WHERE entity.price.id = ?1 AND entity.room.id = ?2")
    public RoomPrice getRoomPriceFromPriceIdAndRoomId(Long priceId, Long roomId);

    @Query("select entity.id From RoomPrice entity WHERE room.id = ?1")
    public List<Long> getRoomPriceFromRoomId(Long roomId);
}
