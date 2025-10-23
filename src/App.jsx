import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/home/home'
import VariableDeclaration from './components/variableDeclaration/variableDeclaration'

function App() {

  return (
    <>
      <Router >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/variables' element={<VariableDeclaration />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
