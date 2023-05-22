import React, { useState } from 'react';
import { Button, Checkbox, Form} from 'semantic-ui-react'
import { Heading, InsetText, GridRow, GridCol } from 'govuk-react'
import data  from '../data.png'
import alpha from '../alpha.png'
import beta from '../beta.png'

export default function Architecture() {

    return (
					<>
					<div className="">

				<GridRow className="content">
					<GridCol setWidth="one-half">
				 <Heading size="LARGE" className="heading">
									Architecture	
					</Heading>
					</GridCol>
					<GridCol setWidth="one-half">

						<a href="https://miro.com/app/board/uXjVMTPEfGw=/" target="_Blank"> <img className="diagram" src={ alpha } />  </a>
						<a href="https://miro.com/app/board/uXjVMTPEfGw=/" target="_Blank"> <img className="diagram" src={ beta } />  </a>

					</GridCol>
				</GridRow>


    					</div>


					</>
    )


}
