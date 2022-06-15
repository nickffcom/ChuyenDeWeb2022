package com.example.cdwebbe.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "CartItem")
public class CartItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; //Đã Chuyển id -> Long

    @NotBlank
    private int quantity;

    @NotBlank
    private int totalPrice;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "productId",referencedColumnName = "id")
    private Product product;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "cartId",referencedColumnName = "id")
    private Cart cart;


    @Override
    public String toString() {
        return "CartItem{" +
                "id=" + id
                +
                ", productEntities=" + product +
                ", quantity=" + quantity +
                ", totalPrice=" + totalPrice +
//                ", cartEntity=" + cartEntity +
                '}'
                ;
    }

    public CartItem() {
    }
}
