import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import PostDetail from "./components/PostDetail";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import AdminPage from "./components/AdminPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/loginpage" element={<LoginPage />}></Route>
        <Route path="/detail/:photoId" element={<PostDetail />}></Route>
        <Route path="/adminpage" element={<AdminPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
