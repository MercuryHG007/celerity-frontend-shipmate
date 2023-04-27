import './App.css';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import Services from './components/services/Services';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div
      className='flex flex-col items-center gap-20 w-full h-full bg-[#F8F9FD]'
    >
      <Navbar />
      <Hero />
      <SearchBar />
      <Services />
    </div>
  );
}

export default App;
