package com.API.Controller;


import com.API.Model.User;
import com.API.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping(path = "/user")
public class UserController{

    @Autowired
    UserRepository  userRepository;

    @GetMapping(path = "/all")
    public List<User> getAllUser(){
            return userRepository.findAll();
    }
    @GetMapping(path = "{id}")
    public User getUserbyId(@PathVariable("id") int id){
        User user = userRepository.findById(id).get();
        if(user==null) {
            ResponseEntity.notFound().build();
        }
        return user;
    }
    @PostMapping(path = "/register")
    public User registerUser(@RequestBody User u){
            return userRepository.save(u);
    }

    @PostMapping(path = "/update/{id}")
    public ResponseEntity<?> UpdateUser(@PathVariable("id") int id ,@RequestBody User u){
            try{
                u.setId(id);
                userRepository.save(u);
                return new ResponseEntity<>(HttpStatus.OK);

            }catch (Exception e){
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
    }
    @GetMapping(path = "/delete/{id}")
    public void deleteById(@PathVariable("id") int id) {
        userRepository.deleteById(id);
    }

}