import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import { Link, useHistory } from "react-router-dom";
import instance from "./axios";
import BasketItem from "./BasketItem";
import { db } from "./firebase";
import "./Payment.css";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";

function Payment() {
  // eslint-disable-next-line
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    //generate the special stripe secret which allows us to charge a customer

    const getClientSecret = async () => {
      const response = await instance({
        method: "post",
        //stripe expexts the total in a curenncies subunits
        url: `/payments/create?currency=PLN&total=${
          getBasketTotal(basket) * 100
        }`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    // eslint-disable-next-line
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: "Mikolaj Andrzejewski",
          },
        },
      })
      .then(({ paymentIntent }) => {
        //payment intent = payment confirmation

        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({ type: "EMPTY_BASKET" });

        history.replace("/orders");
      });
  };

  const handleChange = (e) => {
    //Listen for changes in CardElement
    // display any errors as the customer types their card details
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        {/* Payment section - delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Adddress</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        {/* Payment section - Review items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
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
        </div>
        {/* Payment section - Payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Method</h3>
          </div>
          <div className="payment__details">
            {/* Stripe magic will go */}
            <form onSubmit={handleSubmit}>
              <CardElement className="payment__card" onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandsSeparator={true}
                  suffix={" PLN"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
