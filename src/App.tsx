import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



import type { Technology } from "./Components/Type/Type";
import Nav from './Components/Nav';
import Banner from './Components/Banner';
import Technologies from "./Components/Technologies/Technologies";
import MyStack from "./Components/My Stack/MyStack";
import Footer from "./Components/Footer/Footer";


function App() {

  // Selected technologies
  const [stack, setStack] = useState<Technology[]>([]);


  // Add technology
  const addToStack = (technology: Technology): Technology => {

    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );


    if (alreadyAdded) {

      toast.warning("Technology already added!");

      return technology;
    }


    setStack([...stack, technology]);

    toast.success(`${technology.name} added to your stack!`);

    return technology;
  };


  // Remove one technology
  const removeFromStack = (id: string): Technology => {

    const technology = stack.find(
      (item) => item.id === id
    );

    setStack(
      stack.filter((item) => item.id !== id)
    );

    toast.info(`${technology?.name ?? "Technology"} removed from your stack!`);

    return technology as Technology;
  };


  // Remove all
  const removeAll = () => {

    setStack([]);

    toast.error("All technologies removed!");
  };


  return (
    <>
     
     <Nav/>

     <Banner/>

      


      <main className="container mx-auto grid gap-8 px-5 py-12 lg:grid-cols-[1fr_350px]">

        {/* Left side */}
        <Technologies
          stack={stack}
          onAdd={addToStack}
        />


        {/* Right side */}
        <MyStack
          stack={stack}
          onRemove={removeFromStack}
          onRemoveAll={removeAll}
        />

      </main>


      <Footer />


      <ToastContainer
        position="top-right"
        autoClose={2000}
      />
     
    </>
  );
}

export default App;