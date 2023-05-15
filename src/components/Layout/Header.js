import React from "react";

import clasees from "./Header.module.css";
import mealimg from "../../assets/food.jpg";
import HeaderCardButton from "./HeaderCardButton";

const Header = (props) => {
  return (
    // React.Fragment for 1 root tag and it is not there in dom no extra space
    <React.Fragment>
      <header className={clasees.header}>
        <h1>Foodie</h1>
        <HeaderCardButton />
      </header>

      {/* div for the image under the header */}
      <div className={clasees['main-image']}>
        <img src={mealimg} alt="table of meal" />
      </div>
    </React.Fragment>
  );
};

export default Header;
