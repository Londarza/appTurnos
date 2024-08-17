
import './App.css'
import NavBar from './components/navBar/NavBar.jsx'
import Footer from './components/footer/Footer.jsx'
import Home from './views/Home'
import MisTurnos from './views/MisTurnos/MisTurnos.jsx'
import Register from './views/register/Register.jsx'
import Login from './views/Loguin/Loguin.jsx'
import {Route,Routes} from 'react-router-dom'
import NotFound from './components/PageNoFound/NotFound.jsx'
function App() {
  

  return (
    <>
    
      <NavBar/>
      <div className="main-content">
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/appointments' element={<MisTurnos/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/loguin' element={<Login/>}/>  
        {/* <Route path='/' element={}/>   */}
        <Route path="*" element={<NotFound />} />
        </Routes>
        
      </div>
      <Footer/>
    </>
  )
}

export default App
