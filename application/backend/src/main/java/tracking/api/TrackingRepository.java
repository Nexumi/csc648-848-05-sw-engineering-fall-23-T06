package tracking.api;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TrackingRepository extends JpaRepository<TrackingEntity, Long> {
    // Custom JPQL query that retrieves tracking records based on multiple criteria.
    @Query("SELECT t FROM TrackingEntity t WHERE " +
            " t.trackingNumber LIKE :trackingNumber " +  // Partial tracking number for filtering.
            "AND t.retailer LIKE :retailer " +  // Retailer name for filtering.
            "AND t.address LIKE :address " +  // Retailer name for filtering.
            "AND t.location LIKE :location")  // Partial address or location for filtering.


    List<TrackingEntity> findTrackingByCriteria(@Param("address") String address,              // Status for filtering.
                                                @Param("trackingNumber") String trackingNumber, // Partial tracking number for filtering.
                                                @Param("retailer") String retailer,          // Retailer name for filtering.
                                                @Param("location") String location);
}
