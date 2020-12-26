package com.quocanh.hrm.Service;

import com.quocanh.hrm.dto.EmployeeDto;
import org.springframework.web.multipart.MultipartFile;

public interface FileUploadService {
    public EmployeeDto avatarUpdate(MultipartFile avatar, Long employeeId);
}
