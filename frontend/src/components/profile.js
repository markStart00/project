import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { GridRow, GridCol, InsetText, Heading, ListItem, UnorderedList } from 'govuk-react'
import a from './projects/1.png'
import b from './projects/2.png'
import c from './projects/3.png'
import d from './projects/4.png'
import e from './projects/5.png'
import f from './projects/6.png'
import g from './projects/7.png'
import h from './projects/8.png'
import i from './projects/9.png'
import j from './projects/10.png'
import k from './projects/11.png'

import slack from './icons/slack.png'
import link from './icons/link.png'
import gmail from './icons/gmail.png'


export default function Profile() {

    return (
<>
<div className="images">

          <Heading size="LARGE">
           Profile 
          </Heading>

{/*
				<UnorderedList listStyleType="none">
					<ListItem>
						<img className="icon" src={ slack  } /> slack
					</ListItem>
					<ListItem>
						<img className="icon" src={ link } /> slack
					</ListItem>
					<ListItem>
						<img className="icon" src={ gmail  } /> slack
					</ListItem>
				</UnorderedList>
	*/}							

				<GridRow>
					<GridCol setWidth="one-third">
						<div>
							<a href="http://13.41.188.13/worldmap" target="_Blank"> <img className="projectPng" src={ k } /> </a>
						</div>
					</GridCol>
					<GridCol setWidth="one-third">
						<div>
							 <a href="http://13.41.188.13/worldmap" target="_Blank"> <img className="projectPng" src={ j } /> </a>
						</div>
					</GridCol>
					<GridCol setWidth="one-third">
						<div>
						 <a href="http://13.41.188.13/globe" target="_Blank">	<img className="projectPng" src={ i } /> </a>
						</div>
					</GridCol>
				</GridRow>

				<GridRow>
					<GridCol setWidth="one-third">
						<div>
							<a href="http://13.41.188.13/tables" target="_Blank">	 <img className="projectPng" src={ h } />  </a>
						</div>
					</GridCol>
					<GridCol setWidth="one-third">
						<div>
						 <a href="http://markstart.s3-website.eu-west-2.amazonaws.com/" target="_Blank">	<img className="projectPng" src={ g } /> </a>
						</div>
					</GridCol>
					<GridCol setWidth="one-third">
						<div>
						 <a href="https://www.youtube.com/@markstart00/videos" target="_Blank">	<img className="projectPng" src={ b } />  </a>
						</div>
					</GridCol>
				</GridRow>

				<GridRow>
					<GridCol setWidth="one-third">
						<div>
						 <a href="http://markstart.s3-website.eu-west-2.amazonaws.com/" target="_Blank"> 		<img className="projectPng" src={ d } />  </a>
						</div>
					</GridCol>
					<GridCol setWidth="one-third">
						<div>
							<a href="http://markstart.s3-website.eu-west-2.amazonaws.com/" target="_Blank"> 		<img className="projectPng" src={ f } />  </a>
						</div>
					</GridCol>
					<GridCol setWidth="one-third">
						<div>
						<a href="https://www.youtube.com/@markstart00/videos" target="_Blank"> 	<img className="projectPng" src={ a } />  </a>
						</div>
					</GridCol>
				</GridRow>



</div>
</>
    )


}
