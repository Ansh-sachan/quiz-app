import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { Home } from './pages/Home'
import { Quizzes } from './pages/Quizzes';
import { Quiz } from './pages/Quiz';

function App() {
  return (
    <>
    <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/quizzes' element={<Quizzes />} />
      <Route path='/quiz/:id' element={<Quiz />} />
    </Routes>
    </Router>
    </>
  )
}

export default App
