import styled from "styled-components";

export const Body = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 20px;
    background-color: #f1f3f6;
`
export const Wraper = styled.div`
    width: 85%;
    display: flex;
    justify-content: space-between;
`

export const Right = styled.div`
    /* width: 33%; */
    width: 100%;
    min-height: 240px;
    background: #fff;
    padding: 10px 20px;
    box-shadow: rgb(0 0 0 / 20%) 0px 1px 2px 0px;
`

export const PriceDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
`
export const Green = styled.p`
    color: green;
`
export const PdetailDiv = styled.div`
    padding: 10px 0;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    p{
        color: #666;
        font-weight: 500;
        font-size: 16px;
    }
`
export const Total = styled.div`
    padding: 20px 0;
    border-top: 1px dotted rgba(0,0,0,0.1) ;
    border-bottom: 1px dotted rgba(0,0,0,0.1);
    display: flex;
    justify-content: space-between;
    h4{
        font-weight: 500;
    }

`
export const Saved = styled.div`
    padding: 10px 0;
    p{
        color: green;
        font-weight: 500;

    }
`