import { Star, ShoppingCart, Heart } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Details() {
  const [gadgetDetails, setGadgetDetails] = useState({});
  const perams = useParams();

  async function fetchGadgetDetails() {
    const response = await fetch("/gadgets-data.json");
    const data = await response.json();
    const foundGadget = data.find((gadget) => gadget.id == perams.id);

    setGadgetDetails(foundGadget);
  }

  useEffect(() => {
    fetchGadgetDetails();
  }, []);

  return (
    <section className="pb-[18rem]">
      <div className="bg-brand-purple rounded-2xl text-white text-center grid justify-center pb-[14rem] pt-10 ">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance leading-[1.25] pb-8 ">
          Product Details
        </h1>
        <p className="text-pretty max-w-[65ch] leading-relaxed text-lg">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="bg-white border p-6 rounded-2xl shadow-sm lg:h-[35rem] container mx-auto gap-5 -mt-[12rem] max-w-6xl grid md:grid-cols-3">
        <img
          className="size-full object-center object-cover rounded-2xl border"
          src={gadgetDetails?.image}
          alt=""
        />
        <div className="col-span-2 grid justify-items-start items-center">
          <h2 className="text-3xl font-semibold">{gadgetDetails?.name}</h2>
          <span className="font-semibold text-xl opacity-80">
            ${gadgetDetails?.price}
          </span>
          <span className="text-sm bg-green-100 text-green-600 border border-green-600 font-semibold rounded-full px-3 py-1">
            In Stock
          </span>
          <p className="opracity-80 text-pretty text-lg ">
            {gadgetDetails?.description}
          </p>
          <div>
            <h3>Specification</h3>
            <ol className="text-lg opacity-80 space-y-1 leading-relaxed text-pretty">
              {gadgetDetails?.specifications?.map((specification, index) => (
                <li key={specification}>
                  {index + 1}. {specification}
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="text-lg font-bold">Ratings</h3>
            <ul className="flex item-center gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <li
                  className={index < 4 ? "text-[#F9C004]" : "text-gray-400"}
                  key={index}
                >
                  <Star
                    className="size-8 me-2"
                    fill={index < 4 ? "#f9C004" : "#fff"}
                  />
                </li>
              ))}
              <li className="text-lg font-medium bg-gray-200 rounded-full px-2 py-1 ">
                {gadgetDetails?.rating}
              </li>
            </ul>
          </div>
          <div className=" flex items-center gap-x-2 pt-8">
            <button className="text-white flex items-center gap-x-2 bg-brand-purple text-lg font-semibold rounded-full px-6 py-2">
              Add to Card
              <ShoppingCart className="size-4.2" />
            </button>
            <button className="rounded-full border p-3">
              <Heart className=" size-4.8" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
