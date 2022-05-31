package  com.API.Model;


import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "OrderProduct")
public class OrderProduct implements Serializable {
    private static final Long serialVersionUID=1L;
    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private int product_id;
    private int count;
    private double total_price;
    private String address;
    private String status;
    private int create_day;

    public OrderProduct(int id, int product_id, int count, double total_price, String address, String status, int create_day) {
        this.id = id;
        this.product_id = product_id;
        this.count = count;
        this.total_price = total_price;
        this.address = address;
        this.status = status;
        this.create_day = create_day;
    }

    public OrderProduct() {

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getProduct_id() {
        return product_id;
    }

    public void setProduct_id(int product_id) {
        this.product_id = product_id;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public double getTotal_price() {
        return total_price;
    }

    public void setTotal_price(double total_price) {
        this.total_price = total_price;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getCreate_day() {
        return create_day;
    }

    public void setCreate_day(int create_day) {
        this.create_day = create_day;
    }
}