
import FeaturedQuizzes from "../components/home/FeaturedQuizzes"
import { Header } from "../components/home/Header"
import { Hero } from "../components/home/Hero"


export const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <FeaturedQuizzes />
    </div>
  )
}
