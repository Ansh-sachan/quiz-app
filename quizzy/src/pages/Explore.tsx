import { Header } from "../components/home/Header"

export const Explore = () => {
  return (
        <div className="relative min-h-screen bg-[var(--bg-color] overflow-hidden">
          <Header />
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-4xl font-bold mb-4">🧠 Welcome to the Quiz App!</h1>
        {/* Quiz UI goes here */}
      </div>
    </div>
  )
}
