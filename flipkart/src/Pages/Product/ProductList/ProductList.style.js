import styled from "styled-components";

export const Body = styled.div`
    width: 100%;
   background: #f1f3f6;
`

export const Wraper = styled.div`
    background: white;
    margin: 10px;
    border-top: 1px solid #cecece;
    border-bottom: 1px solid #cecece;
    box-shadow: 0 2px 2px -2px #333;
`

export const WraperBox = styled.div`
   display: flex;
   justify-content: space-between;
   margin: 10px;
`
export const FilterSec = styled.div`
    background: white;
    box-shadow: 0 2px 2px -2px #333;
    width: 20%;
`
export const ProductSec = styled.div`
    background: white;
    box-shadow: 0 2px 2px -2px #333;
    width: 79%;
    display: flex;
    flex-wrap: wrap;
`

export const SPIMG = styled.div`
   height: 240px;
   width: 180px;
   display: flex;
   justify-content: center;
   align-items: center;
   img{
       height: 100%;
   }
`
export const SPDetails = styled.div`
  padding: 20px;
  text-align: center;
  transition: all 0.5s ease-in;
`
export const SingleProduct = styled.div`
   height: 400px;
   width: 280px;
   padding: 10px;
   transition: all 0.5s ease-in;
   &:hover{
         box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.1),
         -2px -2px 2px 2px rgba(0,0,0,0.1);   
   }
   &:hover ${SPDetails}{
         transform  :translateY(-10px) ;
   }
`
export const Heading = styled.div`
    width: 100%;
    height: 80px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #cecece;
    padding: 0 30px;
`
export const Title = styled.span`
    font-size: 20px;
    font-weight: 500;
    text-transform: capitalize;
`
export const Button = styled.button`
    background: #2874f0;
    color: white;
    text-transform: uppercase;
    font-size: 12px;
    height: 40px;
    width: 80px;
    cursor: pointer;
    border: none;
    outline: none;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`
export const Card = styled.div`
    height: 350px;
    width: 350px;
    display: flex;
`
export const CardItem = styled.div`
    padding-top: 10px;
    width: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Photo = styled.div`
    height: 200px;
    width: 120px;
`
export const Img = styled.img`
   width: 100%;
   height: 100%;
`
export const Deatails = styled.div`
   padding: 10px;
`
export const Name = styled.p`
   font-size: 14px;
   margin-bottom: 5px;
   text-align: center;
`
export const Reating = styled.div`
   margin-bottom: 5px;
   text-align: center;
   font-weight: 600;
`
export const Price = styled.div`
   text-align:center;
   font-weight: 600;
   font-size: 12px;
   span{
    color: #388e3c;
    font-size: 13px;
    letter-spacing: -.2px;
    font-weight: 500;
   }
`
export const PageTitle = styled.p`
    font-size: 18px;
    margin: 10px 5px;
    font-weight: 500;
`
export const ProductWraper = styled.div`
    width: 100%;
    height: 280px;
    padding: 20px 20px 30px;
    display:grid;
    grid-template-columns: 1fr 4fr 3fr;
    img{
       height: 50%;
    }
    span{
        font-size: 14px;
        font-weight: 600;
    }
    div p{
        font-size: 12px;
        margin-top: 5px;
        span{
            font-weight: 500;
            font-size: 14px;
        }
    }
    div div p {
        color: #888;
        font-size: 12px;
        font-weight: 600;
        margin-left: 10px;
    }
`
export const Reatings = styled.div`
    line-height: normal;
    display: inline-block;
    color: #fff;
    padding: 2px 4px 2px 6px;
    border-radius: 3px;
    font-weight: 500;
    font-size: 12px;
    vertical-align: middle;
    background-color: #388e3c;
`