package com.orderowl.api.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

//    /**
//     * This is our custom query to search if the user and password exists in user database
//     *
//     * @param email    This is the email parameter used to search the database
//     * @return it will return the list of users with the matching email and password
//     */
//    @Query("SELECT u FROM User u WHERE u.email = :email AND u.password = :password")
//    List<User> findByEmail(@Param("email") String email);

    void deleteById(Long Id);

    Optional<User> findByEmail(String email);


}