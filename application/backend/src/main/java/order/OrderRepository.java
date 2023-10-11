package order;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Date;
import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {
    // Custom JPQL query that retrieves orders based on multiple criteria, including item tracking number.
    @Query("SELECT o FROM Order o JOIN o.itemList i WHERE " +
            "o.hidden = :hidden " +
            "AND o.order_date >= :startDate " +
            "AND o.order_date <= :endDate " +
     //     "AND o.retailerName = :retailerName " +
            "AND i.tracking_number LIKE :trackingNumber")
    List<Order> findOrdersByCriteria(
            @Param("hidden") boolean hidden,        // Flag indicating whether orders are hidden.
            @Param("startDate") Date startDate,     // Start date for date range filtering.
            @Param("endDate") Date endDate,         // End date for date range filtering.
            @Param("retailerName") String retailerName,  // Retailer name for filtering.
            @Param("trackingNumber") String trackingNumber  // Partial tracking number for item filtering.
    );
}
