package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping("/")
    public String home() {
        return "index";
    }

    @GetMapping("/home")
    public String homePage() {
        return "index";
    }

    @GetMapping("/article1")
    public String article1() {
        return "article1";
    }

    @GetMapping("/article2")
    public String article2() {
        return "article2";
    }

    @GetMapping("/article3")
    public String article3() {
        return "article3";
    }

    @GetMapping("/article4")
    public String article4() {
        return "article4";
    }

    @GetMapping("/article5")
    public String article5() {
        return "article5";
    }

    @GetMapping("/article6")
    public String article6() {
        return "article6";
    }

    @GetMapping("/article7")
    public String article7() {
        return "article7";
    }

    @GetMapping("/article8")
    public String article8() {
        return "article8";
    }

    @GetMapping("/article9")
    public String article9() {
        return "article9";
    }

    @GetMapping("/article10")
    public String article10() {
        return "article10";
    }

    @GetMapping("/article11")
    public String article11() {
        return "article11";
    }

    @GetMapping("/article12")
    public String article12() {
        return "article12";
    }
    @GetMapping("/articlesUseful")
    public String articlesUseful() {
        return "articlesUseful";
    }
    @GetMapping("/feedback")
    public String feedback() {
        return "feedback";
    }
    @GetMapping("/meditationMusic")
    public String meditationMusic() {
        return "meditationMusic";
    }
    @GetMapping("/meditationOnline")
    public String meditationOnline() {
        return "meditationOnline";
    }
    @GetMapping("/meditationShop")
    public String meditationShop() {
        return "meditationShop";
    }
    @GetMapping("/meditationVideo")
    public String meditationVideo() {
        return "meditationVideo";
    }

}
