import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {StateProvider} from "./components/StateProvider";
import reducer, {initialState} from "./components/Reducer";
import {Elements} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js/pure";

const promise = loadStripe(
    "pk_test_51L2fRBDb89segrKMZTU4l2wwLR3J24kkONDn2FjAfyxYfZOF76Rp5dUBlWM3IGxg2aBYugqviNRJkYd59auzb9vE00KfgsPl44"
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <StateProvider initialState={initialState} reducer={reducer}>
                <Elements stripe={promise}>
                    <App/>
                </Elements>
            </StateProvider>
        </BrowserRouter>
    </React.StrictMode>
);
