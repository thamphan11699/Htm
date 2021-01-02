package com.quocanh.hrm.repository;

import com.quocanh.hrm.domain.News;
import com.quocanh.hrm.domain.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface NewsRepository extends JpaRepository<News, Long> {
    @Query("select c FROM News c where c.code = ?1 " )
    List<News> findByCode(String code);

    @Query("select c FROM News c where c.name = ?1 " )
    List<News> findByName(String name);
}
