import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { Home } from './pages/Home'
import { Quizzes } from './pages/Quizzes';
import { Quiz } from './pages/Quiz';
import { Result } from './pages/Result';

function App() {
  return (
    <>
    <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/quizzes' element={<Quizzes />} />
      <Route path='/quiz/:id' element={<Quiz />} />
      <Route path='/quiz/:id/result' element={<Result />} />
    </Routes>
    </Router>
    </>
  )
}

export default App
