import styled from "styled-components";

export const Left = styled.div`
    width: ${({ full }) => full ? "100%" : "65%"};
    min-height: ${({ small }) => small ? "auto" : "350px"};
    background: #fff;
    box-shadow: rgb(0 0 0 / 20%) 0px 1px 2px 0px;
    display: ${({ offbtn }) => offbtn ? "none" : "block"};
`
export const HeaderArea = styled.div`
    width: 100%;
    height: 60px;
    padding: 20px;
    display: ${({ title }) => title ? "none" : "flex"};
    justify-content: space-between;
    border-bottom: 1px solid rgba(0,0,0,0.1);
`
export const CartTitle = styled.div`
   margin: 0 10px;
   p{
       font-weight: 500;
       font-size: 18px;
   }
`
export const Photofield = styled.div`
    width: 15%;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width: 70%;
        height: 120px;
    }

`
export const Textfield = styled.div`
    width: 60%;   
    padding:0 20px;
    p{
        margin: 10px 0;
        color: #666;
        font-size: 13px;
        span{
            color: green;
            font-size: 14px;
            font-weight: 500;
            margin-left: 10px;
        }
    }
`
export const Name = styled.h5`
    font-size: 16px;
    font-weight: 400;
`
export const Delevery = styled.div`
    width: 25%;  
    p{
        margin-top: 10px;
        color: #666;
        font-size: 15px ;
        font-weight: 500;
    } 
`
export const Order = styled.button`
    background: #fb641b;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
    border: none;
    color: #fff;  
    padding: 16px 30px;
    min-width: 250px;
    text-transform: uppercase;
    border-radius: 2px;
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 10%);
    font-size: 16px;
    font-weight: 500;
    position: relative;
    cursor: pointer;
    outline: none;
`

export const Search = styled.div`
   display: flex;
   justify-content: space-between;
    margin-bottom: -5px;
   padding-bottom: 5px;
   border-bottom: 2px solid #2874f0;
`
export const DeliveryTo = styled.p`
   color: #666;
   margin-right:10px;
   font-size: 14px;
   font-weight: 500;
`
export const SearchInput = styled.input`
   border: none;
   outline: none;
   margin-right: 40px;
   &:focus{
       outline: none;
   }
   &::placeholder{
       color: #666;
       font-size: 14px;
       font-weight: 500;
   }
`

export const Check = styled.div`
   color: #666;
   font-size: 14px;
   font-weight: 500;
`

export const Midd = styled.div`
    width: 100%;
    padding: 20px;

`
export const ControlBox = styled.div`
  display: flex;
  margin-right: 20px;
`

export const Display = styled.div`
   display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0,0,0,0.1);
  height: 30px;
  width: 30px;
  margin-right: 10px;
`
export const Dicriment = styled.div`
   display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0,0,0,0.1);
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
`

export const Incriment = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0,0,0,0.1);
  height: 30px;
  width: 30px;
  border-radius: 50%;
  cursor: pointer;
`
export const Bottom = styled.div`
    width: 100%;
    padding: 10px;
    text-align: right;
    height: 70px;
    box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
   // display: ${({ offbtn }) => offbtn ? "none" : "block"};
`
