import React, {useEffect, useState} from 'react';
import "../styles/Orders.css"
import {db} from "../config/firebase";
import Order from "./Order";
import {useSelector} from "react-redux";

function Orders() {
    const [orders, setOrders] = useState([]);
    const user = useSelector((state) => state.user.user);

    useEffect(() => {
        if (user){
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .orderBy('created', 'desc')
                .onSnapshot(snapshot => (
                    setOrders(snapshot.docs.map(doc => ({
                        id:doc.id,
                        data:doc.data()
                    })))
                ))
        } else {
            setOrders([])
        }


    }, [user])


    return (
        <div className="orders">
            <h1> 주문내역 </h1>

            <div className='orders_order'>
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>

        </div>
    );
}

export default Orders;
