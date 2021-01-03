package com.quocanh.hrm.repository;

import com.quocanh.hrm.domain.Price;
import com.quocanh.hrm.domain.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PriceRepository extends JpaRepository<Price, Long> {
    @Query("select c FROM Price c where c.code = ?1 " )
    List<Price> findByCode(String code);

    @Query("select c FROM Price c where c.name = ?1 " )
    List<Price> findByName(String name);
}
