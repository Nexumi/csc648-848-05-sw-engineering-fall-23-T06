package SearchBarAlgorithm;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import order.OrderRepository;  // Import the OrderRepository for database access.
import order.Order;  // Import the Order entity.

import org.springframework.beans.factory.annotation.Autowired;

import java.util.Date;
import java.util.List;

@Service
public class SearchBar {
    private final OrderRepository orderRepository;

    // Constructor: It's automatically injected with an OrderRepository bean when created.
    @Autowired
    public SearchBar(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    // This method is marked as read-only to ensure it doesn't modify the database.
    // It searches for orders based on specific criteria and returns a list of orders.
    @Transactional(readOnly = true)
    public List<Order> searchOrders(boolean hidden, Date startDate, Date endDate, String retailerName) {
        // Calls the findOrdersByCriteria method defined in the OrderRepository interface.
        // Passes the specified criteria as method arguments.
        // The method is expected to execute a custom JPQL query to find orders matching these criteria.
        return orderRepository.findOrdersByCriteria(hidden, startDate, endDate, retailerName);
    }
}
