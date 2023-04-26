package com.madetech.questions.api;


import com.madetech.questions.dataclasses.Question;
import com.madetech.questions.dataclasses.UpvoteRequest;
import com.madetech.questions.logic.QuestionsService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/questions")
public class QuestionsController {

    private final QuestionsService questionsService;

    public QuestionsController( QuestionsService questionService ) {
        this.questionsService = questionService;
    }

    // https://www.youtube.com/watch?v=1aWhYEynZQw&list=PLwvrYc43l1Mwqpf9i-1B1gXfMeHOm6DeY&index=7
    // 33:17 ?

    @GetMapping
    public List<Question> requestAllQuestions() {
        return questionsService.getAllQuestionsFromDb();

    }



//
//
//    @PostMapping( path = "" ,
//                  consumes = MediaType.APPLICATION_JSON_VALUE,
//                  produces = MediaType.APPLICATION_JSON_VALUE )
//    public ResponseEntity<String> ( @RequestBody AddAQuestionRequest addAQuestionRequest ) {
//
//        return new ResponseEntity<>("Question successful added to Database", HttpStatus.OK);
//
//    }
//


    @PutMapping("/upvote/{id}")
    public ResponseEntity<?> requestUpvoteQuestion(@RequestBody UpvoteRequest upvoteRequest ) {

        if ( questionsService.upvoteQuestioninDb( upvoteRequest.getQuestionId() ) ) return new ResponseEntity<>( HttpStatus.OK );
        else return new ResponseEntity<>( HttpStatus.BAD_REQUEST );


    }



}
