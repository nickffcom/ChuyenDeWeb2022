package com.example.cdwebbe.DTO;

import com.example.cdwebbe.model.Product;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.ArrayList;
import java.util.List;

public class CatagoryDTO {
    private Long id;//Đã sửa int -> Long.
    private String description;
    private String type;
    private String keywork;

    @JsonIgnore
    private List<Product> productList=new ArrayList<>();


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<Product> getProductList() {
        return productList;
    }

    public void setProductList(List<Product> productList) {
        this.productList = productList;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getKeywork() {
        return keywork;
    }

    public void setKeywork(String keywork) {
        this.keywork = keywork;
    }
}
