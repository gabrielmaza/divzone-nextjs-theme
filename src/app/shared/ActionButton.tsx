import { SelectedPageEnum } from "./typesEnum";

type Props = {
    label: string;
    setSelectedPage: (value: SelectedPageEnum) => void;
}

export default function ActionButton({ label, setSelectedPage }: Props) {
    return (
        <a
            className="rounded-md bg-transparent border-solid border border-white px-6 py-2 cursor-pointer transition duration-500 hover:bg-gray-800"
            onClick={() => setSelectedPage(SelectedPageEnum.ContactUs)}
            href={`#${SelectedPageEnum.ContactUs}`}
        >
            {label}
        </a>
    )
}