package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.stereotype.Service;

@Service
public class EmailService {
    @Autowired
    private JavaMailSender javaMailSender;
    @Value("${spring.mail.sender.email}")
    private String senderEmail;
    @Value("${spring.mail.sender.text}")
    private String senderText;

    public void sendEmail(String name, String email, String phone, String city, String text) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(senderEmail);
        message.setTo("mc.goshanskyi@yandex.ru");
        message.setSubject("Сообщение от Meditation");
        message.setText("Имя: "+name+"\nПочта: "+email+"\nТелефон: "+phone+"\nГород: "+city+"\nТекст: "+ text);
        javaMailSender.send(message);
    }
}
