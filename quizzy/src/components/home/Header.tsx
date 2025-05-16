

export const Header = () => {
  return (
    <header className="flex justify-between items-center px-4 py-6 bg-[var(--surface-color)] m-2 shadow-2xl shadow-blue-400 rounded-2xl">
      <div className="flex items-center">
        <h1 className="text-4xl font-bold ml-4 text-[var(--primary-color)]">Quizzy</h1>
      </div>
      <button className="text-primary hover:text-primary-hover transition-colors" type="button">
        Toggle Dark Mode
      </button>
    </header>
  )
}
