import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { Heading, InsetText, OrderedList, ListItem, Tag, Table } from 'govuk-react'

export default function Project() {

    return (
					<>
					<div className="page">
						<div className="about">
						<Heading size="LARGE">
							Project
						</Heading>

            <Heading size="MEDIUM">
							Project Mandate
            </Heading>

				<Table className="infoTable">
					<Table.Row>
					</Table.Row>
					<Table.Row>
						<Table.Cell>
							<Tag tint="TURQUOISE">
								Practice Skills:
							</Tag>
						</Table.Cell>
						<Table.Cell>
							Agile and Kanban development, Pair programming, TDD, Archectectual design 
						</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell>
							<Tag tint="BLUE">
								Deliver:
							</Tag>
						</Table.Cell>
						<Table.Cell>
							A prototype, an Alpha and a production quality Beta (frontend, backend, cloud)
						</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell>
							<Tag tint="PURPLE">
							 Quality: 
							</Tag>
						</Table.Cell>
						<Table.Cell>
							Business and user value
						</Table.Cell>

					</Table.Row>
				</Table>


				<Heading size="MEDIUM">
						Business Case	
				</Heading>


        <div className="infoTable">
              <Tag tint="TURQUOISE">
								a
              </Tag>
              <Tag tint="BLUE">
								b
              </Tag>
              <Tag tint="PURPLE">
								c
              </Tag>
        </div>


      			</div>
      		</div>


					</>
    )


}
