import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DynamicComponentRouter from "./App";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Router>
        <div className="mx-2 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-10 mt-2 sm:mt-2 md:mt-3 lg:mt-4 xl:mt-7 mb-2 sm:mb-4 md:mb-6 lg:mb-8 xl:mb-10 text-customBlack manrope-300 text-base sm:text-lg">
          <Routes>
            <Route path="/" element={<DynamicComponentRouter />} />
            <Route
              path="/:landingPageParameter"
              element={<DynamicComponentRouter />}
            />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
