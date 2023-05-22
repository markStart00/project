import React, { useEffect, useState } from 'react';
import { List, Form, Icon, Label, Grid, Segment } from 'semantic-ui-react'
import { Button, GridRow, GridCol } from 'govuk-react';
import axios from 'axios';

export default function QA() {

  const [ APIData, setAPIData ] = useState([]);
	const [ question, setQuestion ] = useState('');
	const [ answer, setAnswer ] = useState('');

//	const questionsBaseURL = "http://16.16.143.26:8080/api/v1/questions"; 
//	const answersBaseURL = "http://13.53.135.15:8081/api/v1/answers";
	const questionsBaseURL = "http://localhost:8080/api/v1/questions";
	const answersBaseURL = "http://localhost:8081/api/v1/answers";

  useEffect( () => {
      axios.get( questionsBaseURL ).then( (response)  => {
        setAPIData( response.data );
        console.log(response.data)
      })
  }, [])

	function upvoteQuestion ( questionId )  {
      axios.put( questionsBaseURL + `/upvote`, { questionId: questionId } ).then( (response) => {
							
			});
  }

	function upvoteAnswer( answerId ) {
      axios.put( answersBaseURL + `/upvote`, { answerId: answerId } ).then( (response) => { 
				if (response.status == 200 )  {
					console.log( APIData );
					console.log("success")
				} 
			});
	}

	function askAQuestion( ) {
		console.log( question );
		axios.post( questionsBaseURL + `/post`, { text: question } ).then( (response) => console.log( response ) );
	}

	function answerQuestion( questionId ) {
		console.log( answer );
		console.log( questionId );
		axios.post( answersBaseURL + `/post`, { text: answer, questionId: questionId } ).then( (response) => console.log( response ) );
	}

  return (
			<>
			<div className="qa">
        <div className="askQuestion">
            <Form>
                <Form.Field>
                    <label className="askQuestionLabel"> Ask a Question</label>
                    <input placeholder='Ask a Question' onChange={(e) => setQuestion(e.target.value)}/>
                </Form.Field>
                <Button onClick={ askAQuestion } type='submit'>Submit</Button>
            </Form>

        </div>

      <div>
				<div className="heading">
        	<h2> FAQ's </h2>
				</div>
        <div className="list"> {
          APIData.map( (question) => {
            return (
             <div className="question"> 

							<div className="questionHeader">
												<GridRow>
  												<GridCol setWidth="two-thirds">
    												<div>		
															<h3 className="questionText">{ question.text } </h3> 
														</div>
  												</GridCol>
  												<GridCol setWidth="one-third">
   	 												<div>
															<div> { question.upvotes  } Likes </div>
																<Button buttonColour="#1d70b8" type="submit" onClick={ (questionId) => upvoteQuestion( question.id ) }>  Like </Button>
    												</div>
  												</GridCol>
												</GridRow>
							</div>
				
                <div> { 
                  question.answers.map( (answer) => { 
                    return ( 
                      <div className="answer"> 
												<GridRow>
  												<GridCol setWidth="two-thirds">
    												<div>		
															<h4 className="answerText"> { answer.text } </h4>
    												</div>
  												</GridCol>
  												<GridCol setWidth="one-third">
   	 												<div>

															<div className="likes"> { answer.upvotes } Likes </div>
															<Button buttonColour="#1d70b8" type="submit" onClick={ (answerId) => upvoteAnswer( answer.id ) }>  Like </Button>

    												</div>
  												</GridCol>
												</GridRow>


											</div>   
                    )   
                  }) 
                }
             		</div>

        				<div>
            			<Form className="answerQuestion">
                		<Form.Field>
                    	<label><h4>Answer</h4></label>
                    	<input placeholder='Answer' onChange={(e) => setAnswer(e.target.value)}/>
                		</Form.Field>
                		<Button type="submit" onClick={ (questionId) => answerQuestion( question.id ) }>Submit</Button>
            			</Form>
        				</div>

             </div>
            )
          })
        }
        </div>
      </div>
      </div>
		</>
  )


}
