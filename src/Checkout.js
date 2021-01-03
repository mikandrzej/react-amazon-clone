import React from "react";
import BasketItem from "./BasketItem";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.wpexplorer.com%2Fwp-content%2Fuploads%2Fsimple-ads-manager.png&f=1&nofb=1"
          alt=""
        />
        <h2 className="checkout__title">Your shopping basket</h2>
        {basket.map((item) => (
          <BasketItem
            id={item?.id}
            title={item?.title}
            image={item?.image}
            price={item?.price}
            rating={item?.rating}
          />
        ))}
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
