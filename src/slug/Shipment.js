import {
  MdScale
} from 'react-icons/md'

import insuranceImg from '../assets/img/insurance.jpg'
import sellerImg from '../assets/img/seller.jpeg'

import React from 'react'
import Navbar from '../components/navbar/Navbar'
import ProgressBar from '../components/progressBar/ProgressBar'
import BookingSummary from '../components/shipmentSummary/BookingSummary'
import PriceDetail from '../components/shipmentSummary/PriceDetail'
import Detail from '../components/shipmentSummary/Detail'

function Shipment() {
  return (
    <div
      className='flex flex-col items-center gap-20 w-full h-full bg-[#F8F9FD] pb-20'
    >
      <Navbar />
      <ProgressBar />
      <div
        className='flex flex-row justify-between items-start gap-10 w-full px-10'
      >
        <div
          className='grid grid-cols-4 gap-3 w-[64%]'
        >
          <div
            className='col-span-4'
          >
            <BookingSummary
              source="Delhi"
              sourcePin="110003"
              sourceCountry="India"
              destination="Shanghai"
              destinationPin="200080"
              destinationCountry="China"
            />
          </div>
          <div
            className='col-span-1'
          >
            <Detail
              label="Total Weight/Volume"
              icon={MdScale}
              prod="114.21 KG"
            />
          </div>
          <div
            className='col-span-3'
          >
            <Detail
              label="Load"
              icon={MdScale}
              qty="1"
              prod="Pallets"
              dimension="230 x 140 x 120 CM"
            />
          </div>
          <div
            className='col-span-2'
          >
            <Detail
              label="Seller"
              title="Primetime Worldwide"
              image={sellerImg}
            />
          </div>
          <div
            className='col-span-2'
          >
            <Detail
              label="Seller"
              title="Primetime Worldwide"
              image={insuranceImg}
            />
          </div>
        </div>
        <PriceDetail />
      </div>
    </div>
  )
}

export default Shipment