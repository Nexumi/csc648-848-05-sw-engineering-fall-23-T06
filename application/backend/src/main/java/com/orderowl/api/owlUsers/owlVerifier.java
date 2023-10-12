package com.orderowl.api.owlUsers;

import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class owlVerifier implements UserDetailsService {

    // This will basically check if the email has been created already in the database
    private final static String USER_NOT_FOUND_MSG = "email, %s ,  has not been used to create an account";
    private final owlRepository OwlRepository;

    @Override
    public UserDetails loadUserByUsername(String emailID) throws UsernameNotFoundException {

            return OwlRepository.findByEmail(emailID).orElseThrow(() ->
                    new UsernameNotFoundException(String.format(USER_NOT_FOUND_MSG, emailID)));

    }

    public int enableOwlUser(String emailID) {
        return OwlRepository.enableOwlUser(emailID);
    }
}
