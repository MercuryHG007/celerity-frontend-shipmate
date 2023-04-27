import './App.css';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import Services from './components/services/Services';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div
      className='flex flex-col items-center gap-20 w-full h-full bg-[#F8F9FD] relative'
    >
      <Navbar />
      <Hero />
      <SearchBar />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
