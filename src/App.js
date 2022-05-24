import './App.css';
import Layout from "./components/Layout";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import {useEffect} from "react";
import {auth} from "./config/firebase";
import {useStateValue} from "./components/StateProvider";
import Payment from "./pages/Payment";
import Orders from "./pages/Orders";

function App() {

    const [{Basket, user}, dispatch] = useStateValue();
    useEffect(() => {
        auth.onAuthStateChanged(authUser => {
            if (authUser) {
                dispatch({
                    type:'SET_USER',
                    user: authUser,
                })
            } else {
                dispatch({
                    type:'SET_USER',
                    user: null
                })
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
