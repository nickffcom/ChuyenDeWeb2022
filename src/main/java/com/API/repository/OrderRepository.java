package com.API.repository;


import com.API.Model.OrderProduct;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<OrderProduct,Integer> {
}