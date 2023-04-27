import { useNavigate } from "react-router-dom"

function Logo() {
  const navigate = useNavigate()
  return (
    <div
      className="text-4xl font-semibold cursor-pointer"
      onClick={() => navigate('/')}
    >
      Ship
      <span
        className="text-[#6F57E9]"
      >
        mate.
      </span>
    </div>
  )
}

export default Logo