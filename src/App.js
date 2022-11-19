import { BrowserRouter } from "react-router-dom";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import './components/styles/app.css'

function App() {
  return (
      <BrowserRouter>
      <Navbar/>
      <Homepage/>
      </BrowserRouter>
  );
}

export default App;
