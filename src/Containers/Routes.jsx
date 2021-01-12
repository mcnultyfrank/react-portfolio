import React from "react";
import styles from "./Routes.module.scss";
import Header from "../Components/Header";
import Home from "../Components/Home";
import TechStack from "../Components/TechStack";
import Portfolio from "../Components/Portfolio";
import { Router} from "@reach/router";



const Routes = () => {
  return (
    <>
        <Router>
          <Home path = "/"/>
          <TechStack path = "/skills"/>
          <Portfolio path = "portfolio" />
        </Router>
    </>

  );
};

export default Routes;
