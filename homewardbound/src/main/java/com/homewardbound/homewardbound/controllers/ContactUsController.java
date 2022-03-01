package com.homewardbound.homewardbound.controllers;

import javax.validation.Valid;

import com.homewardbound.homewardbound.models.contactUs.ContactUs;
import com.homewardbound.homewardbound.services.ContactUsService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "https://localhost:3000")
public class ContactUsController {
    @Autowired
    ContactUsService contactUsService;

    @PostMapping("/api/contact/us")
    public ResponseEntity<?> create(@Valid @RequestBody ContactUs newMessage,BindingResult result){
        if(result.hasErrors()){
            return new ResponseEntity<>(result.getFieldErrors(),HttpStatus.valueOf(206));
        }
        contactUsService.add(newMessage);
        return  new ResponseEntity<String>("Success",HttpStatus.valueOf(200));
    }
}