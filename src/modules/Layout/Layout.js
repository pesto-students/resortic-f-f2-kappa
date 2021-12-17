import React, {useEffect} from "react";
import { Layout } from "antd";
import ReactGA from "react-ga";
import "./Layout.css";
import Router from "../../router/Router";

function MainLayout() {

  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_CODE);
  });

  return (
    <>
      <Layout>
        <Router />
      </Layout>
    </>
  );
}

export default MainLayout;
