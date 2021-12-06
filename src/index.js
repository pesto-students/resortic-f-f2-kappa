import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "antd/dist/antd.css";

import { Provider } from "react-redux";

import store from "./store/Store/Store";

Sentry.init({
  dsn: "https://8be0ad97e2514e608b9023330aea260d@o1078306.ingest.sentry.io/6086100",
  integrations: [new Integrations.BrowserTracing()],
  environment: "development",
  debug: true,
  release: "resortic-app@0.1.01",
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
