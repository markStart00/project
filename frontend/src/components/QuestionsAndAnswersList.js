import React from 'react'
import Question from './Question'
import Answer from './Answer'

export default function QuestionsAndAnswersList( { questions, answerQ, upvoteQ, downvoteQ }  ) {

	return (
			questions.map( question => {

				const answers = question.answers.map( answer => {
					return <Answer	answer = { answer } />
				})

				return <Question 	key = { question.id } 
													question = { question } 
													answers = { answers }
													answerQ = { answerQ } 
													upvoteQ = { upvoteQ } 
													downvoteQ = { downvoteQ }
													/>
	
													

				})
	)


}





