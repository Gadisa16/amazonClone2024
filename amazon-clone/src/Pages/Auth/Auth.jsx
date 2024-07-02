import React, { useState, useContext } from 'react';
import classes from './Auth.module.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { auth } from "../../Utility/firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { ScaleLoader } from 'react-spinners';
import { DataContext } from '../../Components/DataProvider/DataProvider';
function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] =useState("");
  const [loanding, setLoading] = useState({
    signIn: false,
    signUp: false
  });
  
  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();
  const navStateData = useLocation();
  const authHandler = async(e) => {
    e.preventDefault();
    if(e.target.name=="signIn"){
      setLoading({...loanding, signIn: true});
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch({
          type: Type.SET_USER,
          user: userCredential.user
        })
        setLoading({...loanding, signIn: false});
        navigate(navStateData?.state?.redirect || "/");
      })
      .catch((error) => {
        setError(error.message);
        setLoading({...loanding, signIn: false});
        navigate("/");
      });
    }
    else if(e.target.name=="signUp"){
      setLoading({...loanding, signUp: true});
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch({
          type: Type.SET_USER,
          user: userCredential.user,
        });
        setLoading({...loanding, signUp: false});
        navigate(navStateData?.state?.redirect || "/");
      })
      .catch((error) => {
        setError(error.message);
        setLoading({...loanding, signUp: false});
        
      });
    }
  };

  return (
    <section className={classes.login}>
      <Link to="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="amazon logo" />
      </Link>

      <div>
        <h1>Sign In</h1>
        {
          navStateData.state.msg && (
            <small
            style={{
                padding: "5px",
                color: "red",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              {navStateData.state.msg}
            </small>
          )
        }
        <form action="">
          <h5>E-mail</h5>
          <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" />
          <h5>Password</h5>
          <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" />
          <button type="submit" name="signIn" onClick={authHandler}>{loanding.signIn ? <ScaleLoader color="yellow" height={10} /> : "Sign In"}</button>
          <p>
            By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use
            & Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>
          
            <button type="submit" name="signUp" onClick={authHandler}>{loanding.signUp? <ScaleLoader height={10} />: "Create your Amazon Account"}</button>
            {
              error && <small style={{paddingTop:"5px", color:"red"}}>{error}</small>
            }
          
        </form>
      </div>
    </section>
      
    
  )
}

export default Auth
