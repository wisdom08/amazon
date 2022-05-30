import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Elements} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js/pure";
import store from "./redux/store";
import {Provider} from "react-redux";

const promise = loadStripe(
    "pk_test_51L2fRBDb89segrKMZTU4l2wwLR3J24kkONDn2FjAfyxYfZOF76Rp5dUBlWM3IGxg2aBYugqviNRJkYd59auzb9vE00KfgsPl44"
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <Elements stripe={promise}>
                    <App/>
                </Elements>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
