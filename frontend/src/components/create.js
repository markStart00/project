import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';

export default function Create() {

    const [question, setQuestion] = useState('');

		const postData = () => {
			axios.post(`http://localhost:8080/api/v1/questions/post`, { text: question } ).then( (response) => console.log( response ) );
		}

    return (

        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Ask a Question</label>
										<input placeholder='Ask a Question' onChange={(e) => setQuestion(e.target.value)}/>
                </Form.Field>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
    )


}
