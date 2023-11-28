package com.orderowl.api.registration;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    /**
     * This is our custom query to search if the user and password exists in user database
     *
     * @param email    This is the email parameter used to search the database
     * @param password This is the password parameter used to search the database
     * @return it will return the list of users with the matching email and password
     */
    @Query("SELECT u FROM User u WHERE u.email = :email AND u.password = :password")
    List<User> findByEmailAndPassword(@Param("email") String email, @Param("password") String password);

    void deleteById(Long Id);

    Optional<User> findByEmail(String email);


}
