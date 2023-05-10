import Link from "next/link";
import Image from "next/image";
import { SignInButton } from "@/components/buttons/SignInButton";
import AuthCheck from "@/components/AuthCheck";
import { SignOutButton } from "@/components/buttons/SignOutButton";

export const NavMenu = () => {
  return (
    <nav className="flex justify-between p-4 bg-cyan-950 items-center">
      <Link href={"/"}>
        <Image src="/logo.svg" width={216} height={30} alt="NextSpace Logo" />
      </Link>
      <ul className="flex space-x-4">
        <li className="flex items-center">
          <Link href={"/about"}>About</Link>
        </li>
        <li className="flex items-center">
          <Link href={"/blog"}>Blog</Link>
        </li>
        <li className="flex items-center">
          <Link href={"/users"}>Users</Link>
        </li>

        <li className="flex items-center">
          <SignInButton />
        </li>
        <AuthCheck>
          <li className="flex items-center">
            <SignOutButton />
          </li>
        </AuthCheck>
      </ul>
    </nav>
  );
};
