package com.quocanh.hrm.Service;

import com.quocanh.hrm.dto.AdvertisementDto;
import com.quocanh.hrm.dto.serachdto.SearchDto;
import org.springframework.data.domain.Page;

public interface AdvertisementService {
    Page<AdvertisementDto> searchByPage(SearchDto dto);
    AdvertisementDto saveOrUpdate(AdvertisementDto dto, Long id);
    AdvertisementDto getOne(Long id);
    void delete(Long id);
    boolean checkCodeWasUsed(String code, Long id);
    boolean checkNameWasUsed(String name, Long id);
}
