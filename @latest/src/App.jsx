import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <Nav/>
      <Footer/>
      <div className='container'>
        <Routes>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/About' element={<About/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
