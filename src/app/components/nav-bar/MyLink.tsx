import { SelectedPageEnum } from "@/app/shared/typesEnum";
import Link from "next/link";

type Props = {
  page: string;
  selectedPage: SelectedPageEnum;
  setSelectedPage: (value: SelectedPageEnum) => void;
};

const MyLink: React.FC<Props> = ({
  page,
  selectedPage,
  setSelectedPage,
}: Props) => {
  const lowerCasePage = page
    .toLowerCase()
    .replace(/ /g, "") as SelectedPageEnum;
  return (
    <Link
      className={`${
        selectedPage === lowerCasePage ? "text-secondary-100" : "text-white"
      }
    transition duration-500 hover:text-primary-100 cursor-pointer
    `}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </Link>
  );
};

export default MyLink;
