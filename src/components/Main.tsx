import React from "react";
import rectangle from "../images/Images/Rectangle 115.png";
import style from "../styles/main.module.css";

const Main = () => {
  return (
    <>
      <div className={style.mainPicture}>
        <h1>
          ReDesign <span>precious</span> things!
        </h1>
        <h2>To the shop </h2>
        <div className={style.rectangle}>
          <img src={rectangle} />
        </div>
      </div>
      <div className={style.mainPicture2}></div>
    </>
  );
};

export default Main;
