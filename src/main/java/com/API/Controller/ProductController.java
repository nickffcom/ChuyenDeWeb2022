package com.API.Controller;

import com.API.Model.Product;
import com.API.Model.User;
import com.API.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/product")
public class ProductController {

    @Autowired
    ProductRepository productRepository;

    @GetMapping(path = "/getAll")
    public List<Product> getALlProduct(){
        return productRepository.findAll();

    }
    @GetMapping(path = "/{idsp}")
    public Product getDetailsProduct(@PathVariable("idsp") int idsp){
            Product product= productRepository.findById(idsp).get();
            if(product==null){
                ResponseEntity.notFound().build();
            }
            return product;
    }
    @PostMapping(path = "/addbook")
    public Product registerUser(@RequestBody Product p){
        return productRepository.save(p);
    }

    @PostMapping(path = "/update/{id}")
    public ResponseEntity<?> UpdateProduct(@PathVariable("id") int id ,@RequestBody Product p){
        try{
            p.setId(id);
            productRepository.save(p);
            return new ResponseEntity<>(HttpStatus.OK);

        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @GetMapping(path = "/delete/{id}")
    public void deleteById(@PathVariable("id") int id) {
        productRepository.deleteById(id);
    }
}