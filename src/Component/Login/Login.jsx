import React, { useState } from "react";
import { Link, useLinkClickHandler } from "react-router-dom";
import Image from "../Assets/pic.svg";
import DoRegister from "../Register/DoRegister";
import DoCheck from "../Check/DoCheck";
import { Button } from "bootstrap";
import weblogo from "../Assets/weblogo.png";
import "../Login/Login.css";
import { useFormik } from "formik";
const validate = values => {
  const errors = {};
  if (!values.Username) {
    errors.Username = 'Required';
  } else if (values.Username.length > 15) {
    errors.Username = 'Must be 15 characters or less';
  }

  if (!values.Password) {
    errors.Password = 'Required';
  } else if (values.Password.length > 20) {
    errors.Password = 'Must be 20 characters or less';
  }

  return errors;
};
const Login = () => {
  const [dataEntry, setDataEntry] = useState("");
  const [dataOutput, setDataOutput] = useState("");
  const [userName, setUserName] = useState("");

  const setInput = (e) => {
    setDataEntry(e.target.value);
    console.log(dataEntry);
  };
  const setOutput = (e) => {
    setDataOutput(e.target.value);
    console.log(dataOutput);
  };
  
  const handler =(formData)=>{
console.log("formData",formData)
setUserName(formData.Username)
console.log("userName",userName);


  }   
  const formik = useFormik({
    initialValues: {
      Username: "",
      Password: "",
      hjello:""
    },
    validate,
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
      handler(values)
    },
  });

  return (
    <>
      <div className="containe">
        <div className="photo">
          <div>
            <img className="immg" src={Image} alt="" />
            <div className="account">
              <h5 className="text">Don't have an Account?</h5>

              <button type="button" className="btn btn-primary btn-lg bttn">
                {/* <Link className="link" to="/DoCheck">REGISTER </Link> */}
                REGISTER
              </button>
            </div>
          </div>
        </div>
        <div className="form">
          <div className="logo">
            <img className="imggg" src={weblogo} alt="" />
          </div>
          <hr />
          <div className="inputContainer">
            <div className="reg-form">
              <h2 className="loginInput">LOGIN</h2>

              <form onSubmit={formik.handleSubmit}>
                <div className="title">
                  <div className="titleinput">
                    <label
                      htmlFor=""
                      placeholder="select"
                      className="titleText"
                    >
                      Username/Id
                    </label>
                    <input
                      id="Username"
                      name="Username"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.Username}
                    />
                  </div>
                </div>
                {formik.errors.Username ? <div>{formik.errors.Username}</div> : null}

                <div className="titleinput">
                  <label htmlFor="" placeholder="select" className="titleText">
                    Password
                  </label>
                  <input
                    id="Password"
                    name="Password"
                    type="Password"
                    onChange={formik.handleChange}
                    value={formik.values.Password}
                  />
                </div>
                {formik.errors.Password ? <div>{formik.errors.Password}</div> : null}


                <div className="forgetDetails">
                  <div className="forgetUsername">
                    <a href="">Forget my User Name/ID</a>
                  </div>
                  <div className="forgetPassword">
                    <a href="">I forgot my Password</a>
                  </div>
                  <button className="signin" type="submit">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
