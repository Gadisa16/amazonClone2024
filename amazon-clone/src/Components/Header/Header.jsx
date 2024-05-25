import React, { useContext } from 'react'
import classes from './Header.module.css'
import LowerHeader from './LowerHeader';
import { Link } from 'react-router-dom';
import { BiCart } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { DataContext } from '../DataProvider/DataProvider';

const header = ()=> {

    const [{basket},dispatch] = useContext(DataContext)
    // console.log(basket.length)
    const totalItem=basket?.reduce((amount,item)=>{
        return item.amount + amount
    },0)




  return (
    <section className={classes.fixed}> 
   <section>
    <div className={classes.header_container}>

        {/* logo and delivery */}
        <div className={classes.logo_container}>
            {/* logo */}
            <Link to="/" >
                <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
            </Link>
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
        <Link to="" className={classes.language}>
                <img src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg" alt="" />
                <select name="" id="">
                    <option value="">EN</option>
                </select>
            </Link>

         
            
            {/* Three components */}
            <Link to=""> 
                    <p>Hello, sign in</p>
                    <span>Account & Lists</span>
                
            </Link>
            {/* Orders */}
            <Link to="/orders">
                <p>Returns</p>
                <span>& Orders</span>
            </Link>
            {/* Cart */}
            <Link to="/cart" className={classes.cart}>
            <BiCart size={35}/>
                <span>{totalItem}</span>
            </Link>
        </div>
    </div>
   </section>
   <LowerHeader/>
   </section>
);
};

export default header
