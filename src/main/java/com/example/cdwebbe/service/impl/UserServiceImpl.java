package com.example.cdwebbe.service.impl;

import com.example.cdwebbe.DTO.UserDTO;
import com.example.cdwebbe.converter.UserConverter;
import com.example.cdwebbe.model.User;
import com.example.cdwebbe.payload.UserListResponse;
import com.example.cdwebbe.repository.UserRepository;
import com.example.cdwebbe.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    UserRepository userRepository;
    @Autowired
    UserConverter userConverter;

    @Override
    public String deleteUser(long id) {
        boolean isExist = userRepository.existsById(id);
        if(isExist){
            userRepository.deleteById(id);
            return "Delete user success";
        }else{
            return "User is not exist";
        }
    }
    @Override
    public User getUserById(Long id) {
        Optional<User> user = userRepository.findById(id);
        return user.get();
    }
    @Override
    public User save(User u) {
        return userRepository.save(u);
    }

    @Override
    public UserListResponse findByPageable(Pageable pageable) {
        UserListResponse userListResponse = new UserListResponse();
        userListResponse.setPage(pageable.getPageNumber()+1);
        userListResponse.setLimit(pageable.getPageSize());
        userListResponse.setTotalUser( (int) userRepository.count());
        userListResponse.setTotalPage( (int) Math.ceil( (double) userListResponse.getTotalUser() / userListResponse.getLimit() )  );

        List<User> userList = userRepository.findAll(pageable).getContent();
        userListResponse.setUserDTOList(userConverter.toDTO(userList));
        return userListResponse;
    }

    @Override
    public UserListResponse findBySearch(String search, Pageable pageable) {
        UserListResponse userListResponse = new UserListResponse();
        userListResponse.setPage(pageable.getPageNumber()+1);
        userListResponse.setLimit(pageable.getPageSize());

        List<User> userList = userRepository.findAllByNameContainsOrAddressContainsOrEmailContainsOrGenderContainsOrPhoneContains(search, search, search, search, search, pageable).getContent();
        userListResponse.setTotalUser(userRepository.countByNameContainsOrAddressContainsOrEmailContainsOrGenderContainsOrPhoneContains(search, search, search, search, search));
        userListResponse.setTotalPage( (int) Math.ceil( (double) userListResponse.getTotalUser() / userListResponse.getLimit() ) );
        userListResponse.setUserDTOList(userConverter.toDTO(userList));
        return userListResponse;
    }

    @Override
    public boolean delete(Long id) {
        userRepository.deleteById(id);
        if(! userRepository.existsById(id)) return true;
        return false;
    }

    @Override
    public UserDTO findById(Long id) {
        return userConverter.toDTO(userRepository.findOnedById(id));
    }

    @Override
    public UserDTO setStatus(Long id, boolean status) {
        User userEntity= userRepository.findOnedById(id);
        userEntity.setStatus(status);
        userRepository.save(userEntity);
        return userConverter.toDTO(userEntity);
    }

}
