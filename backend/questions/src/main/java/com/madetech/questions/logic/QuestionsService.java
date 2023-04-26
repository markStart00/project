package com.madetech.questions.logic;

import com.madetech.questions.database.QuestionsDao;
import com.madetech.questions.dataclasses.Question;
import com.madetech.questions.dataclasses.UpvoteRequest;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class QuestionsService {

    private final QuestionsDao questionsDao;

    public QuestionsService(QuestionsDao questionsDao) {
        this.questionsDao = questionsDao;
    }


    public List<Question> getAllQuestionsFromDb() {

        return questionsDao.retrieveAllQuestionsFromDb();

    }


    public boolean upvoteQuestioninDb( Integer questionId ) {
        return questionsDao.upvoteQuestionInDb( questionId );
    }
}
