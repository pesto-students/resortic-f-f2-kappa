import React from "react";
import classes from "./Contact.module.css";
import sanketPhoto from "../../../assets/sanket-photo.jpg";
import sachiPhoto from "../../../assets/sachi-photo.jpg";
import saiPhoto from "../../../assets/sai-photo.jpg";
function Contact() {
  return (
    <div className={classes.Contact}>
      <div className={classes.card}>
        <img src={sachiPhoto} />
        <div className={classes.info}>
          <h4>
            <span className={classes.label}>Name :&nbsp;&nbsp;</span>
            <span>Sachi Kanta Sahu</span>
          </h4>
          <h4>
            <span className={classes.label}>Email :&nbsp;&nbsp;</span>
            <span>sahu.sachikanta02@gmail.com</span>
          </h4>
          <h4>
            <span className={classes.label}>Mobile :&nbsp;&nbsp;</span>
            <span>8327760868</span>
          </h4>
        </div>
      </div>
      <div className={classes.card}>
        <img src={sanketPhoto} />
        <div className={classes.info}>
          <h4>
            <span className={classes.label}>Name :&nbsp;&nbsp;</span>
            <span>Sanket Mangesh Zende</span>
          </h4>
          <h4>
            <span className={classes.label}>Email :&nbsp;&nbsp;</span>
            <span>sanketzende95@gmail.com</span>
          </h4>
          <h4>
            <span className={classes.label}>Mobile :&nbsp;&nbsp;</span>
            <span>8793078316</span>
          </h4>
        </div>
      </div>
      <div className={classes.card}>
        <img style={{ transform: "scaleX(-1)" }} src={saiPhoto} />
        <div className={classes.info}>
          <h3>
            <span className={classes.label}>Name :&nbsp;&nbsp;</span>
            <span> Sai Satish </span>
          </h3>
          <h4>
            <span className={classes.label}>Email :&nbsp;&nbsp;</span>
            <span>sai.m.r.sathish@gmail.com</span>
          </h4>
          <h4>
            <span className={classes.label}>Mobile :&nbsp;&nbsp;</span>
            <span>9036797539</span>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Contact;
