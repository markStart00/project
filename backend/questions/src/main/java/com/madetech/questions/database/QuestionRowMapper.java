package com.madetech.questions.database;

import com.madetech.questions.dataclasses.Question;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;


public class QuestionRowMapper implements RowMapper<Question> {

    @Override
    public Question mapRow( ResultSet resultSet, int rowNumber ) throws SQLException {

        return new Question(
                resultSet.getInt("id"),
                resultSet.getString("text"),
                resultSet.getInt("upvotes")
        );


    }






}
