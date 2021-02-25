package com.quocanh.hrm.Service.Iml;

import com.quocanh.hrm.Service.CustomerService;
import com.quocanh.hrm.domain.Customer;
import com.quocanh.hrm.domain.News;
import com.quocanh.hrm.domain.Room;
import com.quocanh.hrm.dto.CustomerDto;
import com.quocanh.hrm.dto.NewsDto;
import com.quocanh.hrm.dto.serachdto.CustomerSearchDto;
import com.quocanh.hrm.dto.serachdto.SearchDto;
import com.quocanh.hrm.repository.CustomerRepository;
import com.quocanh.hrm.repository.RoomRepository;
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
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class CustomerServiceIm implements CustomerService {

    @Autowired
    EntityManager manager;

    public SessionFactory getSessionFactory() {
        Session session = manager.unwrap(Session.class);
        return session.getSessionFactory();
    }

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    RoomRepository roomRepository;

    @Override
    public Page<CustomerDto> searchByPage(CustomerSearchDto dto) {
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

        String sqlCount = "select count(entity.id) from Customer as entity where (1=1)";
        String sql = "select new com.quocanh.hrm.dto.CustomerDto(entity) from Customer as entity where (1=1)";

        if (dto.getKeyword() != null && StringUtils.hasText(dto.getKeyword())) {
            whereClause += " AND ( UPPER(entity.name) LIKE UPPER(:text) OR UPPER(entity.code) LIKE UPPER(:text) ) ";
        }

        if (dto.getCustomerType() == 0) {
            //Customer_request
            whereClause += " AND entity.status LIKE 'CUSTOMER_REQUQEST' ";
        }
        if (dto.getCustomerType() == 1) {
            //Accept
            whereClause += " AND entity.status LIKE 'WAIT_CHECK_IN' ";
        }
        if (dto.getCustomerType() == 2) {
            //Reject
            whereClause += " AND entity.status LIKE 'REJECT' ";
        }
        if (dto.getCustomerType() == 3) {
            //Check in
            whereClause += " AND entity.status LIKE 'CHECK_IN' ";
        }
        if (dto.getCustomerType() == 4) {
            //Check out
            whereClause += " AND entity.status LIKE 'CHECK_OUT' ";
        }
        if (dto.getCustomerType() == 5) {
            //Check out
            whereClause += "  ";
        }



        sql += whereClause + orderBy;
        sqlCount += whereClause;

        Query q = manager.createQuery(sql, CustomerDto.class);
        Query qCount = manager.createQuery(sqlCount);

        if (dto.getKeyword() != null && StringUtils.hasText(dto.getKeyword())) {
            q.setParameter("text", '%' + dto.getKeyword() + '%');
            qCount.setParameter("text", '%' + dto.getKeyword() + '%');
        }

        int startPosition = pageIndex * pageSize;
        q.setFirstResult(startPosition);
        q.setMaxResults(pageSize);
        List<CustomerDto> entities = q.getResultList();
        long count = (long) qCount.getSingleResult();

        Pageable pageable = PageRequest.of(pageIndex, pageSize);
        Page<CustomerDto> result = new PageImpl<CustomerDto>(entities, pageable, count);
        return result;
    }

    @Override
    public List<CustomerDto> getAll() {
        List<Customer> entities = customerRepository.findAll();
        List<CustomerDto> dtos = new ArrayList<>();
        for (Customer customer : entities) {
            CustomerDto dto = new CustomerDto(customer);
            dtos.add(dto);
        }
        return dtos;
    }

    @Override
    public CustomerDto Booking(CustomerDto dto, Long id) {
        if (dto != null) {
            Customer entity = null;
            if (id != null) {
                if (dto.getId() != null && !dto.getId().equals(id)) {
                    return null;
                }
                entity = customerRepository.getOne(id);
                entity.setModifyDate(new Date());
            }
            if (entity == null) {
                entity = new Customer();
                entity.setCreateDate(new Date());
                entity.setModifyDate(new Date());
            }
            entity.setCode(dto.getCode());
            entity.setName(dto.getName());
            entity.setAdults(dto.getAdults());
            entity.setCheckInDate(dto.getCheckInDate());
            entity.setCheckOutDate(dto.getCheckOutDate());
            entity.setChildren(dto.getChildren());
            entity.setEmail(dto.getEmail());
            entity.setPhone(dto.getPhone());
            entity.setDescription(dto.getDescription());
            entity.setStatus("CUSTOMER_REQUQEST");
            entity.setPromotionCode(dto.getPromotionCode());
            entity.setIdentityCard(dto.getIdentityCard());
            entity.setRoom(null);
            entity = customerRepository.save(entity);
            if (entity != null) {
                return new CustomerDto(entity);
            }
        }
        return null;
    }

    @Override
    public CustomerDto checkIn(CustomerDto dto, Long id) {
        if (dto != null) {
            Customer entity = null;
            if (id != null) {
                if (dto.getId() != null && !dto.getId().equals(id)) {
                    return null;
                }
                entity = customerRepository.getOne(id);
                entity.setModifyDate(new Date());
            }
            if (entity == null) {
                entity = new Customer();
                entity.setCreateDate(new Date());
                entity.setModifyDate(new Date());
            }
            entity.setCode(dto.getCode());
            entity.setName(dto.getName());
            entity.setAdults(dto.getAdults());
            entity.setCheckInDate(dto.getCheckInDate());
            entity.setCheckOutDate(dto.getCheckOutDate());
            entity.setChildren(dto.getChildren());
            entity.setEmail(dto.getEmail());
            entity.setPhone(dto.getPhone());
            entity.setDescription(dto.getDescription());
            entity.setStatus("CHECK_IN");
            entity.setPromotionCode(dto.getPromotionCode());
            entity.setIdentityCard(dto.getIdentityCard());
            entity.setTotalMoney(dto.getTotalMoney());
            Room room = null;
            if (dto.getRoom() != null && dto.getRoom().getId() != null) {
                room = roomRepository.getOne(dto.getRoom().getId());
                room.setStatus(true);
                room = roomRepository.save(room);
                entity.setRoomWasIn(dto.getRoom().getName());
            }
            entity.setRoom(room);
            entity = customerRepository.save(entity);
            if (entity != null) {
                return new CustomerDto(entity);
            }
        }
        return null;
    }

    @Override
    public CustomerDto checkOut(CustomerDto dto, Long id) {
        if (dto != null) {
            Customer entity = null;
            if (id != null) {
                if (dto.getId() != null && !dto.getId().equals(id)) {
                    return null;
                }
                entity = customerRepository.getOne(id);
                entity.setModifyDate(new Date());
            }
            if (entity == null) {
                entity = new Customer();
                entity.setCreateDate(new Date());
                entity.setModifyDate(new Date());
            }
            entity.setCode(dto.getCode());
            entity.setName(dto.getName());
            entity.setAdults(dto.getAdults());
            entity.setCheckInDate(dto.getCheckInDate());
            entity.setCheckOutDate(dto.getCheckOutDate());
            entity.setChildren(dto.getChildren());
            entity.setEmail(dto.getEmail());
            entity.setPhone(dto.getPhone());
            entity.setDescription(dto.getDescription());
            entity.setStatus("CHECK_OUT");
            entity.setPromotionCode(dto.getPromotionCode());
            entity.setIdentityCard(dto.getIdentityCard());
            entity.setTotalMoney(dto.getTotalMoney());
            Room room = null;
            if (dto.getRoom() != null && dto.getRoom().getId() != null) {
                room = roomRepository.getOne(dto.getRoom().getId());
                room.setStatus(false);
                room = roomRepository.save(room);
                entity.setRoomWasIn(dto.getRoom().getName());
            }
            entity.setRoom(room);
            entity = customerRepository.save(entity);
            if (entity != null) {
                return new CustomerDto(entity);
            }
        }
        return null;
    }

    @Override
    public CustomerDto acceptance(CustomerDto dto, Long id) {
        if (dto != null) {
            Customer entity = null;
            if (id != null) {
                if (dto.getId() != null && !dto.getId().equals(id)) {
                    return null;
                }
                entity = customerRepository.getOne(id);
                entity.setModifyDate(new Date());
            }
            if (entity == null) {
                entity = new Customer();
                entity.setCreateDate(new Date());
                entity.setModifyDate(new Date());
            }
            entity.setCode(dto.getCode());
            entity.setName(dto.getName());
            entity.setAdults(dto.getAdults());
            entity.setCheckInDate(dto.getCheckInDate());
            entity.setCheckOutDate(dto.getCheckOutDate());
            entity.setChildren(dto.getChildren());
            entity.setEmail(dto.getEmail());
            entity.setPhone(dto.getPhone());
            entity.setDescription(dto.getDescription());
            entity.setStatus("WAIT_CHECK_IN");
            entity.setRoom(null);
            entity.setPromotionCode(dto.getPromotionCode());
            entity.setIdentityCard(dto.getIdentityCard());
            entity = customerRepository.save(entity);
            if (entity != null) {
                return new CustomerDto(entity);
            }
        }
        return null;
    }

    @Override
    public CustomerDto reject(CustomerDto dto, Long id) {
        if (dto != null) {
            Customer entity = null;
            if (id != null) {
                if (dto.getId() != null && !dto.getId().equals(id)) {
                    return null;
                }
                entity = customerRepository.getOne(id);
                entity.setModifyDate(new Date());
            }
            if (entity == null) {
                entity = new Customer();
                entity.setCreateDate(new Date());
                entity.setModifyDate(new Date());
            }
            entity.setCode(dto.getCode());
            entity.setName(dto.getName());
            entity.setAdults(dto.getAdults());
            entity.setCheckInDate(dto.getCheckInDate());
            entity.setCheckOutDate(dto.getCheckOutDate());
            entity.setChildren(dto.getChildren());
            entity.setEmail(dto.getEmail());
            entity.setPhone(dto.getPhone());
            entity.setDescription(dto.getDescription());
            entity.setStatus("REJECT");
            entity.setPromotionCode(dto.getPromotionCode());
            entity.setIdentityCard(dto.getIdentityCard());
            entity.setRoom(null);
            entity = customerRepository.save(entity);
            if (entity != null) {
                return new CustomerDto(entity);
            }
        }
        return null;
    }

    @Override
    public CustomerDto getOne(Long id) {
        Customer entity = customerRepository.getOne(id);
        if (entity != null) {
            return new CustomerDto(entity);
        }
        return null;
    }

    @Override
    public void delete(Long id) {
        Customer entity = customerRepository.getOne(id);
        if (entity != null) {
            customerRepository.delete(entity);
        }
    }

    @Override
    public boolean checkCodeWasUsed(String code, Long id) {
        return false;
    }

    @Override
    public boolean checkNameWasUsed(String name, Long id) {
        return false;
    }
}
