const Button = ({label, outline, small}) => {
  return (
    <div
        className={`
            flex justify-center items-center hover:opacity-80 transition w-[150px] rounded-lg border-[#6F57E9]
            ${outline ? 'bg-white ' : 'bg-[#6F57E9] '}
            ${outline ? 'text-black ' : 'text-white '}
            ${small ? 'py-1' : 'py-3'}
            ${small ? 'text-small' : 'text-md'}
            ${small ? 'font-light' : 'font-semibold'}
            ${small ? 'border-[1px]' : 'border-2 '}
        `}
    >
        {label}
    </div>
  )
}

export default Button