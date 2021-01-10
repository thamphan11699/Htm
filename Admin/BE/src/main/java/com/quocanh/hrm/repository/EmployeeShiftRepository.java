package com.quocanh.hrm.repository;

import com.quocanh.hrm.domain.EmployeeShift;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface EmployeeShiftRepository extends JpaRepository<EmployeeShift, Long> {
    @Query("SELECT entity FROM EmployeeShift entity WHERE entity.shift.id = ?1 AND entity.employee.id = ?2")
    public EmployeeShift getEmployeeShiftFromShiftIdAndEmployeeId(Long shiftId, Long employeeId);

    @Query("select entity.id From EmployeeShift entity WHERE employee.id = ?1")
    public List<Long> getEmployeeShiftFromEmployeeId(Long employeeId);
}
