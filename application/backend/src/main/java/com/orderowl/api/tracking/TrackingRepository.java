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

    @Query("SELECT t FROM Tracking t WHERE t.user = null")
    List<Tracking> getTrackingByGuest();

    @Query("SELECT t FROM Tracking t " +
            "WHERE (t.retailer LIKE %:searchText% " +
            "OR t.carrier LIKE %:searchText% " +
            "OR t.trackingNumber LIKE %:searchText% " +
            "OR t.status LIKE %:searchText% " +
            "OR t.location LIKE %:searchText% " +
            "OR t.address LIKE %:searchText% " +
            "OR t.title LIKE %:searchText%) " +
            "AND t.user = null")
    List<Tracking> findTrackingByGuest(String searchText);

    // Allows us to get the tracking count of pending orders
    @Query("SELECT COUNT(t) FROM Tracking t WHERE t.user = :user AND LOWER(t.status) <> 'delivered'")
    Integer getTrackingCount(User user);

    @Query("SELECT COUNT(t) FROM Tracking t WHERE t.user = null AND LOWER(t.status) <> 'delivered'")
    Integer getTrackingCountGuest();

    void deleteByTrackingNumber(String trackingNumber);

    // allows us to delete tracking by ID
    void deleteById(Long id);


}
