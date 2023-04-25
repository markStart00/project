import React from 'react';
import { Header } from '@madetech/frontend';


export default function Top( { children } ) {

				return (

												<div>
												<Header
												logoHref='/'
												logoText='Learn Tech'
												>
												<a href='/' className='nav-link'>
												Getting Started
												</a>

												<a href='/help' className='nav-link'>
												Ask for Help
												</a>
												</Header>

												{children}
												</div>
							 )


}
