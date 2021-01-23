package com.quocanh.hrm.repository;

import com.quocanh.hrm.domain.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long> {

}
