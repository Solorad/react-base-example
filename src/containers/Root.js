import React, { Component } from "react";
import { Header } from "src/containers";

const Root = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);

export default Root;
