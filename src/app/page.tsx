import Image from "next/image";
import logo from "../../public/images/medusa_logo.svg"
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center h-screen animate-fadeIn">
        <Image src={logo} className="w-48 mb-2" alt="logo" />
        <p className="text-secondary">Simple storefront made with Next.js</p>
        <Link className="text-xs text-[#7c3aed]" href={"/products"}> &gt; View all products</Link>
      </div>
    </main>
  );
}
