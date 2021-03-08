package com.quocanh.hrm.Service;

import com.quocanh.hrm.dto.Analytics;
import com.quocanh.hrm.dto.serachdto.AnalyticsSearch;

import java.util.Date;

public interface AnalyticsService {

    Analytics getAnalytics(AnalyticsSearch dto);
}
