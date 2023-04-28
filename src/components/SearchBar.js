import {
    IoLocationOutline,
    IoCalendarOutline,
    IoBoatOutline,
} from 'react-icons/io5'
import {
    AiOutlineArrowRight
} from 'react-icons/ai'
import {
    CiEdit
} from 'react-icons/ci'

import { useNavigate } from 'react-router-dom'

const SearchBar = ({ quote=null }) => {
    const navigate = useNavigate()

    return (
        <div
            className="w-[90vw] flex flex-row bg-white drop-shadow-2xl rounded-2xl p-6 justify-between items-center text-[#868686] font-medium"
        >
            <div
                className='flex flex-row gap-1 items-center justify-center'
            >
                <IoLocationOutline 
                    className = "text-2xl"
                />
                {quote ? (
                    <div
                        className='text-black font-semibold'
                    >
                        Delhi, 110003
                    </div>
                ) : (
                    <input
                        className='p-3 outline-none'
                        placeholder='Origin, Port, City'
                    />
                )}

            </div>
            <div
                className='flex flex-row gap-1 items-center justify-center w-[23%]'
            >
                <IoLocationOutline
                    className = "text-2xl"
                />
                {quote ? (
                    <div
                        className='text-black font-semibold'
                    >
                        Shanghai, 200080
                    </div>
                ) : (
                    <input
                        className='p-3 outline-none'
                        placeholder='Destination, Port, City'
                    />
                )}

            </div>
            <div
                className='flex flex-row gap-1 items-center justify-center border-x-2 px-4 w-[23%]'
            >
                <IoCalendarOutline
                    className = "text-2xl"
                />
                {quote ? (
                    <div
                        className='text-black font-semibold'
                    >
                        13 April 2023
                    </div>
                ) : (
                    <input
                        className='p-3 outline-none'
                        placeholder='13 April 2023'
                    />
                )}
            </div>
            <div
                className='flex flex-row gap-1 items-center justify-center w-[23%]'
            >
                <IoBoatOutline
                    className = "text-2xl"
                />
                {quote ? (
                    <div
                        className='text-black font-semibold'
                    >
                        114.21KG - AIR
                    </div>
                ) : (
                    <input
                        className='p-3 outline-none'
                        placeholder='Load'
                    />
                )}
            </div>
            <div
                className='border-l-2 pl-4'
            >
                {quote ? (
                    <div
                        className='rounded-lg bg-white text-[#9747FF] font-bold p-1 cursor-pointer'
                    >
                        <CiEdit
                            className = "text-2xl"
                        />
                    </div>
                ) : (
                    <div
                        className='rounded-lg bg-[#9747FF] text-white font-bold p-1 cursor-pointer'
                        onClick={() => navigate('/quote')}
                    >
                        <AiOutlineArrowRight
                            className = "text-2xl"
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default SearchBar