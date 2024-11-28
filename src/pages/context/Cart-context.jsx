import { useState, useEffect } from "react";
import { createContext } from "react";
import { setLocalStorage, getLocalStorage } from "../../helpers/LoacalStorage";

export const CartContext = createContext(null);

export function CartContextProvider({ children }) {
  const [cartGadgets, setCartGadgets] = useState(
    getLocalStorage("CART GADGET")
  );
  const [totalCartPrice, setTotalCartPrice] = useState(0);

  function addGadgetToCart(gadget) {
    setCartGadgets((previous) => {
      const isGadgetExisting = previous.some(
        (prevGadget) => prevGadget.id === gadget.id
      );

      if (isGadgetExisting) {
        console.log("Bhai product ache!");
        return previous;
      } else {
        console.log("Gadget added to cart!");
        const updatedCartGadgets = [...previous, gadget];
        setLocalStorage("CART_GADGETS", updatedCartGadgets);
        return updatedCartGadgets;
      }
    });
  }

  function removeGadgetFromCart(gadgetId) {
    setCartGadgets((previous) => {
      const updatedCartGadgets = previous.filter(
        (prevGadget) => prevGadget.id !== gadgetId
      );
      setLocalStorage("CART_GADGETS", updatedCartGadgets);
      return updatedCartGadgets;
    });
  }

  function sortGadgetsByPrice() {
    setCartGadgets((previous) => {
      const sortedGadgets = previous.sort((a, b) => b.price - a.price);
      return [...sortedGadgets];
    });
  }
  function calculateTotalCartPrice() {
    return cartGadgets.reduce(
      (sum, gadget) => sum + gadget.price,
      totalCartPrice
    );
  }
  useEffect(() => {
    setTotalCartPrice(calculateTotalCartPrice());
  }, [cartGadgets]);

  const value = {
    cartGadgets,
    addGadgetToCart,
    removeGadgetFromCart,
    sortGadgetsByPrice,
    totalCartPrice,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
