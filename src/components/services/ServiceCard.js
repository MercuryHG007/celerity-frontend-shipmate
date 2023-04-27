
const ServiceCard = ({
    icon: Icon,
    iconColor,
    title,
    content
}) => {
    return (
        <div
            className="flex flex-col max-w-[325px] p-5 bg-white gap-4 rounded-xl drop-shadow-2xl"
        >
            <div
                className="flex flex-row gap-3 font-semibold"
            >
                <Icon
                    height={25}
                    className={`mr-8 text-[${iconColor}] `}
                />
                {title}
            </div>
            <hr 
                className="border-t-[2px] "
            />
            <div
                className="text-[#535353]"
            >

                {content}
            </div>
        </div>
    )
}

export default ServiceCard