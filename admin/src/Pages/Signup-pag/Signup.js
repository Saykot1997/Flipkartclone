import { useState } from "react";
import axios from "axios";
import Navbar from "../../Components/Navbar/Navbar";
import { Wraper, Body, FormBox, Round1, Round2, Header, Title, Subtitle, InputFilds, FirstNameField, LastNameField, EmailField, PasswordField, Input, SubmitFild, Button } from "./Singup-style";
import { HOST } from "../../Data"


function Signup() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        const userObj = {
            firstName,
            lastName,
            email,
            password
        }

        if (firstName && lastName && email && password) {

            try {

                const res = await axios.post(`${HOST}/api/admin/signup`, userObj);
                res.status === 200 && window.location.replace("/signin");

            } catch (error) {

                window.alert("There is a probleme in creating the user.Tty diffrent informations.")
            }
        } else {

            window.alert("all files are required !!")
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
                        <Title>Singup</Title>
                        <Subtitle>Welcome to the registation page</Subtitle>
                    </Header>
                    <InputFilds onSubmit={handleSubmit}>
                        <FirstNameField >
                            <Input type="text" placeholder="Your First Name" onChange={(e) => { setFirstName(e.target.value) }} />
                        </FirstNameField>
                        <LastNameField>
                            <Input type="text" placeholder="Your Last Name" onChange={(e) => { setLastName(e.target.value) }} />
                        </LastNameField>
                        <EmailField>
                            <Input type="text" placeholder="Your Email" onChange={(e) => { setEmail(e.target.value) }} />
                        </EmailField>
                        <PasswordField>
                            <Input type="password" placeholder="Your Password" onChange={(e) => { setPassword(e.target.value) }} />
                        </PasswordField>
                        <SubmitFild>
                            <Button type="submit"> Submit</Button>
                        </SubmitFild>
                    </InputFilds>
                </FormBox>
            </Body>
        </Wraper>
    )
}

export default Signup
