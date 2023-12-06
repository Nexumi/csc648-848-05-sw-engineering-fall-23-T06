/**
 * Allows us to directly interact with the database
 */

package com.orderowl.api.tracking;


import com.orderowl.api.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TrackingRepository extends JpaRepository<Tracking, Long> {

//    // Allows us to search the database regarding tracking information.
//    @Query("SELECT t FROM Tracking t WHERE t.trackingNumber LIKE %:searchText% OR t.retailer LIKE %:searchText% " +
//            "OR t.address LIKE %:searchText% OR t.status LIKE %:searchText% OR t.carrier LIKE %:searchText%")
//    List<Tracking> searchTracking(String searchText);

    // This Query searches by relevance and sorts the results by relevance as well. Using
    // order by case we can sort based by relevance from tracking number/retailer/address/status/carrier
    @Query("SELECT t FROM Tracking t WHERE t.trackingNumber LIKE %:searchText% OR t.retailer LIKE %:searchText% " +
            "OR t.address LIKE %:searchText% OR t.status LIKE %:searchText% OR t.carrier LIKE %:searchText% " +
            "ORDER BY CASE " +
            "WHEN t.trackingNumber LIKE %:searchText% THEN 1" +
            "WHEN t.retailer LIKE %:searchText% THEN 2" +
            "WHEN t.address LIKE %:searchText% THEN 3" +
            "WHEN t.status LIKE %:searchText% THEN 4" +
            "WHEN t.carrier LIKE %:searchText% THEN 5" +
            "ELSE 6 END " )
    List<Tracking> searchTracking(String searchText);

    @Query("SELECT t FROM Tracking t " +
            "WHERE (t.retailer LIKE %:searchText% " +
            "OR t.carrier LIKE %:searchText% " +
            "OR t.trackingNumber LIKE %:searchText% " +
            "OR t.status LIKE %:searchText% " +
            "OR t.location LIKE %:searchText% " +
            "OR t.address LIKE %:searchText% " +
            "OR t.title LIKE %:searchText%) " +
            "AND t.hidden = true")
    List<Tracking> searchHiddenTracking(String searchText);

    @Query("SELECT t FROM Tracking t " +
            "WHERE (t.retailer LIKE %:searchText% " +
            "OR t.carrier LIKE %:searchText% " +
            "OR t.trackingNumber LIKE %:searchText% " +
            "OR t.status LIKE %:searchText% " +
            "OR t.location LIKE %:searchText% " +
            "OR t.address LIKE %:searchText% " +
            "OR t.title LIKE %:searchText%) " +
            "AND t.hidden = false")
    List<Tracking> searchVisibleTracking(String searchText);
    @Query("SELECT t FROM Tracking t WHERE t.hidden = true")
    List<Tracking> findHidden();

    @Query("SELECT t FROM Tracking t WHERE t.hidden = false")
    List<Tracking> findVisible();

    List<Tracking> findTrackingByUserAndHiddenIsFalse(User user);

    List<Tracking> findTrackingByUserAndHiddenIsTrue(User user);

    // Allows us to get the tracking count of pending orders
    @Query("SELECT COUNT(t) FROM Tracking t WHERE t.user = :user AND LOWER(t.status) <> 'delivered'")
    Integer getTrackingCount(User user);

    void deleteByTrackingNumber(String trackingNumber);

    // allows us to delete tracking by ID
    void deleteById(Long id);


}
