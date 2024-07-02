import React, { useContext, useState, useEffect } from 'react';
import Layout from "../../Components/LayOut/LayOut";
import { db } from '../../Utility/firebase';
import { DataContext } from "../../Components/DataProvider/DataProvider";
import classes from './Orders.module.css';
import ProductCard from "../../Components/Product/ProductCard.jsx";

import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

function Orders() {
  const [{ user }, dispatch] = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
  const ordersRef = collection(db, "users", user.uid, "orders");
  const q = query(ordersRef, orderBy("created", "desc"));

  const unsubscribe = onSnapshot(q, (snapshot) => {
    setOrders(snapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    })));
  });

  return () => unsubscribe();
} else {
  setOrders([]);
}
  }, [user]);

  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.orders_container}>
          <h2>Your Orders</h2>
          {orders?.length === 0 && (
            <div style={{ padding: "20px" }}>You don't have orders yet.</div>
          )}
          <div>
            {orders?.map((eachOrder, i) => (
              <div key={i}>
                <hr />
                <p>Order ID: {eachOrder?.id}</p>
                {eachOrder?.data?.basket?.map((order) => (
                  <ProductCard
                    flex={true}
                    product={order}
                    key={order?.id}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Orders;
