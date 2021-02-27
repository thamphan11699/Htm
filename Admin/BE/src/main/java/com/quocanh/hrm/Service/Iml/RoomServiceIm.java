package com.quocanh.hrm.Service.Iml;

import com.quocanh.hrm.Service.RoomService;
import com.quocanh.hrm.domain.*;
import com.quocanh.hrm.dto.NewsDto;
import com.quocanh.hrm.dto.RoomDto;
import com.quocanh.hrm.dto.RoomTypeDto;
import com.quocanh.hrm.dto.TypeDto;
import com.quocanh.hrm.dto.serachdto.RoomSearchDto;
import com.quocanh.hrm.dto.serachdto.SearchDto;
import com.quocanh.hrm.repository.*;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class RoomServiceIm implements RoomService {
    @Autowired
    EntityManager manager;

    public SessionFactory getSessionFactory() {
        Session session = manager.unwrap(Session.class);
        return session.getSessionFactory();
    }

    @Autowired
    RoomRepository roomRepository;

    @Autowired
    RoomTypeRepository roomTypeRepository;

    @Autowired
    TypeRepository typeRepository;

    @Autowired
    RoomPriceRepository roomPriceRepository;

    @Autowired
    PriceRepository priceRepository;

    @Autowired
    PromotionRepository promotionRepository;

    @Autowired
    RoomPromotionRepository roomPromotionRepository;

    @Override
    public Page<RoomDto> searchByPage(RoomSearchDto dto) {
        if (dto == null) {
            return null;
        }

        int pageIndex = dto.getPageIndex();
        int pageSize = dto.getPageSize();

        if (pageIndex > 0) {
            pageIndex--;
        } else {
            pageIndex = 0;
        }

        String whereClause = "";

        String orderBy = " ORDER BY entity.id DESC";
        if (dto.getOrderBy() != null && StringUtils.hasLength(dto.getOrderBy().toString())) {
            orderBy = " ORDER BY entity."+dto.getOrderBy()+" ASC";
        }

        String sqlOrder = "SELECT new com.quocanh.hrm.dto.RoomDto(entity) FROM Room entity WHERE entity.id in ( ";
        String sqlCount = "select count(DISTINCT entity.id) from Room as entity" +
                " JOIN RoomType as RT ON entity.id = RT.room.id JOIN Type as T ON RT.type.id = T.id  where (1=1)";
        String sql = "select DISTINCT entity.id  from Room as entity" +
                " JOIN RoomType as RT ON entity.id = RT.room.id JOIN Type as T ON RT.type.id = T.id  where (1=1)";

        if (dto.getKeyword() != null && StringUtils.hasText(dto.getKeyword())) {
            whereClause += " AND ( UPPER(entity.name) LIKE UPPER(:text) OR UPPER(entity.code) LIKE UPPER(:text) )";
        }
        if (dto.getType() != null && StringUtils.hasText(dto.getType())) {
            whereClause += " AND ( UPPER(T.name) LIKE UPPER(:type) ) AND entity.status is false ";
        }
        if (dto.getTypeStatus() == 0) {
            whereClause += " ";
        }
        if (dto.getTypeStatus() == 1) {
            whereClause += " AND entity.status is true ";
        }
        if (dto.getTypeStatus() == 2) {
            whereClause += " AND entity.status is false ";
        }

        sql +=  whereClause + orderBy;
        sqlCount += whereClause;
        sql = sqlOrder + sql + " ) " + orderBy;
        Query q = manager.createQuery(sql, RoomDto.class);
        Query qCount = manager.createQuery(sqlCount);

        if (dto.getKeyword() != null && StringUtils.hasText(dto.getKeyword())) {
            q.setParameter("text", '%' + dto.getKeyword() + '%');
            qCount.setParameter("text", '%' + dto.getKeyword() + '%');
        }
        if (dto.getType() != null && StringUtils.hasText(dto.getType())) {
            q.setParameter("type", '%' + dto.getType() + '%');
            qCount.setParameter("type", '%' + dto.getType() + '%');
        }

        int startPosition = pageIndex * pageSize;
        q.setFirstResult(startPosition);
        q.setMaxResults(pageSize);
        List<RoomDto> entities = q.getResultList();
        long count = (long) qCount.getSingleResult();

        Pageable pageable = PageRequest.of(pageIndex, pageSize);
        Page<RoomDto> result = new PageImpl<RoomDto>(entities, pageable, count);
        return result;
    }

    @Override
    public RoomDto saveOrUpdate(RoomDto dto, Long id) {
        if (dto != null) {
            Room entity = null;
            if (id != null) {
                if (dto.getId() != null && !dto.getId().equals(id)) {
                    return null;
                }
                entity = roomRepository.getOne(id);
                entity.setModifyDate(new Date());
            }
            if (entity == null) {
                entity = new Room();
                entity.setCreateDate(new Date());
                entity.setModifyDate(new Date());
            }
            entity.setCode(dto.getCode());
            entity.setName(dto.getName());
            entity.setStatus(false);
            Set<RoomType> roomTypes = new HashSet<>();
            Set<Long> newTypeIds = new HashSet<>();
            if (dto.getTypes() != null && dto.getId() != null && !dto.getTypes().isEmpty()) {
                List<Long> typeIds = dto.getTypes().stream().map(typeDto -> typeDto.getId()).collect(Collectors.toList());
                List<Long> currentRoomTypeIds = new ArrayList<>();
                for (Long typeId : typeIds) {
                    RoomType roomType = roomTypeRepository.getRoomTypeFromTypeIdAndRoomId(typeId, dto.getId());
                    if (roomType != null) {
                        currentRoomTypeIds.add(roomType.getId());
                        roomTypes.add(roomType);
                    } else {
                        newTypeIds.add(typeId);
                    }
                }
                List<Long> oldRoomTypeIds = roomTypeRepository.getRoomTypeFromRoomId(dto.getId());
                List<Long> deletedIds = oldRoomTypeIds.stream().filter(oldId -> !oldRoomTypeIds.contains(oldId)).collect(Collectors.toList());
                for (Long deletedId : deletedIds) {
                        roomTypeRepository.deleteById(deletedId);
                }
            } else if (dto.getTypes() != null && !dto.getTypes().isEmpty()) {
                newTypeIds = dto.getTypes().stream().map(typeDto -> typeDto.getId()).collect(Collectors.toSet());
            }
            entity.setRoomTypes(roomTypes);
            Set<RoomPrice> roomPrices = new HashSet<>();
            Set<Long> newPriceIds = new HashSet<>();
            if (dto.getPrices() != null && dto.getId() != null && !dto.getPrices().isEmpty()) {
                List<Long> priceIds = dto.getPrices().stream().map(priceDto -> priceDto.getId()).collect(Collectors.toList());
                List<Long> currentRoomPrices = new ArrayList<>();
                for (Long priceId : priceIds) {
                    RoomPrice roomPrice = roomPriceRepository.getRoomPriceFromPriceIdAndRoomId(priceId, dto.getId());
                    if (roomPrice != null) {
                        currentRoomPrices.add(roomPrice.getId());
                        roomPrices.add(roomPrice);
                    } else {
                        newPriceIds.add(priceId);
                    }
                }
                List<Long> oldRoomPriceIds = roomPriceRepository.getRoomPriceFromRoomId(dto.getId());
                List<Long> deletedIds = oldRoomPriceIds.stream().filter(oldId -> !oldRoomPriceIds.contains(oldId)).collect(Collectors.toList());
                for (Long deletedId : deletedIds) {
                    roomPriceRepository.deleteById(deletedId);
                }
            } else if (dto.getPrices() != null && !dto.getPrices().isEmpty()) {
                newPriceIds = dto.getPrices().stream().map((priceDto -> priceDto.getId())).collect(Collectors.toSet());;
            }
            entity.setRoomPrices(roomPrices);
            Set<RoomPromotion> roomPromotions = new HashSet<>();
            Set<Long> newPromotionIds = new HashSet<>();
            if (dto.getPromotions() != null && dto.getId() != null && !dto.getPromotions().isEmpty()) {
                List<Long> promotionIds = dto.getPromotions().stream().map(promotionDto -> promotionDto.getId()).collect(Collectors.toList());
                List<Long> currentRoomPromotionIds = new ArrayList<>();
                for (Long promotionId : promotionIds) {
                    RoomPromotion roomPromotion = roomPromotionRepository.getRoomPromotionFromPromotionIdAndRoomId(promotionId, dto.getId());
                    if (roomPromotion != null) {
                        currentRoomPromotionIds.add(roomPromotion.getId());
                        roomPromotions.add(roomPromotion);
                    } else {
                        newPromotionIds.add(promotionId);
                    }
                }
                List<Long> oldRoomPromotionIds = roomPromotionRepository.getRoomPromotionFromRoomId(dto.getId());
                List<Long> deletedIds = oldRoomPromotionIds.stream().filter(oldId -> !oldRoomPromotionIds.contains(oldId)).collect(Collectors.toList());
                for (Long deletedId : deletedIds) {
                    roomPromotionRepository.deleteById(deletedId);
                }
            } else  if (dto.getPromotions() != null && !dto.getPromotions().isEmpty()) {
                newPromotionIds = dto.getPromotions().stream().map(promotionDto -> promotionDto.getId()).collect(Collectors.toSet());
            }
            entity.setRoomPromotions(roomPromotions);
            entity = roomRepository.save(entity);
            if (entity != null) {
                if (!newTypeIds.isEmpty()) {
                    for (Long typeId : newTypeIds) {
                        RoomType roomType = new RoomType();
                        Type type = typeRepository.getOne(typeId);
                        roomType.setType(type);
                        roomType.setRoom(entity);
                        roomType.setCreateDate(new Date());
                        roomType.setModifyDate(new Date());
                        roomTypeRepository.save(roomType);
                    }
                }
                if (!newPriceIds.isEmpty()) {
                    for (Long priceId : newPriceIds) {
                        RoomPrice roomPrice = new RoomPrice();
                        Price price = priceRepository.getOne(priceId);
                        roomPrice.setPrice(price);
                        roomPrice.setRoom(entity);
                        roomPrice.setCreateDate(new Date());
                        roomPrice.setModifyDate(new Date());
                        roomPriceRepository.save(roomPrice);
                    }
                }
                if (!newPromotionIds.isEmpty()) {
                    for (Long promotionId : newPromotionIds) {
                        RoomPromotion roomPromotion = new RoomPromotion();
                        Promotion promotion = promotionRepository.getOne(promotionId);
                        roomPromotion.setPromotion(promotion);
                        roomPromotion.setRoom(entity);
                        roomPromotion.setCreateDate(new Date());
                        roomPromotion.setModifyDate(new Date());
                        roomPromotionRepository.save(roomPromotion);
                    }
                }
                return new RoomDto(entity);
            }
        }
        return null;
    }

    @Override
    public RoomDto getOne(Long id) {
        if (id != null) {
            Room entity = roomRepository.getOne(id);
            if (entity != null) {
                return new RoomDto(entity);
            }
        }
        return null;
    }

    @Override
    public void delete(Long id) {
        if (id != null) {
            Room entity = roomRepository.getOne(id);
            if (entity != null) {
                roomRepository.delete(entity);
            }
        }
    }

    @Override
    public boolean checkCodeWasUsed(String code, Long id) {
        List<Room> entities = roomRepository.findByCode(code);
        if (entities != null && entities.size() > 0 && entities.get(0) != null && entities.get(0).getId() != null) {
            if (id != null && StringUtils.hasText(id.toString())) {
                if (entities.get(0).getId().equals(id)) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }

    @Override
    public boolean checkNameWasUsed(String name, Long id) {
        List<Room> entities = roomRepository.findByName(name);
        if (entities != null && entities.size() > 0 && entities.get(0) != null && entities.get(0).getId() != null) {
            if (id != null && StringUtils.hasText(id.toString())) {
                if (entities.get(0).getId().equals(id)) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }

    @Override
    public boolean checkRomm() {
        Long count = roomRepository.checkRoom();
        if (count > 0) {
            return true;
        }
        return false;
    }
}
