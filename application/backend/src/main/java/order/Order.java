package order;

import item.Item;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.List;

@Entity
@Table
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDate order_date;
    private Boolean hidden;

    @OneToMany
    List<Item> itemList;

    public Order() {
    }

    public Order(Long id, LocalDate order_date, Boolean hidden, List<Item> itemList) {
        this.id = id;
        this.order_date = order_date;
        this.hidden = hidden;
        this.itemList = itemList;
    }

    public Order(LocalDate order_date, Boolean hidden, List<Item> itemList) {
        this.order_date = order_date;
        this.hidden = hidden;
        this.itemList = itemList;
    }

    public Long getId() {
        return id;
    }

    public LocalDate getOrder_date() {
        return order_date;
    }

    public Boolean getHidden() {
        return hidden;
    }

    public List<Item> getItemList() {
        return itemList;
    }

    public Order setId(Long id) {
        this.id = id;
        return this;
    }

    public Order setOrder_date(LocalDate order_date) {
        this.order_date = order_date;
        return this;
    }

    public Order setHidden(Boolean hidden) {
        this.hidden = hidden;
        return this;
    }

    public Order setItemList(List<Item> itemList) {
        this.itemList = itemList;
        return this;
    }

    @Override
    public String toString() {
        return super.toString();
    }
}
