import React from "react";
import "./Order.css";
import moment from "moment";
import BasketItem from "./BasketItem";
import CurrencyFormat from "react-currency-format";

function Order({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("DD-MM-YYYY HH:mm")}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <BasketItem
          id={item?.id}
          title={item?.title}
          image={item?.image}
          price={item?.price}
          rating={item?.rating}
          hideButton="true"
        />
      ))}
      <CurrencyFormat
        renderText={(value) => <h3>Order total: {value}</h3>}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandsSeparator={true}
        suffix={" PLN"}
      />
    </div>
  );
}

export default Order;
