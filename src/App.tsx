import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App flex justify-center items-center w-full h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
