import {
  AiFillStar
} from 'react-icons/ai'
import Button from '../Button'

const PriceDetail = () => {
  return (
    <div
      className="flex flex-col justify-center items-center bg-white drop-shadow-2xl rounded-xl p-4 px-6 gap-6 w-[30%] text-[#808080]"
    >
      <div
        className='flex flex-row w-full text-left text-2xl font-semibold gap-6 text-black'
      >
        <div>Price Details</div>
        <div
          className='flex bg-[#E5E6E6] rounded-full text-sm items-center justify-evenly w-[35%]'
        >
          <div>
            <AiFillStar />
          </div>
          <div>Known Shipper</div>
        </div>
      </div>
      <div
        className='flex justify-between w-full text-xl font-light'
      >
        <div>Seller's Quote</div>
        <div>$ 3,659.25</div>
      </div>
      <hr className="border-t-[2px] w-full" />
      <div
        className='flex justify-between w-full text-xl font-light'
      >
        <div>Duties and taxes</div>
        <div className='text-right' >Not Included</div>
      </div>
      <div
        className='flex justify-between items-start w-full text-xl font-light'
      >
        <div
          className='flex flex-col'
        >
          <div>
            Insurance
          </div>
          <div
            className='text-base'
          >
            Based on the items cost
          </div>
        </div>
        <div>$ 323.40</div>
      </div>
      <hr className="border-t-[2px] w-full" />
      <div
        className='flex justify-between w-full text-xl font-light'
      >
        <div>Add a <span className='underline text-[#6F57E9] cursor-pointer '> promo code </span></div>
      </div>
      <div
        className='flex justify-between w-full text-xl font-light'
      >
        <div>Platform fee</div>
        <div>$ 119.48</div>
      </div>

      <hr className="border-t-[2px] w-full" />

      <div
        className='flex justify-between w-full text-black text-3xl font-extrabold pb-10'
      >
        <div>Total</div>
        <div>$ 4,102.13</div>
      </div>

      <Button 
        label="Checkout"
        big
      />
    </div>
  )
}

export default PriceDetail