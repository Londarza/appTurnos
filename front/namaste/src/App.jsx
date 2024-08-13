
import './App.css'
import NavBar from './components/navBar/NavBar.jsx'
import Footer from './components/footer/Footer.jsx'
//mport Home from './views/Home'
//import MisTurnos from './views/MisTurnos/MisTurnos.jsx'
//import Register from './views/register/Register.jsx'
import Login from './views/Loguin/Loguin.jsx'
function App() {
  

  return (
    <>
    
      <NavBar/>
      <div className="main-content">
        {/* <Home/> */}
        {/* <MisTurnos/> */}
        {/* <Register/> */}
        <Login/>
      </div>
      <Footer/>
    </>
  )
}

export default App
