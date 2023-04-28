
const OptionMenu = ({ selected = null }) => {
    const content = [
        {
            title: "Best Value",
            duration: "5-5 days",
            cost: "$3,121",
            select: selected
        },
        {
            title: "Quickest",
            duration: "5-5 days",
            cost: "$3,121",
        },
        {
            title: "Cheapest",
            duration: "5-5 days",
            cost: "$3,121"
        },
    ]
    return (
        <div
            className="w-full flex flex-row bg-[#EBE8FF] rounded-xl gap-5 drop-shadow-2xl"
        >
            {content.map((item) => (
                <div
                    className={`
                    flex items-center justify-center p-3 cursor-pointer
                    ${item.select ? 'z-10' : 'z-0'}
                    ${item.select ? 'px-9' : ''}
                    ${item.select ? 'drop-shadow-2xl' : 'drop-shadow-none'} 
                    ${item.select ? 'bg-white' : 'bg-[#EBE8FF]'}
                    ${item.select ? 'text-[#9747FF]' : 'text-[#868686]'}
                    ${item.select ? 'rounded-xl' : 'rounded-none'}
                `}
                    key={item.title}
                >
                    {item.title} {item.duration}. {item.cost}
                </div>
            ))}
        </div>
    )
}

export default OptionMenu