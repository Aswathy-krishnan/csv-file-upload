import React, { useState } from "react";
import "../../pages/signup/signup.css";
import sub from "/images/Subtract.png";
import { useNavigate } from "react-router-dom";
function Signup() {
  const navigate = useNavigate();
  const [signInDetails, setSignInDetails] = useState({
    email: "",
    password: "",
  });
  const [validate, setValidate] = useState({
    email: {
      isError: false,
      errorMsg: "",
    },
    password: {
      isError: false,
      errorMsg: "",
    },
  });
  const [signInError,setSignInError]=useState("")
  const onchange = (e) => {
    setSignInDetails((preval) => {
      return { ...preval, [e.target.name]: e.target.value };
    });
  };
  const confirmSignIn = () => {
    setSignInError("")
    let isValidation = true;
    setValidate({
      email: {
        isError: false,
        errorMsg: "",
      },
      password: {
        isError: false,
        errorMsg: "",
      },
    });
    if (!signInDetails.email) {
      isValidation = false;
      setValidate((preVal) => {
        return {
          ...preVal,
          email: {
            isError: true,
            errorMsg: "Please enter your email",
          },
        };
      });
    }
    if (!signInDetails.password) {
      isValidation = false;
      setValidate((preVal) => {
        return {
          ...preVal,
          password: {
            isError: true,
            errorMsg: "Please enter your password",
          },
        };
      });
    }
    // isValidation = true;
    if (!isValidation) {
      return;
    }

    console.log(signInDetails);
    if (signInDetails.email == signInDetails.password) {
      console.log("Both are same");
      navigate("/csv-upload")
    } else {
      console.log("Both are different");
      setSignInError("Please enter both email and password same")
    }
  };
  return (
    <div>
      <div className="base md:hidden">
        <img src={sub} alt="" />
        Base
      </div>
      <div className="dashboard-sections">
        <div className="dashboard-sec-1 hidden md:block">
          <div className="dashboard-sec-1-inner">
            <div className="p-3">
              <img src={sub} alt="" className="base-image" />
            </div>
            <div className="text-center text-base ">BASE</div>
            <div className="social-media-icons">
              {/* <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div> */}
              <i className="bi bi-github"></i>
              <i className="bi bi-facebook"></i>
              <i className="bi bi-linkedin"></i>
              <i className="bi bi-instagram"></i>
            </div>
            {/* </div> */}
          </div>
        </div>
        <div className="dashboard-sec-2">
          <div className="sign-in-outer-box">
            <h1 className="sign-in-text">Sign in</h1>
            <p className="sign-in-account">Sign in to your account</p>
            <div className="sign-in-buttons">
              <button className="sign-in-button s-t-c">
                <i className="bi bi-google"></i>
                <span>Sign in with Google</span>
              </button>
              <button className="sign-in-button s-t-c">
                <i className="bi bi-apple"></i>
                <span>Sign in with Apple</span>
              </button>
            </div>
            <div className="login-detail-box">
              <div className="field">
                <label htmlFor="">Email Address</label>
                <input
                  type="email"
                  className="input-field"
                  name="email"
                  onChange={onchange}
                  value={signInDetails.email}
                />
                <span className="error-color">
                  {validate.email.isError && validate.email.errorMsg}
                </span>
              </div>
              <div className="field mt-2">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  className="input-field"
                  name="password"
                  onChange={onchange}
                  value={signInDetails.password}
                />
                <span className="error-color">
                  {validate.password.isError && validate.password.errorMsg}
                </span>
              </div>
              <div className="field mt-2">
                <p className="link-color link">Forgot password?</p>
              </div>
              <div className="field">
                <button className="last-sign-in py-2" onClick={confirmSignIn}>
                  Sign in
                </button>
                <span className="error-color">{!!signInError && signInError}</span>
              </div>
            </div>
            <div className="register">
              <p className="s-t-c">
                Don't have an account?
                <span className="link-color link"> Register here</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
