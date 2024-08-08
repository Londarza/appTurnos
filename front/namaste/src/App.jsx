
import './App.css'
import Home from './views/Home'
import NavBar from './components/navBar/NavBar.jsx'
import Footer from './components/footer/Footer.jsx'
import MisTurnos from './views/MisTurnos/MisTurnos.jsx'
function App() {
  

  return (
    <>
    
      <NavBar/>
      <div className="main-content">
        {/* <Home/> */}
        <MisTurnos/>
      </div>
      <Footer/>
    </>
  )
}

export default App
