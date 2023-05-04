package com.madetech.questions.api;


import com.madetech.questions.dataclasses.AddAQuestionRequest;
import com.madetech.questions.dataclasses.Question;
import com.madetech.questions.dataclasses.UpvoteRequest;
import com.madetech.questions.logic.QuestionsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("api/v1/questions")
public class QuestionsController {

    @Autowired
    private QuestionsService questionsService;


    @GetMapping
    public List<Question> requestAllQuestions() {
        return questionsService.getAllQuestionsFromDb();

    }


    @PostMapping( "/post" )
    public ResponseEntity<?> requestPostQuestion( @RequestBody AddAQuestionRequest addAQuestionRequest ) {

        System.out.println("here");
        System.out.println( addAQuestionRequest.getText() );

        if ( questionsService.addAQuestionToTheDb( addAQuestionRequest.getText() ) ) return new ResponseEntity<>( HttpStatus.OK );
        else return new ResponseEntity<>( HttpStatus.BAD_REQUEST );

    }


    @PutMapping("/upvote")
    public ResponseEntity<?> requestUpvoteQuestion(@RequestBody UpvoteRequest upvoteRequest ) {

        if ( questionsService.upvoteQuestioninDb( upvoteRequest.getQuestionId() ) ) return new ResponseEntity<>( HttpStatus.OK );
        else return new ResponseEntity<>( HttpStatus.BAD_REQUEST );

    }




}
