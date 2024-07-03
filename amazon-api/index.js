const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_KEY);

// if (!process.env.STRIPE_KEY) {
//     throw new Error("Stripe API key is not set in environment variables");
// }

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Success!"
    });
});

app.post("/payment/create", async (req, res) => {
    const total = parseInt(req.query.total);

    if (total > 0) {
        try {
            const paymentIntent = await stripe.paymentIntents.create({
                amount: total,
                currency: "usd"
            });
            res.status(201).json({
                clientSecret: paymentIntent.client_secret,
            });
        } catch (error) {
            console.error("Error creating payment intent:", error);
            res.status(500).json({
                message: "Internal Server Error",
                error: error.message
            });
        }
    } else {
        res.status(403).json({
            message: "Total must be greater than zero"
        });
    }
});

const port = 3333;

app.listen(port, (err) => {
    if (err) {
        throw err;
    }
    console.log(`Amazon server running on port: ${port}`);
    console.log(`Visit https://localhost:${port}`);
});