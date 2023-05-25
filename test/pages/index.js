import { useState } from 'react';


function Header( { title } ) {
	return <h1> { title ? title : 'default title' } </h1>;
}

export default function HomePage() {
	const projects = ['gds', 'forestry', 'aerospace'];
	const [ bids, setBids ] = useState( 0 );

	function handleClick() {
		console.log("click click");
		setBids( bids + 1 )
	}

	return 	<div>
					<Header title="hello" />
					<ul> { projects.map( (project) => ( <li key={project}> { project } </li> ) ) } </ul>
					<button onClick={ handleClick } > bids: ( { bids } ) </button>
					</div>;

}

