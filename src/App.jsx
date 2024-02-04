import React from "react";
import Navbar from "./components/Navbar";
import Dash from "./components/Dash";
import Floor from "./components/Floor";
import Room from "./components/Room";

function App() {
  return (
    <>
      <Navbar />
      <div className="mx-3">
        <Dash />
        <Floor />
        <Room />
      </div>
    </>
  );
}

export default App;
