import Button from "../Button.js"
import Logo from "./Logo.js"

function Navbar() {
  return (
    <div
      className='h-[12vh] fixed w-full flex flex-row justify-between items-center p-6 z-50 bg-inherit'
    >
      <Logo/>
      <div
        className="flex flex-row justify-between w-[20vw] "
      >
        <Button
          label="Login"
        />
        <Button
          label="Learn More"
          outline
        />
      </div>
    </div>
  )
}

export default Navbar