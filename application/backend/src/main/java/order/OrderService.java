package order;

import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Service
public class OrderService {

    public List<Order> getOrders() {
        return List.of(
                new Order(
                        1L,
                        LocalDate.of(2023, Month.APRIL, 1),
                        false,
                        itemList
                )
        );
    };
}
