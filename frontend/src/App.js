import './App.css';
import Home from './components/home';
import QA from './components/qa';
import Catalogue from './components/catalogue';
import Project from './components/project';
import MadeTech from './components/madetech';
import Government from './components/government';
import Data from './components/data';
import Profile from './components/profile';
import Architecture from './components/architecture';
import Devops from './components/devops';
import Security from './components/security';
import profilePic from './pic.jpeg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Button, ButtonArrow, Footer, TopNav, GridRow, GridCol, PhaseBanner, WarningText } from 'govuk-react'

function App() {
				return (
												<>
												<a href="/"> 
													<TopNav>
								      			<a href="/project"> <Button icon={ <ButtonArrow /> }> About the Project </Button> </a>
								      			<a href="/madetech"> <Button icon={ <ButtonArrow /> }> Improve Skills </Button> </a>
								      			<a href="/profile"> <Button buttonColour="#1d70b8" icon={ <ButtonArrow /> }> Profile </Button> </a>
								      			<a href="/profile"> <img className="profilePic" src={profilePic} /> </a>
								      			<a href="/data"> <Button icon={ <ButtonArrow /> }> Data </Button> </a>
								      			<a href="/security"> <Button icon={ <ButtonArrow /> }> Security </Button> </a>
								      			<a href="/devops"> <Button icon={ <ButtonArrow /> }> DevOps </Button> </a>
								      			<a href="/architecture"> <Button icon={ <ButtonArrow /> }> Architecture </Button> </a>
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
                                <Route path="/data" element={<Data />} /> 
                                <Route path="/architecture" element={<Architecture />} /> 
                                <Route path="/security" element={<Security />} /> 
                                <Route path="/devops" element={<Devops />} /> 
                                <Route path="/profile" element={<Profile />} /> 
                              </Routes>
                            </div>
                          </div>
                        </BrowserRouter>



												<PhaseBanner level="beta" className="beta"> </PhaseBanner>
												<Footer meta={<Footer.MetaCustom> {' '}

													<WarningText> <span className="disclosure" >** </span> This is not a Government website ! <span className="disclosure" > ** < /span>  </WarningText>
												</Footer.MetaCustom>} />



												</>

							 );
}

export default App;
