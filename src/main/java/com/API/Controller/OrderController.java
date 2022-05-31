//package com.API.Controller;
//
//import com.API.Model.Order;
//import com.API.Model.Product;
//import com.API.repository.OrderRepository;
//import com.API.repository.ProductRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//@RequestMapping(value = "/order")
//@RestController
//public class OrderController {
//    @Autowired
//    OrderRepository orderRepository;
//
//    @GetMapping(path = "/getAll")
//    public List<Order> getALlProduct(){
//
//        return orderRepository.findAll();
//
//    }
//    @GetMapping(path = "/{idsp}")
//    public Order getDetailsProduct(@PathVariable("idsp") int idorder){
//        Order order= orderRepository.findById(idorder).get();
//        if(order==null){
//            ResponseEntity.notFound().build();
//        }
//        return order;
//    }
//    @PostMapping(path = "/add")
//    public Order registerUser(@RequestBody Order o){
//        return orderRepository.save(o);
//    }
//
//    @PostMapping(path = "/update/{id}")
//    public ResponseEntity<?> UpdateOrder(@PathVariable("id") int id ,@RequestBody Order o){
//        try{
//            o.setId(id);
//            orderRepository.save(o);
//            return new ResponseEntity<>(HttpStatus.OK);
//
//        }catch (Exception e){
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//    }
//    @GetMapping(path = "/delete/{id}")
//    public void deleteById(@PathVariable("id") int id) {
//        orderRepository.deleteById(id);
//    }
//}