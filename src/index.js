import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import * as Components from "./utils/component_exporter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="flex flex-wrap items-center m-5 gap-10 justify-center">
      {Object.keys(Components).map((component) => {
        const Component = Components[component];
        return (
          <>
            <div>
              <h3 className="text-xl text-center mb-2">{component}</h3>
              <div
                key={component}
                className="flex flex-col items-center justify-center border-gray-400 p-5 border-2 rounded-xl w-44 h-44"
              >
                <Component />
              </div>
            </div>
          </>
        );
      })}
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
