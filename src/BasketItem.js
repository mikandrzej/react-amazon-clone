import React from "react";
import { useStateValue } from "./StateProvider";
import "./BasketItem.css";

function BasketItem({ id, title, image, price, rating, hideButton }) {
  const dispatch = useStateValue()[1];

  const removeFromBasket = () => {
    console.log({ id, title, image, price, rating });
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="basketItem">
      <img className="basketItem__img" src={image} alt={title} />
      <div className="basketItem__details">
        <p className="basketItem__title">{title}</p>
        <p className="basketItem__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="basketItem__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        {!hideButton && (
          <button className="basketItem__button" onClick={removeFromBasket}>
            Remove from basket
          </button>
        )}
      </div>
    </div>
  );
}

export default BasketItem;
