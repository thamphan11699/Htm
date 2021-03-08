package com.quocanh.hrm.Service.Iml;

import com.quocanh.hrm.Service.AnalyticsService;
import com.quocanh.hrm.dto.Analytics;
import com.quocanh.hrm.dto.serachdto.AnalyticsSearch;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.transaction.Transactional;
import java.util.Date;

@Service
@Transactional
public class AnalyticsServiceIm implements AnalyticsService {
    @Autowired
    EntityManager manager;

    public SessionFactory getSessionFactory() {
        Session session = manager.unwrap(Session.class);
        return session.getSessionFactory();
    }

    @Override
    public Analytics getAnalytics(AnalyticsSearch dto) {
        String whereClause = "";
        String sql = "SELECT COUNT(DISTINCT C.id) AS totalCustomer, SUM(DISTINCT C.total_money) AS revenue, COUNT(DISTINCT C.id) AS momentCustomer,  COUNT(DISTINCT R.id) AS roomNotUsed \n" +
                "FROM  tbl_customer AS C, tbl_room AS R WHERE R.`status` = 0 ";
        if (dto != null && dto.getEndDate() != null && dto.getStartDate() != null) {
            Date startDate = dto.getStartDate();
            Date enddate = dto.getEndDate();
            whereClause += " AND C.create_date BETWEEN :startDate AND :endDate ";
        }
        sql += whereClause;
        Query q = manager.createNativeQuery(sql);
        if (dto != null && dto.getEndDate() != null && dto.getStartDate() != null) {
            q.setParameter("startDate", dto.getStartDate());
            q.setParameter("endDate", dto.getEndDate());
        }
        Object[] analytics = (Object[]) q.getSingleResult();
        Analytics analyticsDto = new Analytics();
        analyticsDto.setRevenue(String.valueOf(analytics[1]));
        analyticsDto.setTotalCustomer(String.valueOf(analytics[0]));
        analyticsDto.setRoomNotUsed(String.valueOf(analytics[3]));
        analyticsDto.setMomentCustomer(String.valueOf(analytics[2]));
        return analyticsDto;
    }
}
