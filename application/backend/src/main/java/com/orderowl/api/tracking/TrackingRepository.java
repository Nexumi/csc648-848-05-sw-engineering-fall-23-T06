package com.orderowl.api.tracking;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TrackingRepository extends JpaRepository<Tracking, Long> {

    Long deleteByTrackingNumber(String trackingNumber);
}
