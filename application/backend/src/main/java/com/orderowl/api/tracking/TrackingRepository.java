/**
 * Allows us to directly interact with the database
 */

package com.orderowl.api.tracking;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TrackingRepository extends JpaRepository<Tracking, Long> {

    // Allows us to search the database regarding tracking information.
    @Query("SELECT t FROM Tracking t WHERE t.trackingNumber LIKE %:searchText% OR t.retailer LIKE %:searchText% " +
            "OR t.address LIKE %:searchText% OR t.status LIKE %:searchText% OR t.carrier LIKE %:searchText%")
    List<Tracking> searchTracking(String searchText);

    // Allows us to get the tracking count of pending orders
    @Query("SELECT COUNT(t) FROM Tracking t WHERE t.status <> 'Delivered'")
    Integer getTrackingCount();

//    @Query("delete from Tracking t where t.trackingNumber=:trackingNumber")
//    void deleteByTrackingNumber(String trackingNumber);

    // allows us to delete tracking by ID
    void deleteById(Long id);

}
