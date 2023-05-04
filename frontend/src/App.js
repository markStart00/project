import './App.css';
import Create from './components/create';
import Read from './components/read';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
				return (
												<BrowserRouter>
												<div className="main">
												<h2 className="main-header"> Project </h2>
												<div>

												<Routes>
												{/* <Route path="/create" element={<Create />} /> */}
							          <Route path='/' element={<Read /> } />
												</Routes>

												</div>
												</div>
												</BrowserRouter>
							 );
}

export default App;
