package com.quocanh.hrm.repository;

import com.quocanh.hrm.domain.RoomPrice;
import com.quocanh.hrm.domain.RoomPromotion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RoomPromotionRepository extends JpaRepository<RoomPromotion, Long> {
    @Query("SELECT entity FROM RoomPromotion entity WHERE entity.promotion.id = ?1 AND entity.room.id = ?2")
    public RoomPromotion getRoomPromotionFromPromotionIdAndRoomId(Long promotionId, Long roomId);

    @Query("select entity.id From RoomPromotion entity WHERE room.id = ?1")
    public List<Long> getRoomPromotionFromRoomId(Long roomId);
}
