import { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import type { Technology } from "./Components/Type/Type";

import Nav from "./Components/Nav";
import Banner from "./Components/Banner";
import Technologies from "./Components/Technologies/Technologies";
import MyStack from "./Components/My Stack/MyStack";
import Footer from "./Components/Footer/Footer";

function App() {
  const [stack, setStack] = useState<Technology[]>(() => {
    const savedStack = localStorage.getItem("myStack");

    if (savedStack) {
      return JSON.parse(savedStack);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem("myStack", JSON.stringify(stack));
  }, [stack]);

  const addToStack = (technology: Technology): Technology => {
    const alreadyAdded = stack.some((item) => item.id === technology.id);

    if (alreadyAdded) {
      toast.warning("Technology already added!");
      return technology;
    }

    setStack([...stack, technology]);

    toast.success(`${technology.name} Added to your stack!`);

    return technology;
  };

  const removeFromStack = (id: string): Technology => {
    const technology = stack.find((item) => item.id === id);

    if (!technology) {
      throw new Error(`Technology with id ${id} was not found.`);
    }

    setStack(stack.filter((item) => item.id !== id));

    toast.info(`${technology.name} Removed from your stack!`);

    return technology;
  };

  const removeAll = (): Technology[] => {
    setStack([]);

    toast.error("All technologies removed!");

    return [];
  };

  return (
    <>
      <Nav />

      <Banner />

      <main className="container mx-auto grid gap-8 px-5 py-12 lg:grid-cols-[1fr_350px]">
        <Technologies stack={stack} onAdd={addToStack} />

        <MyStack
          stack={stack}
          onRemove={removeFromStack}
          onRemoveAll={removeAll}
        />
      </main>

      <Footer />

      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;
