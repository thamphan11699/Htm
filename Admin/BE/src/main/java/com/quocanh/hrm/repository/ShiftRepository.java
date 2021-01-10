package com.quocanh.hrm.repository;

import com.quocanh.hrm.domain.Advertisement;
import com.quocanh.hrm.domain.Shift;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ShiftRepository extends JpaRepository<Shift, Long> {
    @Query("select c FROM Shift c where c.code = ?1 " )
    List<Shift> findByCode(String code);

    @Query("select c FROM Shift c where c.name = ?1 " )
    List<Shift> findByName(String name);
}
