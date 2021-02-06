package com.quocanh.hrm.Service;

import com.quocanh.hrm.dto.EmployeeDto;
import com.quocanh.hrm.dto.TypeDto;
import org.springframework.web.multipart.MultipartFile;

public interface FileUploadService {
    EmployeeDto avatarUpdate(MultipartFile avatar, Long employeeId);
    TypeDto uploadImage(MultipartFile multipartFile, Long typeId);
}
