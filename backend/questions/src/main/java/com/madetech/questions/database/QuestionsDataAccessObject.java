package com.madetech.questions.database;

import com.madetech.questions.dataclasses.Question;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import java.sql.PreparedStatement;
import java.util.List;
import java.util.Optional;

@Repository
public class QuestionsDataAccessObject implements QuestionsDao {

    private final JdbcTemplate jdbcTemplate;

    public QuestionsDataAccessObject( JdbcTemplate jdbcTemplate ) {
        this.jdbcTemplate = jdbcTemplate;
    }


    @Override
    public List<Question> retrieveAllQuestionsFromDb() {


        var sql = """
                SELECT *
                FROM questions
                LIMIT 100;
                """;

        return jdbcTemplate.query(sql, new QuestionRowMapper());


    }


    @Override
    @Transactional( isolation = Isolation.SERIALIZABLE )
    public boolean upvoteQuestionInDb( Integer questionId ) {


        var sqlRetrieve = """
                SELECT *
                FROM questions
                WHERE id = ?
                """;


        Optional<Question> retrievedQuestion = jdbcTemplate.query( sqlRetrieve, new QuestionRowMapper(), questionId ).stream().findFirst();

        if ( retrievedQuestion.isPresent() == false ) return false;

        Integer upvotes = retrievedQuestion.get().getUpvotes();

        upvotes ++;


        var sqlUpdate = """
                UPDATE questions
                SET upvotes = ?
                WHERE id = ?
                """;


        int numberOfRowsAffected = jdbcTemplate.update( sqlUpdate, upvotes, questionId );

        if (numberOfRowsAffected == 1) return true;
        else return false;


    }



    @Override
    public boolean addQuestionToDb( String text ) {

        int defaultUpvotes = 1;

        var sql =   "INSERT INTO questions( text, upvotes ) " +
                    "VALUES ( '" + text + "', " + defaultUpvotes + ");";

        int responseCode = jdbcTemplate.update( sql );

        // todo: throws errors for duplicate keys without returning false?
        if ( responseCode == 1) return true;
        else return false;

    }




}