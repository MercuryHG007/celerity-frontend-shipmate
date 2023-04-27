import {
    HiOutlineBuildingLibrary
} from 'react-icons/hi2'

const Place = ({
    place,
    pin,
    country
}) => {
  return (
    <div
        className="flex flex-col items-center justify-center font-medium pt-6"
    >
        <HiOutlineBuildingLibrary
            className='text-4xl'
        />
        <div>{place},</div>
        <div
            className="flex flex-row items-center justify-center min-w-max"
        >
            {pin}, {country}
        </div>

    </div>
  )
}

export default Place