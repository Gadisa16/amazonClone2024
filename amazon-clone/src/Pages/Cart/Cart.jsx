import React, { useContext } from 'react';
import Layout from '../../Components/Layout/Layout';
import { DataContext } from '../../Components/DataProvider/DataProvider';
import ProductCard from '../../Components/Product/ProductCard';
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat';
import { Link } from 'react-router-dom';
import classes from './cart.module.css';
import { Type } from '../../Utility/action.type';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const Cart = () => {
  const [{ basket }, dispatch] = useContext(DataContext);

  const total = basket.reduce((amount, item) => item.price * item.amount + amount, 0);

  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  };

  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };

  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.cart_container}>
          <h2>Hello</h2>
          <h3>Your shopping basket</h3>
          <hr />
          {basket?.length === 0 ? (
            <p>OOPS! your cart is empty</p>
          ) : (
            basket.map((item, i) => (
              <section key={i} className={classes.cart_product}>
                <ProductCard
                  product={item}
                  renderDesc={true}
                  renderAdd={false}
                  flex={true}
                />
                <div className={classes.btn_container}>
                  <button className={classes.btn} onClick={() => increment(item)}>
                    <IoIosArrowUp size={20} />
                  </button>
                  <span>{item.amount}</span>
                  <button className={classes.btn} onClick={() => decrement(item.id)}>
                    <IoIosArrowDown size={20} />
                  </button>
                </div>
              </section>
            ))
          )}
        </div>
        
        {/* If the basket is not empty, display the subtotal section */}
        {basket?.length !== 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>Subtotal ({basket?.length} items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>
            <Link to="/payments">Continue to checkout</Link>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Cart;
