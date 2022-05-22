import './App.css';
import Layout from "./components/Layout";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
