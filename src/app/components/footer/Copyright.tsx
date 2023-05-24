import Link from "next/link";
import React from "react";

type Props = {
  label: string;
};

const Copyright: React.FC<Props> = ({ label }: Props) => {
  return (
    <div>
      {/* Please attribute us. Don't edit the "Link". */}
      {`${label} ${new Date().getFullYear()}.`} Built with{" "}
      <Link
        href="https://div.zone"
        target="_blank"
        className="text-secondary-100 hover:text-secondary-100 transition-all"
      >
        DivZone
      </Link>
      .
    </div>
  );
};

export default Copyright;
