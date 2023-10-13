package com.orderowl.api.tracking;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TrackingRepository extends JpaRepository<TrackingEntity, Long> {
    // Custom JPQL query that retrieves tracking records based on multiple criteria.


    @Query("SELECT t FROM TrackingEntity t WHERE t.trackingNumber LIKE %:searchText% OR t.retailer LIKE %:searchText% OR t.address LIKE %:searchText%")
    List<TrackingEntity> searchTracking(@Param("searchText") String searchText);



}
