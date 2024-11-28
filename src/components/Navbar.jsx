import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";

const navLinks = [
  {
    link: "/",
    label: "Home",
  },
  {
    link: "/",
    label: "Statistics",
  },
  {
    link: "/dashboard/cart",
    label: "DashBoard",
  },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <header
      className={`bg-brand-purple py-8 container mx-auto px-8 rounded-t-3xl flex justify-between ${
        location.pathname === "/"
          ? "bg-brand-purple text-white"
          : " bg-brand-white text-black"
      }`}
    >
      <Link className="font-bold text-2xl tracking-tight" to="/">
        Gedget Heaven
      </Link>
      <nav>
        <ul className="hidden sm:flex items-center gap-x-10 text-lg">
          {navLinks.map(({ link, label }) => {
            return (
              <li key={label}>
                <Link className="hover:opacity-80 transition-opacity" to={link}>
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <ul className="flex ite gap-4">
        <li>
          <Link className="bg-white block text-brand-black p-2 rounded-full hover:opacity-80 transition-opacity">
            <ShoppingCart className="size-5" />
          </Link>
        </li>
        <li>
          <Link className="bg-white block text-brand-black p-2 rounded-full hover:opacity-80 transition-opacity">
            <Heart className="size-5" />
          </Link>
        </li>
      </ul>
    </header>
  );
}
