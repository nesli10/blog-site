import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import PostDetail from './components/PostDetail';
import {Routes,Route} from "react-router-dom";
import LoginPage from './components/LoginPage';


function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/loginPage" element={<LoginPage />}></Route>
      <Route path="/detail/:photoId" element={<PostDetail />}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
