import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const NavbarPage = () => {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex items-center justify-between bg-gradient-to-r from-blue-500 to-pink-500 rounded-xl shadow-lg px-6 py-3">
        {/* Logo / Home */}
        <Link href="/">
          <h1 className="text-2xl font-bold text-white hover:text-yellow-200 transition cursor-pointer">
            Home
          </h1>
        </Link>

        {/* Links */}
        <div className="flex items-center space-x-6">
          <Link href="/snippets">
            <span className="text-white hover:text-yellow-200 font-medium transition cursor-pointer">
              Snippets
            </span>
          </Link>

          <Link href="/snippets/new">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-4 py-2 rounded-lg font-medium">
              New
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarPage;