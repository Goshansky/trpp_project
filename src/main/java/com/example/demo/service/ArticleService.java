package com.example.demo.service;

import com.example.demo.model.Article;

import java.util.List;

public interface ArticleService {
    List<Article> readAll();
    Article read(int id);
}
