package com.madetech.questions.logic;

import com.madetech.questions.database.QuestionsDao;
import com.madetech.questions.dataclasses.Answer;
import com.madetech.questions.dataclasses.Question;
import com.madetech.questions.dataclasses.UpvoteRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
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


        List<Question> questions = questionsDao.retrieveAllQuestionsFromDb();

        try {
            Answer[] answers = restTemplate.getForObject(
                    "http://13.53.135.15:8081/api/v1/answers/all",
//                    "http://localhost:8081/api/v1/answers/all",
                    Answer[].class
            );

//         todo: test the correct errors to throw, configure httpTemplate timeouts`
//      if ( allAnswersFromAnswerService == null ) {
//            throw new IllegalStateException("all answers request from all answersMicoService returned null");
//        }


            for (Question question : questions) {

                List<Answer> questionsAnswers = new ArrayList<>();

                for (Answer answer : answers) {
                    if (answer.getQuestionId() == question.getId()) questionsAnswers.add(answer);
                }

                question.setAnswers(questionsAnswers);

            }
        } catch (Exception e) {
            System.out.println(e);
            System.out.println("error getting answers from answers location");
        }

        return questions;


    }
















    public boolean upvoteQuestioninDb( Integer questionId ) {
        return questionsDao.upvoteQuestionInDb( questionId );
    }

    public boolean addAQuestionToTheDb(String text ) {

        // todo: check if valid question, check if safe sql

        return questionsDao.addQuestionToDb( text );


    }
}
