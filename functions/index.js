const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response, request } = require("express");
const stripe = require("stripe")(
  "sk_test_51I601DBzzVbR4oDhJAnJX9qyKgbWExWHT6HE34nTHpTAhiRpuc5RHQgmNXYgeTlvDr38CkamLy8xLm0HAUgdgSoI00ad1ytAzL"
);

//API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  const currency = request.query.currency;

  console.log("Payment request receive ", total, currency);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits
    currency: currency,
  });

  //OK - created
  response.status(201).send({ clientSecret: paymentIntent.client_secret });
});

// Listen
exports.api = functions.https.onRequest(app);

//Example endpoint
// http://localhost:5001/clone-d33ee/us-central1/api
