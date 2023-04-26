package com.madetech.questions.dataclasses;


public class Question {

    private Integer id;
    private String text;
    private Integer upvotes;
    // private ArrayList<Object> answers;


    public Question(Integer id, String text, Integer upvote) {
        this.id = id;
        this.text = text;
        this.upvotes = upvote;
    }


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Integer getUpvotes() {
        return upvotes;
    }

    public void setUpvotes(Integer upvotes) {
        this.upvotes = upvotes;
    }
}
