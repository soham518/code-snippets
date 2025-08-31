import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import nextJsImg from "public/next.svg"
const NavbarPage = () => {
  return (
    <>
      <nav >
         <div className="flex items-center justify-between bg-gradient-to-r from-blue-500 to-pink-500 rounded-md p-1">
      <Link href="/"><h1 className="font-bold">Home Page</h1></Link>
      <Link href="/"><h1>Snippets</h1></Link>
      <Link href="/snippets/new"><Button>New</Button></Link>
      
    </div>
      </nav>
    </>
  );
};

export default NavbarPage;
