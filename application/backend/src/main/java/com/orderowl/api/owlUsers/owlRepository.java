package com.orderowl.api.owlUsers;
/**
 * This is the repository interface for managing owlUsers entities.
 */
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
//This will find our users by looking up the email that has been registered.
public interface owlRepository extends JpaRepository<owlUsers, Long> {

    Optional<owlUsers> findByEmail(String emailID);

    @Transactional(readOnly = true)
    @Modifying
    @Query("UPDATE owlUsers a " +
            "SET a.enabled = TRUE WHERE a.emailID = ?1")
    int enableOwlUser(String emailID);
}
