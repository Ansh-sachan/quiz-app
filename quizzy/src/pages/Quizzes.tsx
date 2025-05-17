import { useEffect } from "react"
import AllQuizzes from "../components/explore/AllQuizzes"
import { Header } from "../components/home/Header"
import { useQuizStore } from "../store/quizStore"

export const Quizzes = () => {
  const {resetQuiz} = useQuizStore()
  useEffect(()=>{
    resetQuiz()
  },[])
  return (
    <div>
        <Header />
        <AllQuizzes />
    </div>
  )
}
