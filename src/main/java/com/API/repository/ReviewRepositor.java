package com.API.repository;


import com.API.Model.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepositor extends JpaRepository<Review,Integer> {
}