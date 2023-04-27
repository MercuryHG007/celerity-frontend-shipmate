import Navbar from "../components/navbar/Navbar"
import Hero from "../components/Hero"
import SearchBar from "../components/SearchBar"
import Services from "../components/services/Services"
import Footer from "../components/Footer"

const Home = () => {

    return (
        <div
            className='flex flex-col items-center gap-20 w-full h-full bg-[#F8F9FD] relative'
        >
            <Navbar 
                userMenu
            />
            <Hero />
            <SearchBar />
            <Services />
            <Footer />
        </div>
    )
}

export default Home