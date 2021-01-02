import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";

function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={1.23}
        displayType={"text"}
        thousandsSeparator={true}
        suffix={" PLN"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
