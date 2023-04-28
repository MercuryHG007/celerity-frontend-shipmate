import {
    IoLocationOutline
} from 'react-icons/io5'

import {
    BsAirplane
} from 'react-icons/bs'

import {
    TiStarFullOutline,
    TiStarOutline
} from 'react-icons/ti'

import Button from "../Button"

import image from '../../assets/img/seller.jpeg'

const QuoteCard = ({
    type='BV',
    rating = 3
}) => {

    const ratingArr = [];
    for(let i=1; i<=rating; i++){
        ratingArr.push(
            <TiStarFullOutline 
                className='text-[#9747FF] text-2xl'
            />
        )
    }
    for(let i=rating; i<5; i++){
        ratingArr.push(
            <TiStarOutline 
                className='text-[#9747FF] text-2xl'
            />
        )
    }

    return (
        <div
            className="flex flex-row justify-between w-full py-5 px-7 bg-white gap-4 rounded-xl drop-shadow-2xl"
        >
            <div
                className="flex flex-col justify-between"
            >
                <div
                    className="flex flex-row gap-6"
                >
                    <div
                        className={`
                            flex flex-row justify-evenly items-center w-[100px]  rounded-xl p-2
                            ${type==='BV' ? 'bg-[#AFFFAD]' : 'bg-[#ADBFFF]'}
                        `}
                    >
                        <div
                            className={`
                                w-[10px] h-[10px] rounded-full
                                ${type==='BV' ? 'bg-[#05FF00]' : 'bg-[#446DFF]'}
                            `}
                        />
                        <div className="text-xs ">
                            {type==='BV' ? 'Best Value' : "Eco"}
                        </div>
                    </div>
                    <div
                        className="flex gap-3 text-sm justify-center items-center"
                    >
                        <div className="text-[#FF0000]">Express</div>
                        <div className="border-l-2 h-[80%]" />
                        <div className="text-[#565656]">Est. 5 days</div>
                    </div>
                </div>
                <div
                    className="flex flex-row"
                >
                    {/* TRAVELLING */}
                    <div
                        className='flex gap-2 '
                    >
                        <IoLocationOutline
                            className="text-2xl"
                        />
                        110003, Delhi
                    </div>
                    <div
                        className='flex gap-1 mx-1'
                    >
                        <div
                            className='min-w-[50px] flex justify-center items-center px-1'
                        >
                            <hr
                                className="w-full border-black border-t-[2px] "
                            />
                        </div>
                        <BsAirplane className='text-2xl p-0' />
                        <div
                            className='min-w-[50px] flex justify-center items-center px-1'
                        >
                            <hr
                                className="w-full border-black border-t-[2px] "
                            />
                        </div>
                    </div>
                    <div
                        className='flex gap-2 '
                    >
                        <IoLocationOutline
                            className="text-2xl"
                        />
                        200080, Shanghai
                    </div>
                </div>
                <div
                    className="flex justify-between w-3/4"
                >
                    {/* LOGO + RATING */}
                    <div
                        className='flex flex-row font-light text-sm items-center justify-center gap-2'
                    >
                        <div
                            className='flex items-center justify-center'
                        >
                            <img
                                alt='sellerImg'
                                src={image}
                                width={30}
                            />
                        </div>
                        Primetime Worldwide
                    </div>
                    <div
                        className='flex gap-1'
                    >
                        {ratingArr}
                    </div>
                </div>
            </div>
            <div
                className="flex flex-col border-l-2 pl-4 items-center justify-center gap-2 "
            >
                <div className="text-xl font-extrabold" >$ 3,982.<span className="text-sm" >63</span></div>
                <Button
                    label="Select"
                />
                <div className="underline cursor-pointer font-extralight ">View Details</div>
            </div>
        </div>
    )
}

export default QuoteCard