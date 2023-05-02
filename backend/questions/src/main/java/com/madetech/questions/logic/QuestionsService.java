package com.madetech.questions.logic;

import com.madetech.questions.database.QuestionsDao;
import com.madetech.questions.dataclasses.Answer;
import com.madetech.questions.dataclasses.Question;
import com.madetech.questions.dataclasses.UpvoteRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;


@Service
public class QuestionsService {

    private final QuestionsDao questionsDao;

    @Autowired
    private RestTemplate restTemplate;

    public QuestionsService(QuestionsDao questionsDao) {
        this.questionsDao = questionsDao;
    }




    public List<Question> getAllQuestionsFromDb() {

        // todo: Answers from Answer service

        Iterable<Answer> allAnswersFromAnswerService =  restTemplate.getForObject(
                "http://localhost:8081/api/v1/answers/all",
                Iterable.class
        );



        System.out.println( allAnswersFromAnswerService );
        if ( allAnswersFromAnswerService == null ) {

            throw new IllegalStateException("all answers request from all answersMicoService returned null");

        }



        return questionsDao.retrieveAllQuestionsFromDb();


    }


    public boolean upvoteQuestioninDb( Integer questionId ) {
        return questionsDao.upvoteQuestionInDb( questionId );
    }

    public boolean addAQuestionToTheDb(String text ) {

        // todo: check if valid question, check if safe sql

        return questionsDao.addQuestionToDb( text );


    }
}