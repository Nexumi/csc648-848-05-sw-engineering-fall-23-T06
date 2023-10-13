package com.orderowl.api.login;

import org.springframework.data.jpa.repository.JpaRepository;
import com.orderowl.api.login.LoginEntity;
import java.util.List;
import java.util.Optional;

public interface LoginRepository extends JpaRepository<LoginEntity, Long> {

    List<LoginEntity> findByEmail (String emailID);
    List<LoginEntity> findByPassword (String passwordID);
}
