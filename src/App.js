// React
import React from "react";

// Styling
import "./App.css";

// Custom compnents
import Header from "./layout/Header";
import Generator from "./components/Generator";

const App = () => (
  <div className="containerCenter">
    <Header />
    <Generator />
  </div>
);
export default App;
