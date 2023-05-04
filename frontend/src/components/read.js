import React, { useEffect, useState } from 'react';
import { Button, List, Form } from 'semantic-ui-react'
import axios from 'axios';

export default function Read() {

  const [ APIData, setAPIData ] = useState([]);
	const [ question, setQuestion ] = useState('');
	const [ answer, setAnswer ] = useState('');

  useEffect( () => {
      axios.get(`http://localhost:8080/api/v1/questions`).then( (response)  => {
        setAPIData( response.data );
        console.log(response.data)
      })
  }, [])

	function upvoteQuestion ( questionId )  {
			console.log( questionId );
      axios.put(`http://localhost:8080/api/v1/questions/upvote`, { questionId: questionId } ).then( (response) => console.log( response ));
  }

	function upvoteAnswer( answerId ) {
			console.log( answerId );
      axios.put(`http://localhost:8081/api/v1/answers/upvote`, { answerId: answerId } ).then( (response) => console.log( response ));
	}

	function askAQuestion( ) {
		console.log( question );
		axios.post(`http://localhost:8080/api/v1/questions/post`, { text: question } ).then( (response) => console.log( response ) );
	}

	function answerQuestion( questionId ) {
		console.log( answer );
		console.log( questionId );
		axios.post(`http://localhost:8081/api/v1/answers/post`, { text: answer, questionId: questionId } ).then( (response) => console.log( response ) );
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
        <h2>F.A.Q</h2>
        <div className="list"> {
          APIData.map( (question) => {
            return (
             <div className="question"> <b>{ question.text }</b>, upvotes:{ question.upvotes } <button type="submit" onClick={ (questionId) => upvoteQuestion( question.id ) }>up</button>
                <div> { 
                  question.answers.map( (answer) => { 
                    return ( 
                      <div className="answer"> { answer.text } -- upvotes:{ answer.upvotes } <button type="submit" onClick={ (answerId) => upvoteAnswer( answer.id ) } >up</button>  

											</div>   

                    )   
                  }) 
                }
                </div>

        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Answer</label>
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
