package com.madetech.questions.dataclasses;

// is a copy of the Answer class from the Answers service ...
public class Answer {

    private Integer id;
    private String text;
    private Integer upvotes;
    private Integer questionId;


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

    public Integer getQuestionId() {
        return questionId;
    }

    public void setQuestionId(Integer questionId) {
        this.questionId = questionId;
    }

    @Override
    public String toString() {
        return "Answer{" +
                "id=" + id +
                ", text='" + text + '\'' +
                ", upvotes=" + upvotes +
                ", questionId=" + questionId +
                '}';
    }



}
