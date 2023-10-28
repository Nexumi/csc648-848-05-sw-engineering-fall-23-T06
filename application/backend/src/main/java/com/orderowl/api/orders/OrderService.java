package com.orderowl.api.orders;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

    private final OrderRepository orderRepository;

    @Autowired
    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @Cacheable("tracking")
    public List<Order> getOrders() {
        return orderRepository.findAll();
    }

    @Cacheable("tracking")
    public Order getOrderById(Long id) {
        return orderRepository.findById(id).orElse(null);
    }
}
