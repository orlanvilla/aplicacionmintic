import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Home from './components/home/Home'
import Login from './components/login/Login';

function App() {
  const [logueado, setLogueado] = useState(false);

  return (
    <div className="App">
    {logueado?
      <BrowserRouter>
        <Routes>
          <Route exact path='/home' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
      :
      <BrowserRouter>
        <Routes>
          <Route exact path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>   
    }
     
    </div>
  )
}

export default App
