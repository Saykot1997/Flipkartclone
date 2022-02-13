import styled from "styled-components";

export const Body = styled.div`
    width: 100%;
   background: #f1f3f6;
   padding: 10px;
   display: flex;
   justify-content: center;
`
export const Wraper = styled.div`
    width: 90%;
    display: flex;
    background: #fff;
`
export const Left = styled.div`
    width: 40%;
    padding-left: 10px;
`
export const Right = styled.div`
    width: 60%;
    padding: 5px 5px 0 20px;
`
export const Thumnail = styled.div`
    height: 448px;
    width: 80px;
    display: flex;
    align-items: center;
    flex-direction: column;

    div{
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border: 1px solid rgba(0,0,0,0.1);

        img{
            width: 40px;
            height: 60px;
            object-fit: cover;
            text-align: center;
        }
    }

`
export const PictureBox = styled.div`
    height: 448px;
    width: 100%;
    border: 1px solid rgba(0,0,0,0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    div{
        width: 100%;
        height: 100%;
        overflow: hidden;

        img{
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }
`
export const ButtonBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-top:10px ;
`
export const AddCard = styled.button`
    padding: 18px 8px;
    border-radius: 2px;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
    width: 48%;
    border: none;
    background: #ff9f00;
    border: none;
    color: #fff;
    font-weight: 500;
    cursor: pointer;
   
`
export const Buy = styled.button`
    background: #fb641b;
    width: 48%;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
    border: none;
    color: #fff;
    padding: 18px 8px;
    border-radius: 2px;
    font-weight: 500;
    transition: box-shadow .2s ease;
    vertical-align: super;
    cursor: pointer;
`
export const Brade = styled.ul`
    display: flex;

    li{
        color: #555;
       font-size: 12px;
    }
    
    a{
       text-decoration: none;
       color: #555;
       font-size: 12px;
       margin-right: 5px;
    }
`
export const ProductName = styled.p`
    margin-top: 10px;
`
export const RProduct = styled.p`
    margin-top: 10px;
    font-size: 14px;
    font-weight: 500;
    color: #2874f0;
    cursor: pointer;
`
export const Price = styled.p`
    margin-top: 10px;
    font-size: 28px;
    font-weight: 500;
 
`
export const Offer = styled.p`
    margin: 10px 0 20px;
    font-size: 16px;
    font-weight: 500;
`
export const Desc = styled.p`
     margin-right: 30px;
     color: #555;
`
export const DescP = styled.p`
    line-height: 24px;
    font-size: 13px;
`
