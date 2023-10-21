import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Userdashbord from "./pages/Userdashbord";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App flex justify-center items-center w-full h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Userdashbord />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
