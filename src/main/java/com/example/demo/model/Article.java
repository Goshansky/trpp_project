package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Entity
@Table(name = "articles")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Getter
@Setter
public class Article {
    @Id
    @Column(name = "article_id")
    @SequenceGenerator(name = "articlesIdSeq", sequenceName = "articles_id_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "articlesIdSeq")
    private int articleId;

    @Column(name = "article_name")
    private String articleName;

    @Column(name = "image_url")
    private String imageUrl;

    @Column(name = "content")
    private String content;
}
