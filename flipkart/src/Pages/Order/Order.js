import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BottomFooter from '../../Components/Footer/BottomFooter'
import { Header } from "../../Components/Header/Header"
import { Menu } from "../../Components/Menu-Header/Menu"
import { Body, Wraper, OrderItem, OdrerImg, Title } from "./Order.style"

export default function Order() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {

        const getOrders = async () => {
            const res = await axios.get("/orders");
            setOrders(res.data);

        }

        getOrders();

    }, []);


    return (
        <div>
            <Header />
            <Menu />
            <Body>
                <Wraper>
                    {
                        orders.length > 0 && orders.map((order) =>
                            order.items.map(item =>
                                <OrderItem>
                                    <OdrerImg>
                                        <img src={`http://localhost:8000/${item.productId.productPicture[0].img}`} />
                                    </OdrerImg>
                                    <div>
                                        <Title>Product Name</Title>
                                        <p>{item.productId.name}</p>
                                    </div>
                                    <div>
                                        <Title>Product Price</Title>
                                        <p>${item.payablePrice}</p>
                                    </div>
                                    <div>
                                        <Title> Pament Status</Title>
                                        <p>{order.paymentStatus}</p>
                                    </div>
                                </OrderItem>
                            )
                        )
                    }

                </Wraper>

            </Body>
            <BottomFooter />

        </div>
    )
}
