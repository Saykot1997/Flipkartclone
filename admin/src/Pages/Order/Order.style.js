import styled from "styled-components";

export const Wraper = styled.div`
    width: 100%;
    height: 100vh;
`;

export const Body = styled.div`
  display: flex;
  width: 100%;
  height: calc(100% - 60px);
`;

export const Container = styled.div`
  width: 85%;
  height: 100%;
`;

export const OrderItem = styled.div`
    background: white;
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: capitalize;
    padding: 10px 40px;
    margin: 20px 0;
    box-shadow: 0 0 4px rgb(0 0 0 / 30%)
`
export const OdrerImg = styled.div`
    
    height: 100%;

    img{
        height: 100%;
    }
   
`
export const Section = styled.div`
    p{
      margin: 10px 0;
      text-align: center;
    }
   
`
export const Heading = styled.h3`
    font-size: 1.5rem;
    text-align: center;
    margin-top: 10px;
`
export const P = styled.p`
    font-size: 16px;
    font-weight: 600;
    
`
export const ChangeStatus = styled.select`
    padding: 5px 10px;
    margin-right: 10px;
`
export const ChangeStatusBTN = styled.button`
    padding: 5px 10px;
    margin-left: 10px;
    border: none;
    cursor: pointer;
`


