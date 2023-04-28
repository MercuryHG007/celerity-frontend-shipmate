import React from 'react'
import Navbar from '../components/navbar/Navbar'
import ProgressBar from '../components/progressBar/ProgressBar'
import SearchBar from '../components/SearchBar'
import Button from '../components/Button'
import QuoteMenu from '../components/quote/QuoteMenu'
import OptionMenu from '../components/quote/OptionMenu'
import QuoteCard from '../components/quote/QuoteCard'

function Quote() {
    return (
        <div
            className='flex flex-col items-center gap-12 w-full h-full bg-[#F8F9FD] pb-20'
        >
            <Navbar/>
            <div
                className='flex flex-row items-baseline'
            >
                <Button
                    label="Load"
                    outline
                />
                <ProgressBar active />
            </div>
            <SearchBar quote />
            <hr className="border-t-[3px] w-full" />
            <div
                className='w-full flex flex-row'
            >
                <div
                    className='w-[25%]'
                >
                    <QuoteMenu />
                </div>
                <div
                    className='flex flex-col w-[50%] ml-16 gap-8'
                >
                    <OptionMenu selected/>
                    <QuoteCard />
                    <QuoteCard type='Eco' />
                    <QuoteCard rating={4} />
                </div>

                

            </div>
        </div>
    )
}

export default Quote