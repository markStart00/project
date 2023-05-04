package com.madetech.answers.database;

import com.madetech.answers.dataclasses.Answer;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface AnswersRepository extends CrudRepository<Answer, Integer> {


    @Query("SELECT a FROM Answer a WHERE a.questionId=?1")
    List<Answer> findByQuestionId( Integer questionId );





}
