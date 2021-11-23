import styled from "styled-components";

export const Wraper = styled.div`
    width: 15%;
   min-height:calc(100vh - 60px);
   background:linear-gradient(#1ab195 ,#91c944); //  
`;

export const Ul = styled.ul`
    list-style-type: none;

    a{
        color: #fff;
        text-decoration: none;
    }

    li{
        text-align: center;
        list-style: none;
        margin-top: 10px;
        padding: 15px;
        transition:.5s ease;
    }

    .selected{
        li{
            background: rgba(255,255,255,.3);
            color: #333;
        }
    }
`;