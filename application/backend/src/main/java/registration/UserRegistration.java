package registration;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping(path = "api/v1/registration")

public class UserRegistration {

    private RegisterUser registerUser;

    public String register(@RequestBody UserRegistering request){
        return registerUser.register(request);
    }
}