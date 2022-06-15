package com.example.cdwebbe.controller;

import com.example.cdwebbe.model.Cart;
import com.example.cdwebbe.model.User;
import com.example.cdwebbe.payload.ApiResponse;
import com.example.cdwebbe.repository.CartRepository;
import com.example.cdwebbe.security.CurrentUser;
import com.example.cdwebbe.security.UserPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/cart")
public class CartController {

    @Autowired
    CartRepository cartRepository;

    @GetMapping("/getAllListOder")
    public ResponseEntity<?> testGet(){
//        @CurrentUser UserPrincipal currentUser
//        System.out.println("cart ne,"+currentUser.toString());
//        User u = new User(currentUser.getId(),currentUser.getName(),currentUser.getUsername(),currentUser.getEmail(),currentUser.getPassword(),currentUser.getGender(),currentUser.getAddress(),currentUser.getPhone(),currentUser.getRoles());
//        List<Cart> listCart= cartRepository.findByUser(u);
//        System.out.println("cart ne,"+listCart.toString());
//        if(listCart==null){
//
//        }else{
//            return ResponseEntity.ok().body(listCart);
//        }

        return  ResponseEntity.ok().body(new ApiResponse(false,"Lôi rồi b oi"));
    }

}
