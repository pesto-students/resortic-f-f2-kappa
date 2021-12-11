import React from "react";
import { Skeleton } from "antd";
import LoadingComponent from "../components/atoms/LoadingComponent/LoadingComponent";
function WithLoading(Component) {
  return function withLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return <Skeleton active />;
  };
}

export default WithLoading;
