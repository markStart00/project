import React, { useEffect, useState } from 'react';
import { Button, List, Form, Icon, Label, Grid, Segment } from 'semantic-ui-react'
import axios from 'axios';

export default function Read() {

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
			console.log( questionId );
      axios.put( questionsBaseURL + `/upvote`, { questionId: questionId } ).then( (response) => console.log( response ));
  }

	function upvoteAnswer( answerId ) {
			console.log( answerId );
      axios.put( answersBaseURL + `/upvote`, { answerId: answerId } ).then( (response) => console.log( response ));
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
        <div className="askQuestion">
            <Form className="create-form">
                <Form.Field>
                    <label>Ask a Question</label>
                    <input placeholder='Ask a Question' onChange={(e) => setQuestion(e.target.value)}/>
                </Form.Field>
                <Button onClick={ askAQuestion } type='submit'>Submit</Button>
            </Form>
        </div>

      <div>
				<div className="heading">
        	<h2>F.A.Q</h2>
				</div>
        <div className="list"> {
          APIData.map( (question) => {
            return (
             <div className="question"> 

							<div className="questionHeader">
							<Grid columns='equal' >	

							<Grid.Column width={10}>
								<h4 className="questionText">{ question.text } </h4> 
							</Grid.Column>


							<Grid.Column>
	    				<Button className="questionLikes" as='div' labelPosition='right' type="submit" onClick={ (questionId) => upvoteQuestion( question.id )   }>
      					<Button icon> <Icon name='heart' /> Like </Button> 
								<Label as='a' basic pointing='left'> { question.upvotes  } </Label> 
							</Button>
							</Grid.Column>

							</Grid>
							</div>
				
                <div> { 
                  question.answers.map( (answer) => { 
                    return ( 
                      <div className="answer"> 
												<Grid columns='equal' >	
		
												<Grid.Column width={9}>
												<div className="answerText"> { answer.text } </div>
												</Grid.Column>
											
												<Grid.Column>
	    									<Button as='div' labelPosition='right' type="submit" onClick={ (answerId) => upvoteAnswer( answer.id ) }>
      										<Button icon> <Icon name='heart' /> Like </Button> 
													<Label as='a' basic pointing='left'> { answer.upvotes  } </Label> 
												</Button>
												</Grid.Column>

												</Grid>
											</div>   
                    )   
                  }) 
                }
             		</div>

        	<div>
            <Form className="create-form">
                <Form.Field>
                    <label><h4>Answer</h4></label>
                    <input placeholder='Answer' onChange={(e) => setAnswer(e.target.value)}/>
                </Form.Field>
                {/* <Button onClick={ answerQuestion } type='submit'>Submit</Button> */}
                <Button type="submit" onClick={ (questionId) => answerQuestion( question.id ) }>Submit</Button>
            </Form>
        </div>

             </div>
            )
          })
        }
        </div>
      </div>
		</>
  )


}
