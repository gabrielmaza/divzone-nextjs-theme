type Props = {
    name: string;
    description?: string;
    background?: "secondary-100" | "primary-100"
};

const ServiceItem: React.FC<Props> = ({ name, description }: Props) => {
    const overlayStyles = `p-5 absolute z-30 flex
    h-full w-full flex-col items-center justify-center
    whitespace-normal bg-primary-500 text-center text-white
    opacity-0 transition duration-500 hover:opacity-90 rounded-xl`;

    return (
        <li className="relative inline-block h-[280px] w-[280px] rounded-xl bg-secondary-50">
            <div className={overlayStyles}>
                <p className="mt-5">{description}</p>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 268.46 73.68"
                className="absolute top-[-1px] right-[0] z-10 w-[94px] h-[26px]"
            ><defs>
                </defs><g>
                    <path className="fill-gray-800" d="m268.46,73.68c-.01-14.76-12.11-26.84-26.87-26.84H51.47c-.42,0-.85-.01-1.27-.03-.2-.01-.41-.03-.61-.04-.29-.01-.58-.04-.86-.07-.38-.03-.76-.07-1.14-.13-.22-.03-.44-.07-.64-.12-.03,0-.07-.01-.1-.01-.23-.03-.47-.07-.7-.13-.03,0-.04-.01-.07-.01-.29-.06-.57-.12-.85-.19-.32-.07-.63-.15-.95-.25-.12-.01-.23-.06-.35-.09-.06-.01-.12-.03-.18-.06-.28-.09-.55-.16-.82-.26-.34-.1-.66-.23-.98-.35-.03-.01-.06-.01-.09-.03-.06-.03-.13-.04-.19-.07-.06-.03-.12-.04-.18-.07-.28-.1-.55-.23-.83-.35-.36-.16-.73-.32-1.08-.51-.36-.18-.71-.36-1.07-.55-.45-.25-.9-.53-1.34-.8-.06-.03-.12-.07-.18-.1-.34-.22-.67-.44-.99-.69-.99-.69-1.93-1.44-2.82-2.26-.2-.19-.39-.38-.6-.57-.22-.22-.44-.44-.64-.67-.23-.25-.47-.5-.69-.76-.09-.09-.18-.19-.25-.28-.19-.22-.38-.45-.57-.69-.04-.06-.09-.12-.13-.18-.22-.28-19.71-23.52-30.33-36.5h241.53c14.88,0,26.93,12.05,26.93,26.92v46.76Z" /></g>
            </svg>
            <div className="flex flex-col justify-center p-5 h-full w-full whitespace-break-spaces">
                <p className="text-3xl font-bold text-gray-950 ">{name}</p>
            </div>
        </li>
    );
};

export default ServiceItem;