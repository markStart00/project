import React, { Component } from 'react';
import Question from './Question'
import Answer from './Answer'

class QandAList extends Component {

	constructor( props ) {
		super( props )
		this.state = {
		}
	}

		

	answerQ( questionId, answer ) {
      console.log( this.questions.find( question => question.id === questionId ), answer)
 	}

	upvoteQ( questionId ) {
     	const question = this.questions.find( question => question.id === questionId )
      question.upvotes ++;
      console.log(question)
  }

	downvoteQ( questionId ) {
      const question = this.questions.find( question => question.id === questionId )
      question.upvotes --;
      console.log(question)
   }


	render() {

		return (
				

{/*      this.questions?.map( question => {

        const answers = question.answers.map( answer => {
          return <Answer  answer = { answer } />
        })

        return <Question  key = { question.id }
                          question = { question }
                          answers = { answers }
                          answerQ = { this.answerQ }
                          upvoteQ = { this.upvoteQ }
                          downvoteQ = { this.downvoteQ }
                          />

        })
*/}
		
		)
	}

}

export default QandAList

