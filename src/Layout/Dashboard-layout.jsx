import React from "react";
import { Link, useLocation, Outlet } from "react-router-dom";

export default function DashboardLayout() {
  const location = useLocation();
  return (
    <section className="pb-[18rem]">
      <div className="bg-brand-purple text-white text-center grid justify-center pb-[14rem] pt-10 ">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance leading-[1.25] pb-8 ">
          Dashboard
        </h1>
        <p className="text-pretty max-w-[65ch] leading-relaxed text-lg">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <ul className="flex items-center gap-4 justify-center mt-12">
          <li>
            <Link
              className={`border-2 font-bold text-lg rounded-full px-14 py-3 ${
                location.pathname === "/dashboard/cart"
                  ? "bg-white text-brand-purple border-transparent"
                  : "bg-brand-purple text-white border-white"
              }`}
              to="/dashboard/cart"
            >
              cart
            </Link>
          </li>

          <li>
            <Link
              className={`border-2 font-bold text-lg rounded-full px-14 py-3 ${
                location.pathname === "/dashboard/wishlist"
                  ? "bg-white text-brand-purple border-transparent"
                  : "bg-brand-purple text-white border-white"
              }`}
              to="/dashboard/wishlist"
            >
              Wishlist
            </Link>
          </li>
        </ul>
      </div>
      <div className="mx-w-5xl mx-auto px-2">
        <Outlet />
      </div>
    </section>
  );
}
