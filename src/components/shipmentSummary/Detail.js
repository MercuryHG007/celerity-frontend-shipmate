const Detail = ({
    label=null,
    title=null,
    icon: Icon,
    image=null,
    qty=null,
    prod=null,
    dimension=null,
}) => {
    return (
        <div
            className="flex flex-col h-full justify-start items-center bg-white drop-shadow-2xl rounded-xl p-4 px-6 gap-4"
        >
            <div
                className="flex text-left w-full text-lg text-[#5C5C5C]"
            >
                {label}
                {title && (
                    <div>: <span className="font-semibold" >{title}</span></div>
                )}
            </div>
            <div
                className="flex flex-row"
            >
                {qty && (
                    <div
                        className="flex items-center text-2xl font-semibold"
                    >
                        {qty} x
                    </div>

                )}
                {Icon && (
                    <div
                        className="flex flex-col justify-center items-center font-semibold"
                    >
                        <Icon
                            className="text-5xl"
                        />
                        {prod}
                        <div
                            className="font-normal "
                        >
                            {dimension}
                        </div>
                    </div>
                )}
                {image && (
                    <div
                        className="h-[50px] my-5"
                    >
                        <img
                            alt={`${label}IMG`}
                            src={image}
                            height="100%"
                            width="100%"
                            className="h-[50px] w-[200px]"
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Detail