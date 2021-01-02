package com.quocanh.hrm.repository;

import com.quocanh.hrm.domain.Advertisement;
import com.quocanh.hrm.domain.News;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AdvertisementRepository extends JpaRepository<Advertisement, Long> {
    @Query("select c FROM Advertisement c where c.code = ?1 " )
    List<Advertisement> findByCode(String code);

    @Query("select c FROM Advertisement c where c.name = ?1 " )
    List<Advertisement> findByName(String name);
}
