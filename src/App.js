import React,{useState} from "react";

import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meal";


function App() {
  const [showModal,setShowModal] = useState(false);

  return (
    <React.Fragment>
      {showModal && <Cart showModal={showModal} setShowModal={setShowModal}/>}
      <Header showModal={showModal} setShowModal={setShowModal}/>
      <main>
        <Meals/>
      </main>
    </React.Fragment>
  );
}

export default App;
