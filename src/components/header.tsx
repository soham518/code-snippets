import React from "react";
import Link from "next/link";
import Image from "next/image";
import nextJsImg from "public/next.svg"
const NavbarPage = () => {
  return (
    <>
      <nav className="container flex items-center justify-between mx-auto h-20 text-black rounded-md bg-gradient-to-r from-blue-500 to-pink-500 p-[40px]">
        <Link href="/">
          <h1 className="font-bold text-xl">Home</h1>
        </Link>
        <Image
          src={nextJsImg}
          height={50}
          width={150}
          alt="Next img"
          style={{objectFit: 'cover'}}
          />

      </nav>
    </>
  );
};

export default NavbarPage;
