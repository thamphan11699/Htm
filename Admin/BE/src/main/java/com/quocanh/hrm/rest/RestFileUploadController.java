package com.quocanh.hrm.rest;

import com.quocanh.hrm.Service.FileUploadService;
import com.quocanh.hrm.dto.EmployeeDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@CrossOrigin(value = "*")
@RequestMapping(path = "/api/upload")
public class RestFileUploadController {
    @Autowired
    private FileUploadService fileUploadService;


    @Value("${attachment.path}")
    private String attachmentPath;

    @Value("${localhost.path}")
    private String hostPath;

    @Value("${server.servlet.context-path}")
    private String contextPath;

    @Value("${attachment.context.path}")
    private String attachmentContextPath;

    @PostMapping(value = "/avatar")
    public ResponseEntity<EmployeeDto> uploadImage(@RequestParam("file") MultipartFile uploadFile,
                                                   @RequestParam("employeeId") Long employeeId) {
        EmployeeDto dto = fileUploadService.avatarUpdate(uploadFile, employeeId);
        return new ResponseEntity<EmployeeDto>(dto, (dto != null) ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }
}
