package com.example.demo.controller;


import com.example.demo.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/mails")
public class EmailController {
    @Autowired
    private EmailService emailService;

    @GetMapping("/post")
    public void sendSimpleEmail(@RequestParam("name") String name,
                                @RequestParam("email") String email,
                                @RequestParam("phone") String phone,
                                @RequestParam("city") String city,
                                @RequestParam("text") String text){
        emailService.sendEmail(name, email, phone, city, text);
    }
//    @GetMapping("/simple")
//    public void sendSimpleEmail(){
//        emailService.sendEmail("mc.goshanskyi@yandex.ru");
//    }

    @PostMapping("/post")
    public void sendSimpleEmail2(@RequestParam("name") String name,
                                @RequestParam("email") String email,
                                @RequestParam("phone") String phone,
                                @RequestParam("city") String city,
                                @RequestParam("text") String text){
        emailService.sendEmail(name, email, phone, city, text);
    }
}
