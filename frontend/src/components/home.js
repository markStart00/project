import React, { useState } from 'react';
import { Button, ButtonArrow, GridRow, GridCol, InsetText, Heading, OrderedList, ListItem } from 'govuk-react'
import QA from './qa';


export default function Home() {

    return (

		<>

<div className="main">
<GridRow>
  <GridCol setWidth="two-thirds">
    <div className="leftSide">


        <div className="intro">
					<Heading size="LARGE">
						Project 
					</Heading>
					<InsetText>
						The is a 1:10ᵗʰ scale project of a real world public sector project.  
					<OrderedList className="linkList" listStyleType="square">
  						<ListItem>
								<a href="https://github.com/markStart00/project" target="_blank"> Github </a>
  						</ListItem>
 	 						<ListItem>
								<a href="https://miro.com/app/board/uXjVMTPEfGw=/" target="_blank"> Miro </a>
  						</ListItem>
  						<ListItem>
								<a href="https://trello.com/b/OzWhcdO3/trello-agile-sprint-board-project" target="_blank"> Trello </a>
  						</ListItem>
						</OrderedList>
					</InsetText>
      	</div>


        <div className="intro">
          <Heading size="MEDIUM">
            Comparison Project
          </Heading>
          <InsetText>
						The ID Evidence full scale real world project.
          <OrderedList className="linkList" listStyleType="square">
              <ListItem>
								<a href=" https://github.com/madetech/rnd-id-evidence/tree/main  " target="_blank">  Github </a>
              </ListItem>
              <ListItem>
								<a href="https://miro.com/app/board/uXjVP-sKfu4=/" target="_blank"> Miro  </a> Engineering
              </ListItem>
              <ListItem>
								<a href=" https://miro.com/app/board/uXjVOt9gYis=/?moveToWidget=3458764528442190592&cot=14  " target="_blank"> Miro </a> Design
              </ListItem>
 							 <ListItem>
								<a href=" https://github.com/madetech/rnd-id-evidence/blob/main/docs/team_practises.md " target="_blank"> Team practices </a>
              </ListItem>
            </OrderedList>
          </InsetText>
        </div>




				<div className="quickLinks">
					<h2> QuickLinks </h2>
					<ul>
						<li> <a href="https://github.com/madetech/handbook/blob/main/guides/chalet_time_policy.md" target="_blank"> Chalet Priorities </a> </li>
						<li> <a href="https://app.slack.com/client/T0B0XJCTC/C03F23K2RL0" target="_blank"> Chalet Slack # </a> </li>
						<li> <a href="https://trello.com/b/taj8yvLP/communities-improvements-backlog" target="_blank"> Challet Trello </a> </li>
						<li> <a href="https://trello.com/b/7lSGB2Xw/chalet-community-board" target="_blank"> Chalet Trello </a> Projects </li>
					</ul>
				</div>

    </div>
  </GridCol>

  <GridCol setWidth="one-third">
    <div className="main rightSide">

      <QA />

    </div>
  </GridCol>
</GridRow>
</div>


	
		</>
    )


}
