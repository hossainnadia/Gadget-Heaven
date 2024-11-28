import React from "react";
import { CartContext } from "./context/Cart-context";
import { useContext } from "react";
import { CircleX, ArrowDownUp } from "lucide-react";

export default function Cart() {
  const context = useContext(CartContext);
  return (
    <section>
      <div className="pt-10 pb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Cart</h1>
        <div className="flex items-center gap-x-4">
          <span className="text-2xl font-medium">
            Total cost:$
            {context.totalCartPrice}
          </span>
          <button
            onClick={context.sortGadgetsByPrice}
            className="bg-gradient-to-r hover:scale-95 transition-transform grid text-center from-purple-600 to-fuchsia-500 rounded-full"
          >
            <span className="bg-white flex gap-2 m-[1px] text-brand rounded-full px-6 text-lg py-2">
              Sort By price
              <ArrowDownUp className="size-7" />
            </span>
          </button>
          <button className="text-white hover:scale-95 transition-transform flex items-center gap-x-2 bg-brand-purple text-lg rounded-full px-6 py-2">
            Purchase
          </button>
        </div>
      </div>
      <ul className="grid gap-y-6">
        {context?.cartGadgets?.map((gadget) => (
          <li
            key={gadget.id}
            className="flex relative items-center gap-x-8 bg-white border shadow-sm p-4 rounded-2xl"
          >
            <img
              className="w-[12rem] h-[8rem] object-center object-cover rounded-2xl"
              src={gadget.image}
              alt={gadget.name}
            />
            <div className="space-y-3">
              <h3 className="font-bold text-2xl">{gadget.name}</h3>
              <p className="leading-relaxed opacity-80 max-w-[60ch]">
                {gadget.description}
              </p>
              <span className="font-medium leading-relaxed">
                Price: ${gadget.price}
              </span>
            </div>
            <button onClick={() => context.removeGadgetFromCart(gadget.id)}>
              <CircleX className="text-red-500 size-8 absolute right-8 top-1/2 -translate-y-1/2" />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
