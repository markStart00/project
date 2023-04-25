import React, { useRef } from 'react';


export default function Question( { question, answers, answerQ, upvoteQ, downvoteQ } ) {

	const answerReference = useRef()	
	const upvotes = question.upvotes

	function handleAnswerQClick( event ) {
		const answer = answerReference.current.value
		if ( answer === '' ) return
		answerQ( question.id, answer )
		answerReference.current.value = null
	}

	function handleUpvoteQClick() {
		upvoteQ( question.id )
	}

	function handleDownvoteQClick() {
		downvoteQ( question.id )
	} 

	return (

			<div className="question">
			<h2>{ question.q }</h2>
			<p>{ answers }</p>
			<input ref = { answerReference } type="text" />
			<button onClick = { handleAnswerQClick } > Answer Q </button>
			<button onClick = { handleUpvoteQClick } > upvote Q </button>
			<button onClick = { handleDownvoteQClick } > downvote Q </button>
			<p>upvotes: { upvotes }</p>
			<p>id: { question.id } </p>
			</div>






			)





}
