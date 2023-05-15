import { SelectedPageEnum } from "@/app/shared/typesEnum";
import Link from "next/link";

type LinkProps = {
  page: string;
  selectedPage: SelectedPageEnum;
  setSelectedPage: (value: SelectedPageEnum) => void;
}

export default function MyLink({ page, selectedPage, setSelectedPage }: LinkProps) {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPageEnum;
  return (
    <Link
      className={`${selectedPage === lowerCasePage ? "text-secondary-100" : "text-white"}
    transition duration-500 hover:text-gray-600 cursor-pointer
    `}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </Link>
  )
}