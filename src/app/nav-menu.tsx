import Link from "next/link";
import Image from "next/image";

export const NavMenu = () => {
  return (
    <nav className="flex justify-between p-4 bg-cyan-950 items-center">
      <Link href={"/"}>
        <Image src="/logo.svg" width={216} height={30} alt="NextSpace Logo" />
      </Link>
      <ul className="flex space-x-4">
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/blog"}>Blog</Link>
        </li>
        <li>
          <Link href={"/users"}>Users</Link>
        </li>
      </ul>
    </nav>
  );
};
