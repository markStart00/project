package com.madetech.questions.database;

import com.madetech.questions.dataclasses.Question;

import java.util.List;

public interface QuestionsDao {

    List<Question> retrieveAllQuestionsFromDb();
    boolean upvoteQuestionInDb(Integer questionId );
    boolean addQuestionToDb(String text);




}
