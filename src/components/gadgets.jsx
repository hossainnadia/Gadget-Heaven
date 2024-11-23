import { useState, useEffect } from "react";
import GadgetCard from "./Gadget-card";

export default function Gadgets() {
  const [gadgets, setGadgets] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  async function fetchGadgets() {
    const response = await fetch("/gadgets-data.json");
    const data = await response.json();

    if (data) {
      setGadgets(data);
      const allCategories = data.map((item) => item.category);

      const allCategoriesSet = new Set(allCategories);
      const categoriesArray = ["All Products", ...allCategoriesSet];
      setCategories(categoriesArray);

      if (selectedCategory !== "All Products") {
        const categorizeGadgets = data.filter(
          (gadget) => gadget.category === selectedCategory
        );
        setGadgets(categorizeGadgets);
      } else {
        setGadgets(data);
      }
    }
  }

  useEffect(() => {
    fetchGadgets();
  }, [selectedCategory]);

  // if (selectedCategory) {
  //   const categorizeGadgets = data.filter(
  //     (gadget) => gadget.category === selectedCategory
  //   );
  //   setGadgets(categorizeGadgets);
  // }
  return (
    <section className="py-[25rem] lg:py-[30rem] text-center container mx-auto px-2">
      <h2 className="md:text-4xl pb-20 text-center font-bold tracking-tight text-balance text-3xl">
        Explore Cutting-Edge Gadgets
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-4 items-start gap-5">
        <ul className="bg-white rounded-3xl px-5 py-4 grid gap-4 border shadow-sm">
          {categories.map((category) => {
            return (
              <li key={category}>
                <button
                  // style={{
                  //   background: selectedCategory === category ? "red" : "",
                  // }}
                  className={`p-5 w-full rounded-full transition-colors duration-300 px-6 font-medium py-6 grid gap-3 border shadow-sm ${
                    selectedCategory === category
                      ? "bg-brand-purple text-white"
                      : " bg-gray-200 text-gray-600 "
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              </li>
            );
          })}
        </ul>

        <ul className="grid-cols-3 col-span-3 grid gap-5 ">
          {gadgets.map((gadget) => (
            <GadgetCard key={gadget.id} gadget={gadget} />
          ))}
        </ul>
      </div>
    </section>
  );
}
