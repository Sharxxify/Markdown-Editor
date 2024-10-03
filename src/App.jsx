import FinalMarkdown from "./stuff/mark";
import Header from "./stuff/header"
import React from "react";
import { Toaster } from "react-hot-toast";
import "./index.css"

function App() {
  return (
    <>
      <div className="start">
        <Toaster />
        <Header/>
        <FinalMarkdown/>
      </div>
    </>
  );
}

export default App;