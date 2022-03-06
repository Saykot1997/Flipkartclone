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

                if (error.response.data === "Email is not valid") {

                    window.alert("Email is not valid");

                } else if (error.response.data === "firstName should be alphabetic") {

                    window.alert("FirstName should be alphabetic");

                } else if (error.response.data === "lastName should be alphabetic") {

                    window.alert("LastName should be alphabetic");

                } else if (error.response.data === "lowercase:1 upercase:1 number:1 symble:1 require minimus:8 carecter") {

                    window.alert("Password should be 1 lowercase 1 upercase 1 number 1 symble and at least 8 characters");

                } else if (error.response.data === "user alrady register") {

                    window.alert("User already register");

                } else {

                    window.alert("Something went wrong");
                }
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
