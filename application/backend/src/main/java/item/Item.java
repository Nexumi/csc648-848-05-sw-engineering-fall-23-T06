package item;


import com.fasterxml.jackson.annotation.JsonBackReference;
import order.Order;
import jakarta.persistence.*;

@Entity
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String tracking_number;
    private String status;
    private String name;

    @JsonBackReference
    @ManyToOne
    private Order order;

    public Item() {
    }

    public Item(Long id, String tracking_number, String status, String name, Order order) {
        this.id = id;
        this.tracking_number = tracking_number;
        this.status = status;
        this.name = name;
        this.order = order;
    }

    public Item(String tracking_number, String status, String name, Order order) {
        this.tracking_number = tracking_number;
        this.status = status;
        this.name = name;
        this.order = order;
    }

    public Long getId() {
        return id;
    }

    public Item setId(Long id) {
        this.id = id;
        return this;
    }

    public String getTracking_number() {
        return tracking_number;
    }

    public Item setTracking_number(String tracking_number) {
        this.tracking_number = tracking_number;
        return this;
    }

    public String getStatus() {
        return status;
    }

    public Item setStatus(String status) {
        this.status = status;
        return this;
    }

    public String getName() {
        return name;
    }

    public Item setName(String name) {
        this.name = name;
        return this;
    }

    public Order getOrder() {
        return order;
    }

    public Item setOrder(Order order) {
        this.order = order;
        return this;
    }

    @Override
    public String toString() {
        return "Item{" +
                "id=" + id +
                ", tracking_number='" + tracking_number + '\'' +
                ", status='" + status + '\'' +
                ", name='" + name + '\'' +
                ", order=" + order +
                '}';
    }
}
