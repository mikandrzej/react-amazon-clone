import React from "react";
import "./Checkout.css";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.wpexplorer.com%2Fwp-content%2Fuploads%2Fsimple-ads-manager.png&f=1&nofb=1"
          alt=""
        />
        <h2 className="checkout__title">Your shopping basket</h2>
        {/* BasketItem */}
        {/* BasketItem */}
        {/* BasketItem */}
        {/* BasketItem */}
        {/* BasketItem */}
      </div>

      <div className="checkout__right">
        {/* Subtotal */}
        <h2>The subtotal will go here</h2>
      </div>
    </div>
  );
}

export default Checkout;
