import Navbar from "../../Components/Navbar/Navbar"
import { Wraper, Body, Container, Title } from "./Home.style"
import Sidebar from "../../Components/Sidebar/Sidebar"

function Home() {

    return (
        <Wraper>
            <Navbar />
            <Body>
                <Sidebar />
                <Container>
                    <Title>Welcome to the Admin Dashboard</Title>
                </Container>
            </Body>
        </Wraper>
    )
}

export default Home
