import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'

export default function MadeTech() {

    return (
						<>
				<div className="page">
        <div>
          <h2> Learn MadeTech: </h2>

					<h3> make a road map of how to learn the public sector stack  </h3>

          <ul>
            <li> <a href="https://drive.google.com/drive/shared-drives" target="_blank"> Knowledge base</a> (internal) </li>
            <li> <a href="https://github.com/madetech/handbook" target="_blank"> Handbook </a> (external) </li>
            <li> <a href="https://sites.google.com/madetech.com/signpost/home/software-engineering/technical-architecture?pli=1" target="_blank" > Architecture </a> </li>
            <li> <a href="https://madetech.github.io/ops-cookbook/docs/intro" target="_blank"> DevOps </a> </li>
            <li> <a href="https://github.com/madetech/clean-architecture" target="_blank"> Clean </a> </li>
            <li> <a href="https://github.com/madetech/productionisation/blob/master/PRODUCTIONISATION.md" target="_blank"> Production Quality checklist </a> </li>
            <li> <a href="https://madetech.securityjourney.com/" target="_blank"> Security </a> </li>
            <li> <a href="https://sites.google.com/madetech.com/data-capability/home" target="_blank"> Data </a> </li>
            <li> <a href="https://airtable.com/appvySQ6qDwqcxLmt/tblhjjZSgBKI1qZR9/viwq5wslL9Kkn39hT?blocks=hide" target="_blank"> AirTable </a> (top programming languages) </li>
            <li> <a href="https://frontend.madetech.com/" target="_blank"> frontend kit </a> (express) </li>
          </ul>
        </div>

        <div>
          <h2> Learn Goverment:  </h2>
          <ul>
            <li> <a href="https://www.gov.uk/guidance/government-design-principles" target="_blank">  Government design principles </a>   </li>
            <li> <a href="https://www.api.gov.uk/index/#index" target="_blank"> API Catalogue </a> ( public government data API's ) </li>
            <li> <a href="https://design-system.service.gov.uk/get-started/" target="_blank">  Government design system </a>   </li>
            <li> <a href="https://prototype-kit.service.gov.uk/docs/" target="_blank"> GDS prototype kit </a> ( quickly prototype a goverment looking website ) </li>
            <li> <a href="https://design-system.service.gov.uk/components/" target="_blank"> GDS components </a>   </li>
            <li> <a href=" https://github.com/govuk-react/govuk-react  " target="_blank">  GDS components </a> ( react )  </li>
            <li> <a href=" https://not-gov.uk/components " target="_blank">  notGovUk GDS components </a> ( react )  </li>
          </ul>
        </div>

        <div>
          <li> <a href="https://madetech.my.salesforce.com/?ec=301&startURL=%2Fvisualforce%2Fsession%3Furl%3Dhttps%253A%252F%252Fmadetech.lightning.force.com%252Flightning%252Fr%252FReport%252F00O8e000001BBAuEAO%252Fview%253FqueryScope%253DuserFolders" target="_blank"> SalesForce data </a> </li>
        </div>
        </div>

						</>
    			)


}
