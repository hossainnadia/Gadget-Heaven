import React from "react";

export default function Banar() {
  return (
    <section className="relative h-[38rem] lg:h-[36rem] bg-brand-purple text-center text-white rounded-b-3xl py-12 sm:pb-[16rem] lg:pb-[20rem] container px-2 mx-auto grid justify-items-center ">
      <h1 className="lg:text-5xl text-3xl font-bold tracking-tight text-balance leading-[1.25] pb-6 ">
        Upgrade Your Tech Accessorize with Gadget Heaven Accessories
      </h1>
      <p className="text-pretty max-w-[65ch] leading-relaxed  ">
        Explore the latest gadgets that will take your experience to the next
        level. From smart devices to the coolest accessories, we have it all!
      </p>
      <button className="bg-white text-brand-purple font-bold text-xl rounded-full px-6 py-2">
        Shop Now
      </button>
      <div className="sm:absolute mt-12 bg-white/25 p-2 border border-white rounded-2xl -bottom-[40%] lg:-bottom-[80%] sm:left-1/2 sm:-translate-x-1/2">
        <img className="rounded-2xl" src="/gedget.jpg" alt="gedget picture" />
      </div>
    </section>
  );
}
