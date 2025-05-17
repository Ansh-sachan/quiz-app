import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { Home } from './pages/Home'
import { Quizzes } from './pages/Quizzes';

function App() {
  return (
    <>
    <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/quizzes' element={<Quizzes />} />
    </Routes>
    </Router>
    </>
  )
}

export default App
