import React from "react";
import { Link } from "react-router-dom";

export default function GadgetCard({ gadget }) {
  return (
    <li
      className="bg-white rounded-3xl px-5 py-4 grid gap-3 border shadow-sm"
      key={gadget.id}
    >
      <img
        className="h-[8rem] w-full object-center object-contain rounded-sm"
        src={gadget.image}
        alt={gadget.name}
      />
      <div className="space-y-3">
        <h4 className="text-xl font-bold">{gadget.name}</h4>
        <p className="text-lg text-gray-500 pb-4">{gadget.price}$</p>
        <Link
          to={`/details/${gadget.id}`}
          className="bg-gradient-to-r hover:scale-95 transition-transform grid text-center from-purple-600 to-fuchsia-500 rounded-full w-full"
        >
          <span className="bg-white block m-[1px] text-brand rounded-full px-6 text-lg py-2">
            View Details
          </span>
        </Link>
      </div>
    </li>
  );
}
