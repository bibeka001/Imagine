import React, { useState } from "react";
import { Link } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Image from "../Assets/pic.svg";
import "../Register/DoRegister.css";
// import DoCheck from "../Register/DoCheck";
import weblogo from "../Assets/weblogo.png";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  // if (!values.Title) {
  //   errors.Title = "Required";
  // } else if (values.Title.length > 15) {
  //   errors.Title = "Must be Clicked";
  // }
  if (!values.Firstname) {
    errors.Firstname = "Required";
  } else if (values.Firstname.length > 15) {
    errors.Firstname = "Must be 15 characters or less";
  }

  if (!values.Lastname) {
    errors.Lastname = "Required";
  } else if (values.Lastname.length > 10) {
    errors.Lastname = "Must be 10 characters or less";
  }
  if (!values.Phonenumber) {
    errors.Phonenumber = "Required";
  } else if (values.Phonenumber.length > 10) {
    errors.Phonenumber = "Must be 10 numbers";
  }

  if (!values.Email) {
    errors.Email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)) {
    errors.Email = "Invalid Email address";
  }
  if (!values.Username) {
    errors.Username = "Required";
  } else if (values.Username.length > 10) {
    errors.Username = "Must be 10 characters or less";
  }

  if (!values.Password) {
    errors.Password = "Required";
  } else if (values.Password.length > 14) {
    errors.Password = "Must be 14 characters and numbers";
  }
  if (!values.Confirmpassword) {
    errors.Confirmpassword = "Not Matched";
  } else if (values.Confirmpassword.length > 14) {
    errors.Confirmpassword = "Must be 14 characters and numbers";
  }
  if (!values.Checkbox) {
    errors.Checkbox = "Required";
  } else if (values.CheckboxF) {
    errors.Checkbox = "Must be Clicked";
  }
  return errors;
};

const DoRegister = () => {
  const [dataEntry, setDataEntry] = useState("");
  const [midName, setMidName] = useState("");
  const [lastName, setLastName] = useState("");

  const [toggle, setToggle] = useState(false);
  const setInput = (e) => {
    setDataEntry(e.target.value);
    // console.log("e.dude", e.target.value);
  };
  const setOutput = () => {
    setToggle(!toggle);
  };
  console.log("dataExit", dataEntry);
  const [value, setValue] = useState();

  const formik = useFormik({
    initialValues: {
      Title: "",
      Firstname: "",
      Lastname: "",
      Phonenumber: "",
      Email: "",
      Username: "",
      Password: "",
      Confirmpassword: "",
      Checkbox: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="containee">
      <div className="photo1">
        <div>
          <img className="immge" src={Image} alt="" />
          <div className="account1">
            <h5 className="text1">Don't have an Account?</h5>

            <button type="button" className="btn btn-primary btn-lg bttn">
              Register
            </button>
          </div>
        </div>
      </div>
      <div className="form1">
        <div className="logo1">
          <img className="imggg" src={weblogo} alt="" />
        </div>
        <hr />
        <div className="inputContainer1">
          <div className="reg-form1">
            <h5>Let us know the personal details</h5>
            <small className="">
              <i>
                *The information that you provide will be kept secure and will
                not be share for any other purpose.
              </i>
            </small>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="title1">
              <div className="titleinput1">
                <label
                  htmlFor=""
                  placeholder="select"
                  name="Title"
                  className="titleText1"
                >
                  Title
                </label>
                <select className="inputstyle1">
                  <option value="Mr.">Mr.</option>
                  <option value="Mrs.">Mrs.</option>
                  <option value="Miss.">Miss.</option>
                  <option value="Miss.">Ms.</option>
                </select>
              </div>
              <div className="firstName1">
                <label htmlFor="" className="titleText1">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="inputstyle1"
                  name="Firstname"
                  onChange={formik.handleChange}
                  value={formik.values.Firstname}
                />
              </div>
            </div>
            {formik.errors.Firstname ? (
              <div>{formik.errors.Firstname}</div>
            ) : null}

            <div className="title">
              <div className="titleinput1">
                <label htmlFor="" placeholder="select" className="titleText">
                  Middle Name
                </label>
                <input
                  type="text"
                  onChange={setInput}
                  placeholder="Middle Name"
                  value={dataEntry}
                  className="inputstyle"
                />
              </div>
              <div className="lastName1">
                <label htmlFor="" className="titleText1">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="inputstyle1"
                  name="Lastname"
                  onChange={formik.handleChange}
                  value={formik.values.Lastname}
                />
              </div>
            </div>
            {formik.errors.Lastname ? (
              <div>{formik.errors.Lastname}</div>
            ) : null}

            <div className="title1">
              <div className="titleinput1">
                <label
                  htmlFor=""
                  placeholder="select"
                  name="Phonenumber"
                  className="titleText1"
                >
                  Phone Number
                </label>
                <select className="inputstyle1">
                  <option value="Mr.">Mob</option>
                  <option value="Mrs.">land line</option>
                  <option value="Miss.">official</option>
                  <option value="Miss.">satelaite</option>
                </select>
              </div>
              <div className="firstName1">
                <label htmlFor="" className="titleText1"></label>
                <input
                  type="Number"
                  placeholder="Phone Number"
                  className="inputstylePhone1"
                  name="Phonenumber"
                  onChange={formik.handleChange}
                  value={formik.values.Phonenumber}
                />
              </div>
            </div>
            {formik.errors.Phonenumber ? (
              <div>{formik.errors.Phonenumber}</div>
            ) : null}

            <div className="title1">
              <div className="firstName1">
                <label htmlFor="" className="titleText1">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  className="inputstyle1"
                  name="Email"
                  onChange={formik.handleChange}
                  value={formik.values.Email}
                />
              </div>
            </div>
            {formik.errors.Email ? <div>{formik.errors.Email}</div> : null}

            <div className="title1">
              <div className="firstName1">
                <label htmlFor="" className="titleText1">
                  User Name / Id
                </label>
                <input
                  type="text"
                  placeholder="Enter"
                  className="inputstyle1"
                  name="Username"
                  onChange={formik.handleChange}
                  value={formik.values.Username}
                />
              </div>
            </div>
            {formik.errors.Lastname ? (
              <div>{formik.errors.Lastname}</div>
            ) : null}

            <div className="title1">
              <div className="titleinput1">
                <label htmlFor="" placeholder="select" className="titleText1">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="inputstyle1"
                  name="Password"
                  onChange={formik.handleChange}
                  value={formik.values.Password}
                />
              </div>
              {formik.errors.Password ? (
                <div>{formik.errors.Password}</div>
              ) : null}

              <div className="lastName1">
                <label htmlFor="" className="titleText1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="inputstyle1"
                  name="Confirmpassword"
                  onChange={formik.handleChange}
                  value={formik.values.Confirmpassword}
                />
              </div>
            </div>
            {formik.errors.Confirmpassword ? (
              <div>{formik.errors.Confirmpassword}</div>
            ) : null}

            {/* <div className="terms">
          <div className="checkTerms">
            <input type="checkbox" className="conditions" />
            <h5>
              I have read & accepted
              <h4>
                <a href="">Terms & Conditions</a>
              </h4>
            </h5>
          </div>
          <div className="btnn">
            <button className="next">NEXT</button>
          </div>
        </div> */}

            <div className="terms1">
              <label htmlFor="" className="labelInput1">
                <input
                  type="checkbox"
                  name="Checkbox"
                  onChange={formik.handleChange}
                  value={formik.values.Checkbox}
                />
                <small className="sm_Text">I have read and accepted</small>
                <a href="" className="conditions1">
                  Terms & Conditions
                </a>
              </label>
            </div>
            {formik.errors.Checkbox ? (
              <div>{formik.errors.Checkbox}</div>
            ) : null}

            <div className="button1">
              <button className="button_Details1">NEXT</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DoRegister;
