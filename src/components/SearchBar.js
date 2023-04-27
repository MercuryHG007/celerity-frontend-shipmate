import {
    MapPinIcon,
    ScaleIcon,
    CalendarDaysIcon,
    ArrowSmallRightIcon,
} from '@heroicons/react/24/outline'

function SearchBar() {
    return (
        <div
            className="w-[90vw] flex flex-row bg-white drop-shadow-2xl rounded-2xl p-6 justify-between items-center text-[#868686] font-medium"
        >
            <div
                className='flex flex-row gap-1 items-center justify-center'
            >
                <MapPinIcon
                    height={25}
                />
                <input
                    className='p-3 outline-none'
                    placeholder='Origin, Port, City'
                />
            </div>
            <div
                className='flex flex-row gap-1 items-center justify-center'
            >
                <MapPinIcon
                    height={25}
                />
                <input
                    className='p-3 outline-none'
                    placeholder='Destination, Port, City'
                />
            </div>
            <div
                className='flex flex-row gap-1 items-center justify-center border-x-2 px-4'
            >
                <CalendarDaysIcon
                    height={25}
                />
                <input
                    className='p-3 outline-none'
                    placeholder='13 April 2023'
                />
            </div>
            <div
                className='flex flex-row gap-1 items-center justify-center'
            >
                <ScaleIcon
                    height={25}
                />
                <input
                    className='p-3 outline-none'
                    placeholder='Load'
                />
            </div>
            <div
                className='border-l-2 pl-4'
            >

                <div
                    className='rounded-lg bg-[#9747FF] text-white font-bold p-1 cursor-pointer'
                >
                    <ArrowSmallRightIcon
                        height={25}
                    />
                </div>
            </div>
        </div>
    )
}

export default SearchBar