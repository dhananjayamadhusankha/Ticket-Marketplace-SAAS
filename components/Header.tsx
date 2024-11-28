import Image from "next/image";
import Logo from "@/images/logo.png";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <header className="border-b">
      <div className="flex flex-col lg:flex-row gap-4 p-4 items-center">
        <div className="flex justify-between items-center w-full lg:w-auto">
          <Link href="/" className="font-bold shrink-0">
            <Image
              src={Logo}
              alt="logo"
              width={100}
              height={100}
              className="w-24 lg:w-28"
            />
          </Link>
          <div className="lg:hidden">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="bg-gray-100 text-gray-800 px-3 py-1.5 rounded-lg text-sm hover:bg-gray-200 border border-gray-300 transition">
                  Sign in
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
        <div className="w-full lg:max-w-2xl">
          <SearchBar />
        </div>

        <div className="hidden lg:block lg:ml-auto">
          <SignedIn>
            <div className="flex items-center gap-3">
              <Link href="/seller">
                <button className="bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm hover-bg-blue-700 transition">
                  Sell Tickets
                </button>
              </Link>
              <Link href="/tickets">
                <button className="bg-gray-100 text-gray-800 px-3 py-1.5 rounded-lg text-sm hover-bg-gray-200 transition border border-gray-300">
                  My Tickets
                </button>
              </Link>
              <UserButton />
            </div>
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="bg-gray-100 text-gray-800 px-3 py-1.5 rounded-lg text-sm hover:bg-gray-200 border border-gray-300 transition">
                Sign in
              </button>
            </SignInButton>
          </SignedOut>
        </div>

        <div className="lg:hidden w-full flex justify-center items-center gap-3">
          <SignedIn>
              <Link href="/seller" className="flex-1">
                <button className="bg-blue-600 text-white w-full px-3 py-1.5 rounded-lg text-sm hover-bg-blue-700 transition">
                  Sell Tickets
                </button>
              </Link>
              <Link href="/tickets" className="flex-1">
                <button className="bg-gray-100 text-gray-800 w-full px-3 py-1.5 rounded-lg text-sm hover-bg-gray-200 transition border border-gray-300">
                  My Tickets
                </button>
              </Link>
          </SignedIn>
          
        </div>
      </div>
    </header>
  );
}

export default Header;
