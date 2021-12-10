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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis
          fermentum quam. Nam dictum lacinia odio et pretium. Integer volutpat
          erat in viverra rutrum. Praesent auctor orci at quam vehicula, sit
          amet cursus metus consequat. Donec in scelerisque ex. Phasellus
          lacinia justo eget vestibulum euismod.
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
          <li>About Us</li>
          <li>Our Partner</li>
          <li>Contact Us</li>
        </ul>
        <ul>
          <li>Help</li>
          <li>Help Center</li>
          <li>Priacy Policy</li>
          <li>FAQ</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
