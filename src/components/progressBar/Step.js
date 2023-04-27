import './step.css'

const Step = ({
    num, 
    title
}) => {
  return (
    <div
        className="step-item"
    >
        <div
            className="w-[50px] h-[50px] flex justify-center items-center bg-[#D3B0FF] text-white p-5 rounded-full z-10"
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