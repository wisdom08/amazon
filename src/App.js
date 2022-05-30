import './App.css';
import Layout from "./components/Layout";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import {useEffect} from "react";
import {auth} from "./config/firebase";
import Payment from "./pages/Payment";
import Orders from "./pages/Orders";
import {setUser} from "./redux";
import {useDispatch} from "react-redux";

function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        auth.onAuthStateChanged(authUser => {
            if (authUser) {
                dispatch(setUser(authUser));
            } else {
                dispatch(setUser(null));
            }
        })
    }, []);

  return (
    <div className="App">
        <Routes>
            <Route element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/payment" element={<Payment/>}/>
                <Route path="/orders" element={<Orders/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
