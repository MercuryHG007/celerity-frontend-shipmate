import './App.css';
import Hero from './components/Hero';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div
      className='flex flex-col items-center gap-6 w-[100vw] h-[100vh] bg-[#F8F9FD]'
    >
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
