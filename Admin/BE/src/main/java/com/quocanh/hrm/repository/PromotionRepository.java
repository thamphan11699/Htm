package com.quocanh.hrm.repository;

import com.quocanh.hrm.domain.Promotion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PromotionRepository extends JpaRepository<Promotion, Long> {
    @Query("select c FROM Promotion c where c.code = ?1 " )
    List<Promotion> findByCode(String code);

    @Query("select c FROM Promotion c where c.name = ?1 " )
    List<Promotion> findByName(String name);
}
