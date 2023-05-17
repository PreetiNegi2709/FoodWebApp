import React,{useState} from "react";

import CardProvider from "./store/CardProvider";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meal";


function App() {
  const [showModal,setShowModal] = useState(false);

  return (
    <CardProvider>
      {showModal && <Cart showModal={showModal} setShowModal={setShowModal}/>}
      <Header showModal={showModal} setShowModal={setShowModal}/>
      <main>
        <Meals/>
      </main>
    </CardProvider>
  );
}

export default App;
