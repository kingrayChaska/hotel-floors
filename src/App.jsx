import React from "react";
import Navbar from "./components/Navbar";
import Dash from "./components/Dash";
import Floor from "./components/Floor";

function App() {
  return (
    <>
      <Navbar />
      <div className="mx-5">
        <Dash />
        <Floor />
      </div>
    </>
  );
}

export default App;
