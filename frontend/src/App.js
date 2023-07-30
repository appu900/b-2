import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Token from "./pages/Token";
import SignIn from "./pages/SignIn";
import Signup from "./pages/Content";
import AdminBoard from "./pages/AdminBoard";
import Content from "./pages/Content";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<Token />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/content" element={<Content />} />
      </Routes>
    </div>
  );
}

export default App;
