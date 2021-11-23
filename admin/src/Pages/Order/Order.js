import Navbar from "../../Components/Navbar/Navbar"
import { Wraper, Body, Container, OrderItem, OdrerImg, Heading, Section, P, ChangeStatus, ChangeStatusBTN } from "./Order.style"
import Sidebar from "../../Components/Sidebar/Sidebar"
import { useContext, useEffect, useState } from "react";
import axios from "axios"
import { OrdersContext } from "../../Context/Order Context/OrdersContextProvider";
import Ordersactions from "../../Context/Order Context/Orders.actions";

function Order() {

    const { Orders, OrdersDispatch } = useContext(OrdersContext);
    const [orderStatus, setOrderStatus] = useState('');

    useEffect(() => {

        const grtOrders = async () => {
            const res = await axios.get("/admin/orders");
            OrdersDispatch({ type: Ordersactions.Feaching_success, payload: res.data })
        }
        grtOrders()
    }, [])

    const changeOrderStatus = async (order) => {

        const neworderStatus = [{ ...order.orderStatus[0], type: orderStatus }]

        const res = await axios.put(`/admin/orders/${order._id}`, { orderStatus: neworderStatus })
        if (res.status === 200) {
            const res = await axios.get("/admin/orders");
            OrdersDispatch({ type: Ordersactions.Feaching_success, payload: res.data })
            setOrderStatus("")
        }

    }

    return (
        <Wraper>
            <Navbar />
            <Body>
                <Sidebar />
                <Container>
                    <div>
                        <Heading>All Orders</Heading>
                        {
                            Orders && Orders.map((order) =>
                                order.items.map(item =>
                                    <OrderItem>
                                        <OdrerImg>
                                            <img src={`http://localhost:8000/${item.productId.productPicture[0].img}`} />
                                        </OdrerImg>
                                        <Section>
                                            <P>Product Name</P>
                                            <p>{item.productId.name}</p>
                                        </Section>
                                        <Section>
                                            <P>Quantity</P>
                                            <p>{item.purchasedQty}</p>
                                        </Section>
                                        <Section>
                                            <P>payable Price</P>
                                            <p>${item.payablePrice}</p>
                                        </Section>
                                        <Section>
                                            <P>Payment Type</P>
                                            <p>{order.paymentType}</p>
                                        </Section>
                                        <Section>
                                            <P>Payment Status</P>
                                            <p>{order.paymentStatus}</p>
                                        </Section>
                                        <Section>
                                            <P>Order Type</P>
                                            <p>{order.orderStatus[0].type}</p>
                                            <ChangeStatus onChange={(e) => setOrderStatus(e.target.value)}>
                                                <option >Change Status</option>
                                                <option value="ordered">Ordered</option>
                                                <option value="packed">Packed</option>
                                                <option value="shipped">Shipped</option>
                                                <option value="delevered">Delevered</option>
                                            </ChangeStatus>
                                            <ChangeStatusBTN onClick={() => { changeOrderStatus(order) }}>Save Change</ChangeStatusBTN>
                                        </Section>

                                    </OrderItem>
                                )
                            )
                        }
                    </div>
                </Container>
            </Body>
        </Wraper>
    )
}

export default Order
