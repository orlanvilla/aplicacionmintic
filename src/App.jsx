import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/home/Home'

function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/home' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
