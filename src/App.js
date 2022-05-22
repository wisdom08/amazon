import './App.css';
import Layout from "./components/Layout";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route element={<Layout/>}>
                <Route index element={<Home/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
