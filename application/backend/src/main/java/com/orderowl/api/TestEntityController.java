package com.orderowl.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/test")
public class TestEntityController {

    private final TestEntityService testEntityService;

    @Autowired
    public TestEntityController(TestEntityService testEntityService) {
        this.testEntityService = testEntityService;
    }

    @GetMapping
    public List<TestEntity> getAllTestEntities() {
        List<TestEntity> testEntities = testEntityService.getAllTestEntities();
        return testEntities;
    }

    @GetMapping("/{id}")
    public ResponseEntity<TestEntity> getTestEntityById(@PathVariable Long id) {
        TestEntity testEntity = testEntityService.getTestEntityById(id);
        if (testEntity != null) {
            return new ResponseEntity<>(testEntity, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<TestEntity> createTestEntity(@RequestBody TestEntity testEntity) {
        TestEntity savedTestEntity = testEntityService.saveTestEntity(testEntity);
        return new ResponseEntity<>(savedTestEntity, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTestEntity(@PathVariable Long id) {
        testEntityService.deleteTestEntity(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
