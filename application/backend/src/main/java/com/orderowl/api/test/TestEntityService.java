package com.orderowl.api.test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TestEntityService {

    private final TestEntityRepository testEntityRepository;

    @Autowired
    public TestEntityService(TestEntityRepository testEntityRepository) {
        this.testEntityRepository = testEntityRepository;
    }

    public List<TestEntity> getAllTestEntities() {
        List<TestEntity> testEntities = testEntityRepository.findAll();
        System.out.println("Retrieved " + testEntities.size() + " entities from the database.");
        return testEntities;
    }

    public TestEntity getTestEntityById(Long id) {
        return testEntityRepository.findById(id).orElse(null);
    }

    public TestEntity saveTestEntity(TestEntity testEntity) {
        return testEntityRepository.save(testEntity);
    }

    public void deleteTestEntity(Long id) {
        testEntityRepository.deleteById(id);
    }
}
