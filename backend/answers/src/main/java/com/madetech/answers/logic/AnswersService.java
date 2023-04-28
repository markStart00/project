package com.madetech.answers.logic;

import com.madetech.answers.database.AnswersRepository;
import com.madetech.answers.dataclasses.Answer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class AnswersService {

    @Autowired
    private AnswersRepository answersRepository;


    public Iterable<Answer> getAllAnswersFromDb() {
        return answersRepository.findAll();
    }


    public List<Answer> getAllAnswersForQuestion(Integer questionId) {

        List<Answer> answers = answersRepository.findByQuestionId( questionId );
        return answers;

    }


    public boolean addAnAnswerToTheDb(String text, Integer questionId) {

        // todo: check if questionId is valid
        // todo: check if text is valid
        // todo: check if allreayd in db

        Answer answer = new Answer();

        answer.setText( text );
        answer.setUpvotes( 1 );
        answer.setQuestionId( questionId );


        // todo: how to check jpa successfully added to the database ?
        // todo: jpa throws exception for null values
        try {

            answersRepository.save( answer );
            return true;

        // todo: this catch all exception is just temporary
        } catch (Exception e) {

            // todo: actual logging
            System.out.println();
            System.out.println("jpa error saving " + answer.toString() );
            System.out.println();
            e.printStackTrace();

        }


        return false;


    }


}
