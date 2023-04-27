import './App.css';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div
      className='flex flex-col items-center gap-28 w-[100vw] h-[100vh] bg-[#F8F9FD]'
    >
      <Navbar />
      <Hero />
      <SearchBar />
    </div>
  );
}

export default App;
