import React from "react";
import {
  InstagramOutlined,
  FacebookOutlined,
  GoogleOutlined,
} from "@ant-design/icons";
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={classes.Footer}>
      <div className={classes.info}>
        <div className={classes.title}>reSorTic</div>
        <div>
          It is a Resort Booking website. This project aim to create a resort
          booking system which is used by users/Customers to search and book
          best resorts. Focus mainly on Resorts. User can see different services
          offered by different resorts. Display result according to user search.
        </div>
        <div>
          <InstagramOutlined className={classes.social} />
          <FacebookOutlined className={classes.social} />
          <GoogleOutlined className={classes.social} />
        </div>
      </div>
      <div className={classes.menu}>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="about">
            <li>About</li>
          </Link>
          <Link to="contact-us">
            <li>Contact Us</li>
          </Link>
          <Link to="our-partner">
            <li>Our Partner</li>
          </Link>
        </ul>
        <ul>
          <Link to="help">
            <li>Help</li>
          </Link>
          <Link to="help-center">
            <li>Help Center</li>
          </Link>
          <Link to="privacy-policy">
            <li>Priacy Policy</li>
          </Link>
          <Link to="help">
            <li>FAQ</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
