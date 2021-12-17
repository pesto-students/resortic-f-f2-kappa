import React from "react";
import { Layout } from "antd";
import "./Layout.css";
import Router from "../../router/Router";

function MainLayout() {

  return (
    <>
      <Layout>
        <Router />
      </Layout>
    </>
  );
}

export default MainLayout;
