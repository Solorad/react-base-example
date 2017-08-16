import React, { Component } from "react";
import { Header } from "../components";

const Root = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);

export default Root;
