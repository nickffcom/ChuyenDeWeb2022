package  com.API.Model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "Review")
public class Review implements Serializable {
    private static final Long serialVersionUID=1L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private int product_id;
    private String content;
    private int user_id;
    private int create_day;
    private int start;

    public Review(int id, int product_id, String content, int user_id, int create_day, int start) {
        this.id = id;
        this.product_id = product_id;
        this.content = content;
        this.user_id = user_id;
        this.create_day = create_day;
        this.start = start;
    }

    public Review() {

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

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public int getCreate_day() {
        return create_day;
    }

    public void setCreate_day(int create_day) {
        this.create_day = create_day;
    }

    public int getStart() {
        return start;
    }

    public void setStart(int start) {
        this.start = start;
    }
}