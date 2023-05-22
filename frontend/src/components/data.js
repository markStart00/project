import React, { useState } from 'react';
import { Button, Checkbox, Form} from 'semantic-ui-react'
import { Heading, InsetText, GridRow, GridCol, Table, OrderedList, ListItem } from 'govuk-react'
import data  from '../data.png'

import react from './icons/react.svg'
import type from './icons/type.svg'
import next from './icons/next.svg'
import js from './icons/js.svg'

import csharp from './icons/csharp.svg'
import java from './icons/java.svg'
import spring from './icons/spring.svg'
import ruby from './icons/ruby.svg'
import rails from './icons/rails.svg'
import python from './icons/python.svg'

import postgres from './icons/postgres.svg'
import cosmo from './icons/cosmo.svg'
import mysql from './icons/mysql.svg'
import aws from './icons/aws.svg'

import azure from './icons/azure.svg'
import uk from './icons/uk.svg'

import circle from './icons/circle.svg'
import github from './icons/github.svg'
import gitlab from './icons/gitlab.svg'

import cucumber from './icons/cucumber.svg'
import cyprus from './icons/cyprus.svg'
import jest from './icons/jest.svg'


export default function Data() {

    return (
						<>

					<div className="page">


				<GridRow className="content">
					<GridCol setWidth="one-half">
				 <Heading size="LARGE">
									Data
									</Heading>
										<InsetText>
											Learn Data for public sector projects:
									 	</InsetText>
					</GridCol>
					<GridCol setWidth="one-half">

						<a href="https://sites.google.com/madetech.com/data-capability/home" target="_Blank"> <img className="imageLink" src={ data } />  </a>

					</GridCol>
				</GridRow>

		</div>

<div className="tables">

	<Heading size="MEDIUM">
		Top programming languages 
	</Heading>

	<InsetText>
 	The most frequently used programming languages and frameworks used in previous Made Tech public sector projects. <a href="https://airtable.com/appvySQ6qDwqcxLmt/tblhjjZSgBKI1qZR9/viwRgnrPsdPVIDl9u?blocks=hide" target="_Blank"> Source </a>: Airtable.
	</InsetText>


<GridRow>
  <GridCol setWidth="one-third">
    <div>

	<Heading size="MEDIUM">
		Frontend
	</Heading>
	<OrderedList listStyleType="" className="iconList">
  	<ListItem>
			<img className="icon" src={ js  } />   JavaScript
  	</ListItem>
  	<ListItem>
			<img className="icon" src={ type  } /> Typescript
  	</ListItem>
  	<ListItem>
			<img className="icon" src={ react  } /> ReactJs
  	</ListItem>
  	<ListItem>
			<img className="icon" src={ next } /> NextJs 
  	</ListItem>
	</OrderedList>

    </div>
  </GridCol>
  <GridCol setWidth="one-third">
    <div>

	<Heading size="MEDIUM">
		Backend	
	</Heading>
	<OrderedList listStyleType="" className="iconList">
  	<ListItem>
			<img className="icon" src={ csharp } />  C# 
  	</ListItem>
  	<ListItem>
		<img className="icon" src={ spring} />        Java + Spring 
  	</ListItem>
  	<ListItem>
			<img className="icon" src={ ruby } />    Ruby + Rails
  	</ListItem>
  	<ListItem>
			<img className="icon" src={ python } /> Python
  	</ListItem>
	</OrderedList>


    </div>
  </GridCol>
  <GridCol setWidth="one-third">
    <div>

  <Heading size="MEDIUM">
   DB 
  </Heading>
  <OrderedList listStyleType="" className="iconList">
    <ListItem>
      <img className="icon" src={ postgres } />  PostgreSQL
    </ListItem>
    <ListItem>
    <img className="icon" src={ cosmo } />        Cosmo               
    </ListItem>
    <ListItem>
      <img className="icon" src={ mysql } />    MySql
    </ListItem>
    <ListItem>
      <img className="icon" src={ aws } /> Aws
    </ListItem>
  </OrderedList>

    </div>
  </GridCol>
</GridRow>

<div className="iconRow">
<GridRow>
  <GridCol setWidth="one-third">
    <div>

  <Heading size="MEDIUM">
		Cloud 
  </Heading>
  <OrderedList listStyleType="" className="iconList">
    <ListItem>
      <img className="icon" src={ aws } />  Aws
    </ListItem>
    <ListItem>
    <img className="icon" src={ azure } />  Azure       
    </ListItem>
    <ListItem>
      <img className="icon" src={ uk  } /> GovUK PaaS
    </ListItem>
    <ListItem>
    </ListItem>
  </OrderedList>

    </div>
  </GridCol>
  <GridCol setWidth="one-third">
    <div>

  <Heading size="MEDIUM">
  	CI/CD
  </Heading>
  <OrderedList listStyleType="" className="iconList">
    <ListItem>
      <img className="icon" src={ github } />  Github Actions
    </ListItem>
    <ListItem>
    <img className="icon" src={ circle  } />  CircleCI    
    </ListItem>
    <ListItem>
      <img className="icon" src={ azure } /> Azure DevOps
    </ListItem>
    <ListItem>
      <img className="icon" src={ gitlab } /> GitLabCI 
    </ListItem>
  </OrderedList>

    </div>
  </GridCol>
  <GridCol setWidth="one-third">
    <div>

  <Heading size="MEDIUM">
		Testing
  </Heading>
  <OrderedList listStyleType="" className="iconList">
    <ListItem>
      <img className="icon" src={ jest  } />  Jest
    </ListItem>
    <ListItem>
    <img className="icon" src={ cyprus } />  Cyprus
    </ListItem>
    <ListItem>
      <img className="icon" src={ csharp } /> xUnit
    </ListItem>
    <ListItem>
      <img className="icon" src={ cucumber } /> Cucumber
    </ListItem>
  </OrderedList>


    </div>
  </GridCol>

</GridRow>

</div>

</div>





					</>
    )


}
