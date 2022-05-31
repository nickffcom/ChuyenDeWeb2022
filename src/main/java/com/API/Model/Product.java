package com.API.Model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "Product")
public class Product  implements Serializable {
    private static final long serialVersionUID = -2810926649829063546L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String name;
    private String image;
    private String description;
    double price;
    String color;
    double price_sale;
    private String score;

    public Product(int id, String name, String image, String description, double price, String color, double price_sale, String score) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.description = description;
        this.price = price;
        this.color = color;
        this.price_sale = price_sale;
        this.score = score;
    }

    public Product() {

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public double getPrice_sale() {
        return price_sale;
    }

    public void setPrice_sale(double price_sale) {
        this.price_sale = price_sale;
    }

    public String getScore() {
        return score;
    }

    public void setScore(String score) {
        this.score = score;
    }
}