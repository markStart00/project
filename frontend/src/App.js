import './App.css';
import Home from './components/home';
import QA from './components/qa';
import Catalogue from './components/catalogue';
import Project from './components/project';
import MadeTech from './components/madetech';
import Government from './components/government';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Button, ButtonArrow, Footer, TopNav, GridRow, GridCol, PhaseBanner } from 'govuk-react'

function App() {
				return (
												<>
												<a href="/"> 
													<TopNav>
								      			<a href="/project"> <Button icon={ <ButtonArrow /> }> About the Project </Button> </a>
								      			<a href="/madetech"> <Button icon={ <ButtonArrow /> }> Improve Skills </Button> </a>
													</TopNav>  
												</a>
												

                        <BrowserRouter>
                          <div className="main">
                            <div>
                              <Routes>
                                <Route path='/' element={<Home /> } />
                                <Route path="/qa" element={<QA />} />
                                <Route path="/cataloge" element={<Catalogue />} />
                                <Route path="/project" element={<Project />} /> 
                                <Route path="/madetech" element={<MadeTech />} /> 
                                <Route path="/government" element={<Government />} /> 
                              </Routes>
                            </div>
                          </div>
                        </BrowserRouter>



												<PhaseBanner level="beta" className="beta"> </PhaseBanner>
		<Footer meta={<Footer.MetaCustom> By {' '}

													<Footer.Link 
														href="/https://app.slack.com/client/T0B0XJCTC/CUXLL8ECX/rimeto_profile/U04U7036KNV"> Mark Start 
													</Footer.Link> <span className="disclosure" >**This is not a Government website !**</span>
												</Footer.MetaCustom>} />



												</>

							 );
}

export default App;
