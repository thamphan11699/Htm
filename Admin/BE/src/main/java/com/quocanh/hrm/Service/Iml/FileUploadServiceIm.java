package com.quocanh.hrm.Service.Iml;

import com.quocanh.hrm.Service.EmployeeService;
import com.quocanh.hrm.Service.FileUploadService;
import com.quocanh.hrm.dto.EmployeeDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.UUID;

@Service
public class FileUploadServiceIm implements FileUploadService {
    @Value("${attachment.path}")
    private String attachmentPath;

    @Value("${localhost.path}")
    private String hostPath;

    @Value("${server.servlet.context-path}")
    private String contextPath;

    @Value("${attachment.context.path}")
    private String attachmentContextPath;

    @Autowired
    EmployeeService employeeService;

    @Override
    public EmployeeDto avatarUpdate(MultipartFile avatar, Long employeeId) {
        String absolutePath = this.attachmentPath + "/";
        String fileName = avatar.getOriginalFilename().split("\\.(?=[^\\.]+$)")[0];
        String extension = avatar.getOriginalFilename().split("\\.(?=[^\\.]+$)")[1];
        UUID fileNameImage = UUID.randomUUID();
        try {
            File fileToBeSaved = new File(absolutePath, fileNameImage + "." + extension);
            avatar.transferTo(fileToBeSaved);
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }

        String mainImageUrl = this.hostPath + "/api/upload/getImage/"+fileNameImage+"."+extension;
        EmployeeDto dto = employeeService.updateImgae(mainImageUrl, employeeId);
        return dto;
    }
}
