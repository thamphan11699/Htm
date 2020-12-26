package com.quocanh.hrm.repository;

import com.quocanh.hrm.domain.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RoleRepository extends JpaRepository<Role, Long> {
    @Query("select c FROM Role c where c.code = ?1 " )
    List<Role> findByCode(String code);

    @Query("select c FROM Role c where c.name = ?1 " )
    List<Role> findByName(String name);

}
