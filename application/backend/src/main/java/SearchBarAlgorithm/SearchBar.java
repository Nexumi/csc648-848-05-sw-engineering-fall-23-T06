package SearchBarAlgorithm;

import java.util.ArrayList;
import java.util.List;


public class SearchBar {

    public static void main(String[] args) {
        // Sample list of orders with tracking numbers
        List<Order> orders = new ArrayList<>();
        orders.add(new Order("Order001", "123456"));
        orders.add(new Order("Order002", "789012"));
        orders.add(new Order("Order003", "345678"));
        orders.add(new Order("Order004", "901234"));

        // Tracking number to search for
        String trackingNumber = "345";

        // Call the search function
        List<Order> searchResults = searchOrdersByTrackingNumber(orders, trackingNumber);

        // Display the search results
        System.out.println("Search results for tracking number '" + trackingNumber + "':");
        for (Order result : searchResults) {
            System.out.println("Order ID: " + result.getOrderId() + ", Tracking Number: " + result.getTrackingNumber());
        }
    }

    // Class to represent an order
    static class Order {
        private String orderId;
        private String trackingNumber;

        public Order(String orderId, String trackingNumber) {
            this.orderId = orderId;
            this.trackingNumber = trackingNumber;
        }

        public String getOrderId() {
            return orderId;
        }

        public String getTrackingNumber() {
            return trackingNumber;
        }
    }

    // Function to search orders by tracking number
    public static List<Order> searchOrdersByTrackingNumber(List<Order> orders, String trackingNumber) {
        List<Order> results = new ArrayList<>();

        // Iterate through the list of orders and check if the tracking number contains the keyword
        for (Order order : orders) {
            if (order.getTrackingNumber().contains(trackingNumber)) {
                results.add(order);
            }
        }

        return results;
    }
}
