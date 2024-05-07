package com.example.demo.controller;

import com.example.demo.model.Article;
import com.example.demo.service.ArticleServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class MainController {
    @Autowired
    private ArticleServiceImpl articleService;

    @GetMapping("/")
    public String home() {
        return "index";
    }

    @GetMapping("/home")
    public String homePage() {
        return "index";
    }



    @GetMapping("/article/{article_id}")
    public String article1(@PathVariable String article_id, Model model) {
        model.addAttribute("article",
                articleService.read(Integer.parseInt(article_id)));
        return "article";
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
