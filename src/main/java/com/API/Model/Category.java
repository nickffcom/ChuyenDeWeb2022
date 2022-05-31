package  com.API.Model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "Category")
public class Category implements Serializable {
    private static final Long serialVersionUID=1L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String name;
    private String code;
    private String sex;
    private int create_day;
    private String description;

    public Category(String name, String code, String sex, int create_day, String description) {
        this.name = name;
        this.code = code;
        this.sex = sex;
        this.create_day = create_day;
        this.description = description;
    }

    public Category() {

    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public int getCreate_day() {
        return create_day;
    }

    public void setCreate_day(int create_day) {
        this.create_day = create_day;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}