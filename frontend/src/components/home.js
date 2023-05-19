import React, { useState } from 'react';
import { Button, ButtonArrow, GridRow, GridCol } from 'govuk-react'
import QA from './qa';


export default function Home() {

    return (

		<>

<div className="main">
<GridRow>
  <GridCol setWidth="one-half">
    <div className="leftSide">



        <div>
					<h1 className="main-header"> Project </h1>
					<p> The is a 1:10ᵗʰ scale project of a real world public sector project.    </p>
      </div>

					<div>
						<ul>
							<li> <a href="https://miro.com/app/board/uXjVMTPEfGw=/" target="_blank"> Miro </a> </li>
							<li> <a href="https://trello.com/b/OzWhcdO3/trello-agile-sprint-board-project" target="_blank"> Trello </a> </li>
						</ul>
					</div>

				<div>
					<h2> Full scale real world project: </h2>
					<ul>
						<li> <a href=" https://github.com/madetech/rnd-id-evidence/tree/main  " target="_blank">  Github </a>   </li>
						<li> <a href="https://miro.com/app/board/uXjVP-sKfu4=/" target="_blank"> Miro  </a> ( engineering ) </li>
						<li> <a href=" https://miro.com/app/board/uXjVOt9gYis=/?moveToWidget=3458764528442190592&cot=14  " target="_blank"> Miro </a> ( SaaS )  </li>
						<li> <a href=" https://github.com/madetech/rnd-id-evidence/blob/main/docs/team_practises.md " target="_blank"> Team practices </a> </li>
					</ul>
				</div>


				<div>
					<h2> Chalet: </h2>
					<ul>
						<li> <a href="https://github.com/madetech/handbook/blob/main/guides/chalet_time_policy.md" target="_blank"> Chalet Priorities </a> </li>
						<li> <a href="https://app.slack.com/client/T0B0XJCTC/C03F23K2RL0" target="_blank"> Chalet slack </a> </li>
						<li> <a href="https://trello.com/b/taj8yvLP/communities-improvements-backlog" target="_blank"> Challet trello </a> </li>
						<li> <a href="https://trello.com/b/7lSGB2Xw/chalet-community-board" target="_blank"> Chalet trello </a> (projects) </li>
					</ul>
				</div>

    </div>
  </GridCol>

  <GridCol setWidth="one-half">
    <div className="main rightSide">

      <QA />

    </div>
  </GridCol>
</GridRow>
</div>


	
		</>
    )


}
