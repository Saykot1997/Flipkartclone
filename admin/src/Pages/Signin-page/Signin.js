import { useContext, useState } from "react"
import Navbar from "../../Components/Navbar/Navbar";
import { Wraper, Body, FormBox, Round1, Round2, Header, Title, Subtitle, InputFilds, EmailField, PasswordField, Input, SubmitFild, Button } from "./Signin.style"
import { authContext } from "../../Context/Admin Context/ContextProvider";
import { actions } from "../../Context/Admin Context/actions";
import axios from "axios"
import { HOST } from "../../Data"

function Signin() {

    const { dispatch } = useContext(authContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();
        dispatch({ type: actions.Login_start });

        const userObj = {
            email,
            password
        }

        if (email && password) {

            try {

                const res = await axios.post(`${HOST}/api/admin/signin`, userObj)
                res && dispatch({ type: actions.Login_success, payload: res.data })
                window.location.replace("/");

            } catch (error) {

                dispatch({ type: actions.Login_failur })
                window.alert("Wrong informations")
            }

        } else {

            window.alert("all fields are required !!")
        }

    }

    return (
        <Wraper>
            <Navbar />
            <Round1 />
            <Round2 />
            <Body>
                <FormBox>
                    <Header>
                        <Title>Singin</Title>
                        <Subtitle>Welcome back please login</Subtitle>
                    </Header>
                    <InputFilds onSubmit={handleSubmit}>
                        <EmailField>
                            <label htmlFor="email" style={{ color: "white", marginLeft: "5px", marginBottom: "20px" }}>Your email</label>
                            <Input type="text" id="email" placeholder="Your Email" onChange={(e) => { setEmail(e.target.value) }} />
                        </EmailField>
                        <PasswordField>
                            <label htmlFor="password" style={{ color: "white", marginLeft: "5px", marginBottom: "20px" }}>Your password</label>
                            <Input type="password" id="password" placeholder="Your Password" onChange={(e) => { setPassword(e.target.value) }} />
                        </PasswordField>
                        <SubmitFild>
                            <Button type="submit">Login</Button>
                        </SubmitFild>
                    </InputFilds>
                </FormBox>
            </Body>
        </Wraper>
    )
}

export default Signin
