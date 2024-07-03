import React from "react";
import { BrowserRouter as Router, Route, Routes, redirect } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Auth from "./Pages/Auth/Auth.jsx";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Results from "./Pages/Results/Results";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Languages from "./Pages/Languages/Languages.jsx";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

const stripePromise = loadStripe(
  "pk_test_51PP27uRqvCY9TD4yqGTdienRsBAmVLEreE12TUJN4Td4FNFoMrkBhHH8bboFw1ykVevu91KszCP8TAZPWujycWNH001iMzN0PU"
);
function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/payments" element={
          <ProtectedRoute msg={"you must login to pay"} redirect={"/payments"}>
            <Elements stripe={stripePromise}>
            <Payment />
            </Elements>
          </ProtectedRoute>
        } />

        <Route path="/orders" element={
          <ProtectedRoute msg={"you must login to see your orders"} redirect={"/orders"}>
            <Orders />
          </ProtectedRoute>
        } />

        <Route path="/category/:categoryName" element={<Results/>}/>
        <Route path="/products/:productId" element={<ProductDetail/>}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/Languages" element={<Languages />} />
      </Routes>
    </Router>
  );
}

export default Routing;