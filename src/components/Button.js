const Button = ({
  label,
  outline,
  small,
  onClick,
  dollar,
  icon: Icon
}) => {
  return (
    <div
      onClick={onClick}
      className={`
            flex justify-center items-center hover:opacity-80 cursor-pointer transition  rounded-xl border-[#6F57E9]
            ${dollar ? 'w-[50px]' : 'w-[150px]'}
            ${outline ? 'bg-white ' : 'bg-[#6F57E9] '}
            ${dollar ? 'text-[#6F57E9]' : outline ? 'text-black ' : 'text-white '}
            ${dollar ? 'py-0' : small ? 'py-1' : 'py-3'}
            ${dollar ? 'text-3xl' : small ? 'text-small' : 'text-md'}
            ${small ? 'font-light' : 'font-semibold'}
            ${small ? 'border-[1px]' : 'border-2 '}
        `}
    >
      {label}
    </div>
  )
}

export default Button