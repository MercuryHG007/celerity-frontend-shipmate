import './summary.css'

import {
    GiAirplaneDeparture
} from 'react-icons/gi'
import Place from './Place'

const BookingSummary = ({
    source,
    sourcePin,
    sourceCountry,
    destination,
    destinationPin,
    destinationCountry,
}) => {
    return (
        <div
            className='flex flex-col justify-center items-center bg-white drop-shadow-2xl rounded-xl p-4 px-6 gap-4 w-full h-[30vh]'
        >
            <div
                className='w-full text-left text-2xl font-semibold'
            >
                Booking Summary
            </div>
            <div
                className='flex flex-row items-start w-3/4'
            >
                <Place
                    place={source}
                    pin={sourcePin}
                    country={sourceCountry}
                />
                <div
                    className='planeIcon'
                >
                    <GiAirplaneDeparture
                        className='text-4xl'
                    />
                </div>
                <Place
                    place={destination}
                    pin={destinationPin}
                    country={destinationCountry}
                />
            </div>

        </div>
    )
}

export default BookingSummary