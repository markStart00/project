import React, { useState } from 'react';
import { Button, Checkbox, Form} from 'semantic-ui-react'
import { Heading, InsetText, GridRow, GridCol } from 'govuk-react'
import security from '../security.png'

export default function Security() {

    return (
						<>

					<div className="page">


				<GridRow className="content">
					<GridCol setWidth="one-half">
				 <Heading size="LARGE">
										Security	
									</Heading>
										<InsetText>
											Learn Security with public sector projects:
									 	</InsetText>
					</GridCol>
					<GridCol setWidth="one-half">

						<a href="https://madetech.securityjourney.com/" target="_Blank"> <img className="imageLink" src={ security } />  </a>

					</GridCol>
				</GridRow>


    					</div>


					</>
    )


}
