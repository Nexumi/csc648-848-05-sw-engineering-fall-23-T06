package com.orderowl.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/search")
public class SearchController {

    private final OrderService orderService; // Assuming you have an OrderService

    @Autowired
    public SearchController(OrderService orderService) {
    this.orderService = orderService;
}

@GetMapping
public List<Order> searchOrders(@RequestParam String query) {
    if (query != null && !query.isEmpty()) {
        // Use your OrderService to perform a search with SQL-like %LIKE query
        List<Order> searchResults = orderService.searchOrders(query);

        if (searchResults != null && !searchResults.isEmpty()) {
            return searchResults;
        } else {
            return List.of(new Order("No results found for query: " + query));
        }
    } else {
        return List.of(new Order("Please enter a search query."));
    }
}
}
