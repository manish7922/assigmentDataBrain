import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import React,{useState} from 'react'
import Navbar from './navbar'
import { Redirect, Route, Switch } from "react-router-dom";
import { ShowProducts } from "./showProducts";

export default function mainComponent() {
  return (
    <div className="container">
<Navbar />
<Switch>
<Route path="/" component={ShowProducts} />
</Switch>
    </div>
  )
}
