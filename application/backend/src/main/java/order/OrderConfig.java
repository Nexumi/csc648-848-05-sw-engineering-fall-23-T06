package order;
import item.Item;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Configuration
public class OrderConfig {

    @Bean
    CommandLineRunner commandLineRunner(OrderRepository repository) {
        return args -> {

            List<Item> items1 = List.of(
                    new Item(
                            1L,
                            "qwerty123456",
                            "At warehouse",
                            "iPhone",
                            new Order().setId(1L)
                    )
            );

            Order order1 = new Order(
                    1L,
                    LocalDate.of(2023, Month.APRIL, 1),
                    false,
                    "Target",
                    items1
            );

            List<Item> items2 = List.of(
                    new Item(
                            2L,
                            "abc123",
                            "In transit",
                            "Laptop",
                            new Order().setId(2L)
                    ),
                    new Item(
                            3L,
                            "xyz789",
                            "Delivered",
                            "Tablet",
                            new Order().setId(2L)
                    )
            );

            Order order2 = new Order(
                    2L, // Corrected the order ID to 2L
                    LocalDate.of(2023, Month.DECEMBER, 19),
                    false,
                    "Amazon",
                    items2
            );

            repository.saveAll(
                    List.of(order1, order2)
            );
        };
    }
}

