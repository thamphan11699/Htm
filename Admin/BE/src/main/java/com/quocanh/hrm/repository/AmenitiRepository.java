package com.quocanh.hrm.repository;

import com.quocanh.hrm.domain.Ameniti;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AmenitiRepository extends JpaRepository<Ameniti, Long> {
    @Query("select c FROM Ameniti c where c.code = ?1 " )
    List<Ameniti> findByCode(String code);

    @Query("select c FROM Ameniti c where c.name = ?1 " )
    List<Ameniti> findByName(String name);
}
