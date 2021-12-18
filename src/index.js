import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import ReactGA from "react-ga";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "antd/dist/antd.css";
// import "swiper/css/bundle";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import store from "./store/Store/Store";

Sentry.init({
  dsn: "https://8be0ad97e2514e608b9023330aea260d@o1078306.ingest.sentry.io/6086100",
  integrations: [new Integrations.BrowserTracing()],
  environment: process.env.REACT_APP_PRODUCTION === "true" ? "production" : "development",
  debug: false,
  release: "resortic-app@0.1.02",
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_CODE);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
