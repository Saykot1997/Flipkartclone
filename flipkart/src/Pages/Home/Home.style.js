import styled from "styled-components";

export const BannerBox = styled.div`
    background: #f1f3f6;
    padding: 10px;
    position: relative;
`
export const PreBTN = styled.button`
    background: #f1f3f6;
    height: 80px;
    width: 40px;
    position: absolute;
    left: 5px;
    top: 100px;
    font-size: 30px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
`
export const NextBTN = styled.button`
    background: #f1f3f6;
    height: 80px;
    width: 40px;
    position: absolute;
    right: 5px;
    top: 100px;
    font-size: 30px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
`

export const DealOFDay = styled.div`
    background: #fff;
    margin-top: 20px;
`
export const HeaderOFDAY = styled.div`
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    p{
        font-weight: 500;
        font-size: 18px;
    }
`
export const ViewBTN = styled.button`
    background: #2874f0;
    color: #fff;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
    border: none;
    padding: 10px 20px;
    cursor: pointer;
`

export const DiscountItms = styled.div`
    display  :grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr; 
    width: 100%;
`
export const DiscountItm = styled.div`
   padding: 20px;
   margin: 20px 0;
   img{
         height: 120px;
   }
   p{
       margin-top: 10px;
   }
`

export const ItemDiscunt = styled.p`
    font-size: 12px;
    color: green;
`
export const ItemName = styled.p`
    font-size: 14px;
    font-weight: 500;
`
export const ItemTitle = styled.p`
    font-size: 12px;
    color: #8e8e8e;
    display: block;
    width: 100px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

`