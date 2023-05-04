package com.madetech.answers.api;


import com.madetech.answers.dataclasses.AddAnAnswerRequest;
import com.madetech.answers.dataclasses.AllAnswersForQuestionRequest;
import com.madetech.answers.dataclasses.Answer;
import com.madetech.answers.dataclasses.UpvoteRequest;
import com.madetech.answers.logic.AnswersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("api/v1/answers")
public class AnswersController {

    @Autowired
    private AnswersService answersService;

    @GetMapping( path = "/all")
    public Iterable<Answer> requestAllAnswers() {
        return answersService.getAllAnswersFromDb();
    }

    @GetMapping( path = "/requestAnswers")
    public List<Answer> requestAnswersForQuestion(@RequestBody AllAnswersForQuestionRequest allAnswersForQuestionRequest ) {
        return answersService.getAllAnswersForQuestion( allAnswersForQuestionRequest.getQuestionId() );
    }

    @PostMapping( "/post" )
    public ResponseEntity<?> requestPostAnswer(@RequestBody AddAnAnswerRequest addAnAnswerRequest ) {
        if ( answersService.addAnAnswerToTheDb( addAnAnswerRequest.getText(), addAnAnswerRequest.getQuestionId() )) return new ResponseEntity<>( HttpStatus.OK );
        else return new ResponseEntity<>( HttpStatus.BAD_REQUEST );
    }

    @PutMapping("/upvote")
    public ResponseEntity<?> requestUpvoteAnswer(@RequestBody UpvoteRequest upvoteRequest ) {

        if ( answersService.upvoteAnswerinDb( upvoteRequest.getAnswerId() ) ) return new ResponseEntity<>( HttpStatus.OK );
        else return new ResponseEntity<>( HttpStatus.BAD_REQUEST );

    }


}
