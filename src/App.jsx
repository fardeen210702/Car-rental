import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import SinglePage from './pages/SinglePage'
import VehicleModels from './pages/VehicleModels'
import Error from './pages/Error'
import Header from './components/Header'
import './App.css'
import '../src/responsiveness/phone.css'
import Footer from './components/Footer'

function App() {
  return (
    <div className="MainApp">

    <div className='App'>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/singlepage/:id' element={<SinglePage/>}/>
        <Route path='/vehiclemodels' element={<VehicleModels/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      <Footer/>
    </Router>
      
    </div>
    </div>
  )
}

export default App