import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as APIS from "../../../constant/Apis";
import axios from "../../../axios";
import classes from "./Profile.module.css";
import { CustomButton } from "../../atoms/CustomButton/CustomButton";
import { validateEmail } from "../../../utils/utils";

function Profile() {
  const params = useParams();
  console.log("params", params.id);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [isError, setError] = useState(false);

  const setUserDataToForm = (data) => {
    console.log("data set", data);
    setFname(data.first_name);
    setLname(data.last_name);
    setEmail(data.email);
    setAddress(data.address);
    setMobile(data.mobile);

    console.log("fname", mobile);
  };

  const getUserData = () => {
    axios
      .get(`${APIS.getUserApi}?id=${params.id}`)
      .then((response) => {
        console.log("response", response);
        setUserDataToForm(response.data.data.data[0]);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    getUserData();
  }, []);

  const onSubmit = () => {
    if (
      !fname ||
      !lname ||
      !email ||
      !validateEmail(email) ||
      !mobile ||
      !address
    ) {
      setError(true);
      return;
    }
    axios
      .post(APIS.updateUserApi, {
        first_name: fname,
        last_name: lname,
        email: email,
        address: address,
        id: params.id,
        mobile: mobile,
      })
      .then((res) => {
        console.log("res", res);
        getUserData();
        setError(false);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <div className={classes.Profile}>
      <h1 style={{ textAlign: "center" }}>Profile</h1>
      {/* <form> */}
      <input
        type="text"
        placeholder="First Name"
        value={fname}
        onChange={(e) => setFname(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lname}
        onChange={(e) => setLname(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input type="text" value={mobile} disabled />
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      {isError && (
        <div style={{ margin: "10px", color: "red" }}>
          All fields are required
        </div>
      )}
      <div style={{ textAlign: "center" }}>
        <CustomButton
          onClick={onSubmit}
          style={{ margin: "10px", textSelf: "right" }}
        >
          Update
        </CustomButton>
      </div>
    </div>
  );
}

export default Profile;
