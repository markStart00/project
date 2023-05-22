import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { Heading } from 'govuk-react'
import alpha from '../alpha.png'
import beta from '../beta.png'

export default function Architecture() {

    return (
					<>
						<div className="diagrams">
						<Heading size="LARGE">
							Architecture
            </Heading>

						<a href="https://miro.com/app/board/uXjVMTPEfGw=/" target="_Blank"> <img className="diagram" src={ alpha } />  </a>
						<a href="https://miro.com/app/board/uXjVMTPEfGw=/" target="_Blank"> <img className="diagram" src={ beta } />  </a>
						</div>
					</>
    )


}
