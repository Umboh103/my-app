import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4 space-y-4">
      <Header title="Test" />
      <Home title="Welcome to Pokedex" />
    </div>
  );
}

export default App;
