// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import * as APIS from "../../../constant/Apis";
// import axios from "../../../axios";
// import classes from "./Admin.module.css";
// import { CustomButton } from "../../atoms/CustomButton/CustomButton";
// import { validateEmail } from "../../../utils/utils";

function Admin() {
  // const params = useParams();
  // console.log("params", params.id);
  // const [userData, setUserData] = useState([]);
  // const [fname, setFname] = useState("");
  // const [lname, setLname] = useState("");
  // const [email, setEmail] = useState("");
  // const [address, setAddress] = useState("");
  // const [mobile, setMobile] = useState("");
  // const [isError, setError] = useState(false);

  // const onSubmit = () => {
  //   axios
  //     .post(APIS.updateUserApi, {
  //       first_name: fname,
  //       last_name: lname,
  //       email: email,
  //       address: address,
  //       id: params.id,
  //       mobile: mobile,
  //     })
  //     .then((res) => {
  //       console.log("res", res);
  //       setError(false);
  //     })
  //     .catch((err) => {
  //       console.log("err", err);
  //     });
  // };

  return (
    <div>
      {/* <h1 style={{ textAlign: "center" }}>Resort Details</h1>
      <div className={classes.container}>
        <input
          type="text"
          placeholder="Resort Name"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Contact Number"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        />
      </div>
      <div className={classes.container}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          value={mobile}
          type="text"
          placeholder="Website"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={classes.container}>
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className={classes.container}>
        <input
          type="text"
          placeholder="City"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          value={mobile}
          type="text"
          placeholder="State"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          value={mobile}
          type="text"
          placeholder="Country"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={classes.container}>
        <input
          type="text"
          placeholder="Pin"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          value={mobile}
          type="text"
          placeholder="Latitude"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          value={mobile}
          type="text"
          placeholder="Longitude"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={classes.container}>
        <input
          type="text"
          placeholder="Starting Price"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          value={mobile}
          type="text"
          placeholder="Category"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={classes.container}>
        <input
          type="text"
          placeholder="Description"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className={classes.container}>
        <input
          type="text"
          placeholder="Major Amenities"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div style={{ textAlign: "right" }}>
        <CustomButton
          onClick={onSubmit}
          style={{
            margin: "10px",
            textSelf: "right",
          }}
        >
          Add Amenities
        </CustomButton>
      </div>
      <div style={{ textAlign: "center" }}>
        <CustomButton
          onClick={onSubmit}
          style={{ margin: "10px", textSelf: "right" }}
        >
          Submit
        </CustomButton>
      </div> */}
    </div>
  );
}

export default Admin;
