package com.madetech.questions;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class QuestionsApplication {
    public static void main(String[] args) {

        System.out.println("start");
        SpringApplication.run(QuestionsApplication.class, args);
        System.out.println();
        System.out.println("up");

    }


}