import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Navbar from "./components/Navbar";
import './components/styles/app.css'
import AddItemPage from "./Pages/AddItemPage";

function App() {
  return (
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>} />      
        <Route path="/additem" element={<AddItemPage/>} />      
      </Routes>
      </BrowserRouter>
  );
}

export default App;
