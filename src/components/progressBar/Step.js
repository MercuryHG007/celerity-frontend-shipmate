import './step.css'

const Step = ({
    num, 
    title,
    active
}) => {
  return (
    <div
        className="step-item"
    >
        <div
            className={`
                w-[50px] h-[50px] flex justify-center items-center p-5 rounded-full z-10
                ${active ? 'bg-[#868686]' : 'bg-[#D3B0FF]'}
                ${active ? 'text-[#868686]' : 'text-white'}
            `}
        >
            {num}
        </div>
        <div>
            {title}
        </div>
    </div>
  )
}

export default Step