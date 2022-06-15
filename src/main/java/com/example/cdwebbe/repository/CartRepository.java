package com.example.cdwebbe.repository;

import com.example.cdwebbe.model.Cart;
import com.example.cdwebbe.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CartRepository extends JpaRepository<Cart,Long> {
//@Query(value = "Select id from cart where userid=?1",nativeQuery = true)
//    List<Long> findByUser(Long userid);

}
