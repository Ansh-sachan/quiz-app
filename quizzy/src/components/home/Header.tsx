import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className='flex justify-between items-center px-4 py-6 bg-[var(--surface-color)] m-2 shadow-2xl shadow-blue-400 rounded-2xl fixed top-0 left-0 right-0 z-50'>
      <div className='flex items-center'>
        <Link to={"/"}>
          <h1 className='text-4xl font-bold ml-4 text-[var(--primary-color)]'>
            Quizzy
          </h1>
        </Link>
      </div>
      {/* <button
        className='text-primary hover:text-primary-hover transition-colors'
        type='button'
      >
        Toggle Dark Mode
      </button> */}
    </header>
  );
};
