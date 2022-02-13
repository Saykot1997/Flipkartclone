import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import BottomFooter from '../../Components/Footer/BottomFooter'
import { Header } from "../../Components/Header/Header"
import { Menu } from "../../Components/Menu-Header/Menu"
import { Body, Wraper, OrderItem, OdrerImg, Title } from "./Order.style"
import { Host } from '../../data';
import { UserContext } from '../../Context/User/UserContextProvider';

export default function Order() {

    const [orders, setOrders] = useState([]);
    const { user } = useContext(UserContext);

    useEffect(() => {

        try {

            const getOrders = async () => {
                const res = await axios.get(`${Host}/api/orders`, {
                    headers: {
                        "Authorization": `Bearer ${user.token}`
                    }
                });

                setOrders(res.data);
            }

            user && getOrders();

        } catch (error) {

            console.log(error);
        }

    }, []);


    return (
        <div>
            <Header />
            <Menu />
            <Body>
                <Wraper>
                    {
                        orders.length > 0 ? orders.map((order) =>
                            order.items.map(item =>
                                <OrderItem>
                                    <OdrerImg>
                                        <img src={`${Host}/${item.productId.productPicture[0].img}`} alt="" />
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
                                        <Title>Delevery Status</Title>
                                        <p>{order.orderStatus[0].type}</p>
                                    </div>
                                </OrderItem>
                            )
                        )
                            :
                            <div>
                                <h3 style={{ margin: "10px 0 20px", color: "red", textAlign: "center" }}>No Orders</h3>
                            </div>
                    }

                </Wraper>

            </Body>
            <BottomFooter />

        </div>
    )
}
