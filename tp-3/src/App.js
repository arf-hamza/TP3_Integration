import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Product from "./pages/product";
import category from "./pages/category";
import page from "./app/page";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={page} />
      <Route path="/product" component={Product} />
      <Route path="/categories" component={category} />
    </Router>
  );
};

export default App;
