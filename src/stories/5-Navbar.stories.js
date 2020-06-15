import React from "react";
import Navbar from "../components/Navbar";
import { HashRouter as Router } from "react-router-dom";

export default {
  title: "Navbar",
};

export const Simple = () => <Router>
    <Navbar />
</Router>;
