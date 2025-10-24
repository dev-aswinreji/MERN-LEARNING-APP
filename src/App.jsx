import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/home/home'
import VariableDeclaration from './components/variableDeclaration/variableDeclaration'
import FunctionDeclarations from './components/functionDeclarations/functionDeclarations'

function App() {

  return (
    <>
      <Router >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/variables' element={<VariableDeclaration />} />
          <Route path='/functions' element={<FunctionDeclarations />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
