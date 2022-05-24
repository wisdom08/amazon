const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51L2fRBDb89segrKMdVlcxeD6jdJfRPgMkg" +
    "fHgtS5fUWOFokJ7Jpax0UwlbqITVvqBYCiyfOTao9mlG6JphIzzBcu00q9XkRqGp"
);

const app = express();

app.use(cors({origin: true}));
app.use(express.json());

app.get("/", (req, res) => res.status(200).send("안녕"));

app.post("/payments/create", async (req, res) => {
    const total = req.query.total;
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    })
    res.status(201).send({
            clientSecret: paymentIntent.client_secret
        }
    )
})

exports.api = functions.https.onRequest(app);
