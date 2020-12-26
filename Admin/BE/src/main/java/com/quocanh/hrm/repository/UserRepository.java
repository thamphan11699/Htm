package com.quocanh.hrm.repository;

import com.quocanh.hrm.domain.Role;
import com.quocanh.hrm.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {
    @Query("select c FROM User c where c.username = ?1 " )
    List<User> checkUsername(String username);

    @Query("select c FROM User c where c.username = ?1 ")
    User findByUsername(String username);

    @Query("select c FROM User c where c.password = ?1 ")
    User findByPassword(String password);
}
