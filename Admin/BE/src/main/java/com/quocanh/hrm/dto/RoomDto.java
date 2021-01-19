package com.quocanh.hrm.dto;

import com.quocanh.hrm.domain.Room;
import com.quocanh.hrm.domain.RoomPrice;
import com.quocanh.hrm.domain.RoomPromotion;
import com.quocanh.hrm.domain.RoomType;

import java.util.HashSet;
import java.util.Set;

public class RoomDto extends BaseObjectDto{

    private String name;
    private String code;
    private boolean status;
    private Set<TypeDto> types;
    private Set<PriceDto> prices;
    private Set<PromotionDto> promotions;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public Set<TypeDto> getTypes() {
        return types;
    }

    public void setTypes(Set<TypeDto> types) {
        this.types = types;
    }

    public Set<PriceDto> getPrices() {
        return prices;
    }

    public void setPrices(Set<PriceDto> prices) {
        this.prices = prices;
    }

    public Set<PromotionDto> getPromotions() {
        return promotions;
    }

    public void setPromotions(Set<PromotionDto> promotions) {
        this.promotions = promotions;
    }

    public RoomDto() {}

    public RoomDto(Room entity) {
        this.id = entity.getId();
        this.createDate = entity.getCreateDate();
        this.modifyDate = entity.getModifyDate();
        this.name = entity.getName();
        this.code = entity.getCode();
        this.status = entity.isStatus();
        if (entity.getRoomTypes() != null && entity.getRoomTypes().size() > 0) {
            this.types = new HashSet<TypeDto>();
            for (RoomType roomType : entity.getRoomTypes()) {
                TypeDto typeDto = new TypeDto(roomType.getType());
                this.types.add(typeDto);
            }
        }
        if (entity.getRoomPrices() != null && entity.getRoomPrices().size() > 0) {
            this.prices = new HashSet<PriceDto>();
            for (RoomPrice roomPrice : entity.getRoomPrices()) {
                PriceDto priceDto = new PriceDto(roomPrice.getPrice());
                this.prices.add(priceDto);
            }
        }
        if (entity.getRoomPromotions() != null && entity.getRoomPromotions().size() > 0) {
            this.promotions = new HashSet<PromotionDto>();
            for (RoomPromotion roomPromotion : entity.getRoomPromotions()) {
                PromotionDto promotionDto = new PromotionDto(roomPromotion.getPromotion());
                this.promotions.add(promotionDto);
            }
        }
    }
    public RoomDto(Room entity, boolean sample) {
        this.id = entity.getId();
        this.createDate = entity.getCreateDate();
        this.modifyDate = entity.getModifyDate();
        this.name = entity.getName();
        this.code = entity.getCode();
        this.status = entity.isStatus();
    }
}
