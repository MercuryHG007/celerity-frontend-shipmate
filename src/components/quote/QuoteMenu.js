import {
    SlArrowDown
} from 'react-icons/sl'

const list = [
    "Filters",
    "Price",
    "Modes",
    "Seller"
]

function QuoteMenu() {
  return (
    <div
        className='flex flex-col justify-center items-center w-full bg-inherit gap-4 p-4'
    >
        <div>
            <span className='font-semibold '>3 Top Quote</span> (6 in Total)
        </div>

        <div
            className='flex flex-col justify-center items-center gap-3 w-[80%]'
        >
            {list.map((item) => (
                <div
                    key={item}
                    className='flex flex-row justify-between items-center font-semibold w-full p-2 cursor-pointer hover:bg-white hover:opacity-70'
                >
                    {item}
                    <SlArrowDown />
                </div>
            ))}
        </div>
    </div>
  )
}

export default QuoteMenu