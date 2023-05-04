import React, { useEffect, useState } from 'react';
import { Button, List } from 'semantic-ui-react'
import axios from 'axios';

export default function Read() {

  const [ APIData, setAPIData ] = useState([]);

  useEffect( () => {
      axios.get(`http://localhost:8080/api/v1/questions`).then( (response)  => {
        setAPIData( response.data );
        console.log(response.data)
      })
  }, [])

	function upvoteQuestion ( questionId )  {
			console.log( questionId );
      axios.put(`http://localhost:8080/api/v1/questions/upvote`, { questionId: questionId } ).then( (response) => console.log( response ) );
  }


  return (
      <div>
        <h2>F.A.Q</h2>
        <List> {
          APIData.map( (question) => {
            return (
             <List.Item> <b>{ question.text }</b>, upvotes:{ question.upvotes } <button type="submit" onClick={ (questionId) => upvoteQuestion( question.id ) }>up</button>
                <List.List> { 
                  question.answers.map( (answer) => { 
                    return ( 
                      <List.Item> { answer.text }, upvotes:{ answer.upvotes } {/* <button>up</button> */} </List.Item>   
                    )   
                  }) 
                }
                </List.List>
             </List.Item>
            )
          })
        }
        </List>
      </div>
  )


}
