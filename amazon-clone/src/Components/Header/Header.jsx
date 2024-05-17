import React from 'react'
import classes from './Header.module.css'
import LowerHeader from './LowerHeader';

import { BiCart } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";

function header() {
  return (
    <> 
   <section>
    <div className={classes.header_container}>

        {/* logo and delivery */}
        <div className={classes.logo_container}>
            {/* logo */}
            <a href="/">
                <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
            </a>
            {/* delivery */}
           <div className={classes.delivery}> 
            <span>
            <SlLocationPin />
            </span>
            <div>
                <p>Deliver to</p>
                <span>Ethiopia</span>
            </div>
            </div>
        </div>

      {/* search section */}
        <div className={classes.search}>
            <select name="" id="">
             <option value="">All</option>
            </select>
            <input type="text" />
            <BsSearch size={25} />
        </div>

        {/* Right sind links */}
        < div className={classes.order_container}>
        <a href="" className={classes.language}>
                <img src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg" alt="" />
                <select name="" id="">
                    <option value="">EN</option>
                </select>
            </a>

         
            
            {/* Three components */}
            <a href=""> 
                    <p>Hello, sign in</p>
                    <span>Account & Lists</span>
                
            </a>
            {/* Orders */}
            <a href="">
                <p>Returns</p>
                <span>& Orders</span>
            </a>
            {/* Cart */}
            <a href="" className={classes.cart}>
            <BiCart size={35}/>
                <span>0</span>
            </a>
        </div>
    </div>
   </section>
   <LowerHeader/>
   </>
);
};

export default header
