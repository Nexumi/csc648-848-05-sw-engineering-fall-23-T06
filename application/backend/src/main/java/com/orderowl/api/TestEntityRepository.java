package com.orderowl.api;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TestEntityRepository extends JpaRepository<TestEntity, Long> {
    // You can add custom query methods here if needed
}
