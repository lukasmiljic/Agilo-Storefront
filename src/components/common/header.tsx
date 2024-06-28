import logo from "../../../public/images/medusa_logo.svg";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full">
      <div className="container m-auto flex h-16 flex-row items-center justify-center px-4">
        <Link href="/">
          <Image src={logo} alt="medusa" className="cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
