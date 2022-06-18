import React, { useState } from "react";
import Image from "../Assets/pic.svg";
import weblogo from "../Assets/weblogo.png";
import "../Check/DoCheck.css";
import { Link } from "react-router-dom";

const DoCheck = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    setChecked(!checked);
    setChecked(e.target.value);
  };
  const onProceed = (e) => {
    console.log("clicked");
  };
  return (
    <div className="containee">
      <div className="photo1">
        <div>
          <img className="immge" src={Image} alt="" />
          <div className="account1">
            <h5 className="textt">Don't have an Account?</h5>

            <button type="button" className="btn btn-primary btn-lg bttn">
              LOGIN
              <Link className="link" to="/Login">
                LOGIN
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="form1">
        <div className="logoo">
          <img className="imgg" src={weblogo} alt="" />
        </div>
        <hr />
        <div className="inputputContainer">
          <div className="reg-form">
            <div className="welcome">
              <h4 className="loginInput">WELCOME !</h4>
              <h6>Let's get to know you...</h6>
              <p>Select for whom you want to use Imagility</p>
            </div>
            <div className="self">
              <label htmlFor="">
                <input
                  className="checkbox"
                  type="radio"
                  value={checked}
                  onChange={handleChange}
                />
                For Self
              </label>
              <div className="selfText">
                <i>
                  If you are the beneficiary and need to apply for a visa for
                  yourself then select and proceed.
                </i>
              </div>
            </div>
            <div className="self">
              <label htmlFor="">
                <input type="radio" />
                As a Sponser
              </label>
              <div className="selfText">
                <i>
                  If you are Green card holder or a U.S citizen holding a valid
                  visa and trying to apply for other family members Eg: Spouse,
                  Children, Parents and Siblings Select and proceed to register.
                </i>
              </div>
            </div>
            <div className="self">
              <label htmlFor="">
                <input className="checkbox" type="radio" />
                As a Guardian
              </label>
              <div className="selfText">
                <i>
                  If you want to apply for a visa on behalf of some applicant
                  select and proceed to register.
                </i>
              </div>
            </div>
            <div>
              <button onClick={onProceed} className="submit">
                PROCEED
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoCheck;
