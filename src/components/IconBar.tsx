import React from "react";
import style from "../styles/header.module.css";
import Bell from "../iconComponents/Bell"
import Diamond from "../iconComponents/Diamond"
import ShopingBag from "../iconComponents/ShoppingBag"

const IconBar = () => {
  return (
    <div className={style.icons}>
      < Diamond className={style.diamond}/>
      < Bell className={style.bell} />
      < ShopingBag className={style.bag} />
    </div>
  );
};

export default IconBar;
