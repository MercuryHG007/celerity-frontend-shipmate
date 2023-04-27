import { useState } from "react"
import Button from "../Button.js"
import Logo from "./Logo.js"
import { useNavigate } from "react-router-dom"

const Navbar = ({ userMenu }) => {
  const [loggedIn, setLoggedIn] = useState(false)
  const navigate = useNavigate()

  const handleLoggin = () => {
    setLoggedIn(true)
  }
  const handleLoggout = () => {
    setLoggedIn(false)
  }

  return (
    <div
      className='h-[12vh] fixed w-full flex flex-row justify-between items-center p-6 px-12 z-50 bg-inherit'
    >
      <Logo />
      {userMenu && (
        !loggedIn ? (
      <div
        className="flex flex-row justify-between w-[21vw] "
      >
        <Button
          label="Login"
          onClick={handleLoggin}
        />
        <Button
          label="Learn More"
          outline
        />
      </div>
      ) : (
      <div
        className="flex flex-row justify-between w-[15vw] "
      >
        <Button
          label="$"
          outline
          dollar
          onClick={handleLoggout}
        />
        <div>
          <Button
            label="Track Shipment"
            onClick={() => navigate('/trackShipment')}
          />
        </div>
      </div>
      )
      
      )}

    </div>
  )
}

export default Navbar