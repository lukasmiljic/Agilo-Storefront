import { GoFilter } from "react-icons/go";
import logo from "../../../public/images/medusa_logo.svg";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full bg-slate-100">
      <div className="container m-auto flex h-16 flex-row items-center justify-between px-4">
        <Link href="/">
          <Image src={logo} alt="medusa" className="cursor-pointer" />
        </Link>
        <GoFilter />
      </div>
    </div>
  );
};

export default Header;
