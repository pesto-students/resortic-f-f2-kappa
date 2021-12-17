import React from "react";
import { Skeleton } from "antd";

function WithLoading(Component) {
  return function withLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return <Skeleton active />;
  };
}

export default WithLoading;
