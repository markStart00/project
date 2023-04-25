import React, { useRef } from 'react';

export default function Answer( { answer } ) {

  function handleUpvoteAClick() {
		console.log( answer )		
  }

  function handleDownvoteAClick() {
		console.log( answer )		
  } 

	return (

			<div>
				<p>{ answer }</p>
      	<button onClick = { handleUpvoteAClick } > upvote A </button>
      	<button onClick = { handleDownvoteAClick } > downvote A </button>
			</div>

			)


}
