import styled from "styled-components";

export const Body = styled.div`
    width: 100%;
    background: #f1f3f6;
`
export const Wraper = styled.div`
    width: 100%;
    padding: 20px 50px;
    display: flex;
    justify-content: space-between;
    
`
export const Left = styled.div`
    width: 65%;
`
export const Right = styled.div`
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

export const User = styled.div`
    background: white;
    box-shadow: rgb(0 0 0 / 20%) 0px 1px 2px 0px;
`
export const Title = styled.div`
    background:${({ Logedin }) => Logedin ? "#fff" : "#2874f0"} ;
    display: flex;
    padding: 15px 20px;
   
  p{
      text-transform: ${({ Logedin }) => Logedin ? "capitalize" : "uppercase "};
      font-weight: 500;
      font-size: 16px;
      color: ${({ Logedin }) => Logedin ? "#333" : "#fff"};
      margin-left: 20px;
  }  
`

export const Number = styled.div`
    width: 25px;
    height: 25px;
    background: white;
    color:#666 ;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ Logedin }) => Logedin ? "#999" : "#fff"};
`
export const LoginBox = styled.div`
   input{
       width: 100%;
       margin-bottom: 20px;
       padding: 10px 0;
       border: none;

       &:focus{
           outline: none;
       }
   }
   button{
    background: #fb641b;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
    border: none;
    color: #fff;
    padding: 10px 40px;
    cursor: pointer;
    font-size: 16px;
    width: 100%;
   }
`

export const Advantage = styled.div`
    padding-right: 30px;

    p{
        margin: 20px 0;
        font-size: 14px;
        color: #444;
    }
`


export const DelAddress = styled.div`
     background: white;
    box-shadow: rgb(0 0 0 / 20%) 0px 1px 2px 0px;
    margin-top: 20px;
`
export const OrderSum = styled.div`
     background: white;
    box-shadow: rgb(0 0 0 / 20%) 0px 1px 2px 0px;
    margin-top: 20px;
`
export const PamentOp = styled.div`
     background: white;
    box-shadow: rgb(0 0 0 / 20%) 0px 1px 2px 0px;
    margin-top: 20px;
`
export const Type = styled.span`
    height: 20px;
    width: 20px;
    background: rgba(0,0,0,0.2);
    margin-left: 10px;
    padding: 5px;
`
export const AdBody = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-between;
    p{
        margin-bottom: 10px;
        font-size: 14px;
        text-transform: capitalize;
    }
`
export const AdrADD = styled.div`
    width: 100%;
    padding: 20px;

`
export const ComonBTN = styled.button`
    background: #fb641b;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
    border: none;
    color: #fff;  
    padding: ${({ small }) => small ? "10px 20px" : "16px 25px"};
    min-width:${({ small }) => small ? "180px" : "250px"} ;
    text-transform: capitalize;
    border-radius: 2px;
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 10%);
    font-size: 14px;
    font-weight: 500;
    position: relative;
    cursor: pointer;
    outline: none;
`

export const FirstName = styled.p`
    text-transform: capitalize;
    font-weight: 500;
`
export const AddAddress = styled.div`
    width: 100%;
    padding: 20px;
    display:${({ clickedForAdd }) => clickedForAdd ? "flex" : "none"} ;
    justify-content: space-between;
    flex-wrap: wrap;

    input{
        width: 49%;
        padding: 15px;
        margin: 10px 0;
        border: none;
       // outline: none;
      
    }
    textarea{
        width: 100%;
        height: 60px;
        padding: 15px;
        margin: 10px 0;
        border: none;
      //  outline: none;
    }
    select{
        width: 50%;
        padding: 5px;
        border: none;
       
    }
`
export const ShowAddress = styled.div`
    width: 100%;
    display: ${({ edit }) => edit ? "none" : "block"};
    
`
export const EdditeAddress = styled.div`
    display: ${({ edit }) => edit ? "block" : "none"};
    width: 100%;
    padding: 20px;

    
    input{
        width: 49%;
        padding: 15px;
        margin: 10px 0;
        border: none;
       // outline: none;
      
    }
    textarea{
        width: 100%;
        height: 60px;
        padding: 15px;
        margin: 10px 0;
        border: none;
      //  outline: none;
    }
    select{
        width: 50%;
        padding: 5px;
        border: none;
        margin: 10px 0;
    }
`