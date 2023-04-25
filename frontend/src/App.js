// import { Header } from '@madetech/frontend';
// import { Footer } from '@madetech/frontend';

import React, { useState, useRef } from 'react';
import QuestionsAndAnswersList from './QuestionsAndAnswersList';
// import '@madetech/frontend/all.scss'
import { Footer, Header, Jumbotron, SiteMap, TopBar } from '@madetech/frontend'


function App( { children} ) {

		const [questions, setQuestions] = useState( [
																									{
																										id: 1,
																										q: 'How can i ...',
																										upvotes: 1,
																										answers: ['answer 1','answer 2','answer 3'],	
																									},
																									{
																										id: 2,
																										q: 'Where are ...',
																										upvotes: 1,
																										answers: ['answer 1','answer 2','answer 3'],	
																									},
																								])
		const questionReference = useRef()

		function askAQuestion( event ){
			const question = questionReference.current.value
			if ( question === '' ) return  
			setQuestions( prevQuestions => { 
				return [...prevQuestions, { id: null, q: question, upvotes: 1, answers: [] } ]	
	   	})
			questionReference.current.value = null
		}


		function answerQ( questionId, answer ) {
			console.log( questions.find( question => question.id === questionId ), answer)
		}


		function upvoteQ( questionId ) {
			const question = questions.find( question => question.id === questionId )
			question.upvotes ++;
			console.log(question)
		}

		function downvoteQ( questionId ) {
			const question = questions.find( question => question.id === questionId )
			question.upvotes --;
			console.log(question)
		}



		return (

						<>
{/*
      <TopBar />

      <Header>
        <a href="/one" className="nav-link">
          one<br /> link
        </a>

        <a href="/two" className="nav-link">
          two<br /> link
        </a>
      </Header>
*/}
      <Jumbotron>
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 text-center my-1 faq">
              <h2>FAQ's</h2>
						<div>Total Q's: {questions.length}</div>
						<div>Total Answers: 0</div>
						<input ref={ questionReference } type="text" />
						<button onClick={ askAQuestion }> Ask A Question </button>
            </div>
          </div>
        </div>
      </Jumbotron>


						<div className="questionList">
						<QuestionsAndAnswersList 	questions={questions} 
																			answerQ={answerQ} 
																			upvoteQ={upvoteQ} 
																			downvoteQ={downvoteQ}
																			/>
						</div>
{/*
      <SiteMap />
      <Footer />
*/}
						</>

				)

}

export default App;
