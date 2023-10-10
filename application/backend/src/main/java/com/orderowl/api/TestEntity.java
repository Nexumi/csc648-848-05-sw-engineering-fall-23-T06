package com.orderowl.api;

import jakarta.persistence.*;

@Entity
@Table(name = "test")
public class TestEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String word;

    // Constructors, getters, and setters

    public TestEntity() {
        // Default constructor required by JPA
    }

    public TestEntity(String word) {
        this.word = word;
    }

    // Getter and setter methods

    public Long getId() {
        return id;
    }

    public String getWord() {
        return word;
    }

    public void setWord(String word) {
        this.word = word;
    }

    // toString, equals, and hashCode methods can also be overridden if needed
}
