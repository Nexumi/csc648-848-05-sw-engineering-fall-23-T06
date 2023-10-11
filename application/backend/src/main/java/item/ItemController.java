package item;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping (path = "/items")
public class ItemController {

    private

    @GetMapping
    public List<Item> getItems() {

    };
}
