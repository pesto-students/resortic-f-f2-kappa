import React from "react";
import LoadingComponent from "../components/atoms/LoadingComponent/LoadingComponent";
function WithLoading(Component) {
  return function withLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return <LoadingComponent />;
  };
}

export default WithLoading;
