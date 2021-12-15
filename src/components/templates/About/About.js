import React from "react";
import classes from "./About.module.css";
function About() {
  return (
    <div className={classes.About}>
      <div>
        <h1 className={classes.title}>reSorTic</h1>
        <span className={classes.text}>
          It is a Resort Booking website. This project aim to create a resort
          booking system which is used by users/Customers to search and book
          best resorts. Focus mainly on Resorts. User can see different services
          offered by different resorts. Display result according to user search.
        </span>
      </div>
      <hr></hr>
      <div>
        <h1 className={classes.subtitle}>So why we need reSorTic?</h1>
        <span className={classes.text}>
          People easily get information about resorts only. To remove hassle of
          looking through various websites, google maps, listening to friends
          suggestions. In other website it is very difficult to differentiate
          between hotels and resorts Since we provide exclusively resorts, hence
          no confusion for vacationers. Provides a one stop shop for any
          vacationer looking to book a resort for their vacation. They can see
          the amenities and services of particular resorts.
        </span>
      </div>
    </div>
  );
}

export default About;
