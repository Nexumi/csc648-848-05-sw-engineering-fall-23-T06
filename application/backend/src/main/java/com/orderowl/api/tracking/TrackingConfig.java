/**
 * This allows the application to directly add tracking information to the database.
 * It uses spring boot's commandline runner to add data on startup.
 */
package com.orderowl.api.tracking;

import com.orderowl.api.user.Role;
import com.orderowl.api.user.User;
import com.orderowl.api.user.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.time.LocalDate;
import java.util.List;

@Configuration
public class TrackingConfig {

    private final PasswordEncoder passwordEncoder;

    public TrackingConfig(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    @Bean
    CommandLineRunner commandLineRunner(TrackingRepository repository, UserRepository userRepository) {

        return args -> {

            var user1 = User.builder()
                    .firstname("Test")
                    .lastname("One")
                    .email("userTest1@mail.com")
                    .password(passwordEncoder.encode("hell0w0rld"))
                    .role(Role.USER)
                    .pin("1111")
                    .build();

            var user2 = User.builder()
                    .firstname("Test")
                    .lastname("Two")
                    .email("userTest2@mail.com")
                    .password(passwordEncoder.encode("hell0w0rld"))
                    .role(Role.BUSINESS)
                    .pin("2222")
                    .build();

            var user3 = User.builder()
                    .firstname("Test")
                    .lastname("Three")
                    .email("userTest3@mail.com")
                    .password(passwordEncoder.encode("hell0w0rld"))
                    .role(Role.ADMIN)
                    .pin("3333")
                    .build();

            userRepository.saveAll(List.of(user1, user2, user3));


            // some fake tracking information added
            // The locations are carrier stores located in those cities
            Tracking tracking1 = new Tracking(
                    1L,
                    "Amazon",
                    "USPS",
                    LocalDate.of(2023, 9, 20),
                    "ABC123456789",
                    "In Transit",
                    "Las Vegas, NV",
                    "1801 S Decatur Blvd, Las Vegas, NV 89102",
                    false,
                    "Clothes",
                    user1
            );
            Tracking tracking2 = new Tracking(
                    2L,
                    "Target",
                    "USPS",
                    LocalDate.of(2023, 10, 31),
                    "XYZ101010",
                    "Out for Delivery",
                    "San Francisco, CA",
                    "1800 Taraval St, San Francisco, CA 94116",
                    false,
                    "Toys",
                    user2
            );
            Tracking tracking3 = new Tracking(
                    3L,
                    "Amazon",
                    "UPS",
                    LocalDate.of(2023, 11, 2),
                    "DEF789012",
                    "Delivered",
                    "Los Angeles, CA",
                    "2202 S Figueroa St, Los Angeles, CA 90007",
                    false,
                    "More Clothes",
                    user1
            );
            Tracking tracking4 = new Tracking(
                    4L,
                    "Best Buy",
                    "DHL",
                    LocalDate.of(2023, 11, 3),
                    "GHI345678",
                    "Pending",
                    "Chicago, IL",
                    "886 2nd Ave, New York, NY 10017",
                    true,
                    "Computer Parts",
                    user1
            );
            Tracking tracking5 = new Tracking(
                    5L,
                    "Walmart",
                    "FedEx",
                    LocalDate.of(2023, 11, 1),
                    "ABC123456",
                    "In Transit",
                    "New York, NY",
                    "560 W 42nd St, New York, NY 10036",
                    true,
                    "Skateboard",
                    user2
            );

            // directly access the repository to save the fake tracking information
            repository.saveAll(List.of(tracking1, tracking2, tracking3, tracking4, tracking5));

        };
    }

}
