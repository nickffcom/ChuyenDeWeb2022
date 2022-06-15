package com.example.cdwebbe.repository;

import com.example.cdwebbe.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product,Long> {

    @Override
    Page<Product> findAll(Pageable pageable);
}
