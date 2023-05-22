import React, { useState } from 'react';
import { Button, Checkbox, Form} from 'semantic-ui-react'
import { Heading, InsetText, GridRow, GridCol } from 'govuk-react'
import devops from '../devops.png'

export default function Devops() {

    return (
						<>

					<div className="page">


				<GridRow className="content">
					<GridCol setWidth="one-half">
				 <Heading size="LARGE">
										Devops	
									</Heading>
										<InsetText>
											Learn Devops with public sector projects:
									 	</InsetText>
					</GridCol>
					<GridCol setWidth="one-half">

						<a href="https://madetech.github.io/ops-cookbook/docs/intro" target="_Blank"> <img className="imageLink" src={ devops } />  </a>

					</GridCol>
				</GridRow>


    					</div>


					</>
    )


}
