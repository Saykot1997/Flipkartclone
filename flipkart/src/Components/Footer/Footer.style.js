import styled from "styled-components";

export const FooterContainer = styled.div`
    padding: 30px 20px;
`
export const Title = styled.p`
    font-size: 14px;
    color: #8e8e8e;
    margin-bottom: 10px;
    span {
        color: #333;
        font-weight: 500;
        font-size: 14px;
    }
`
export const Links = styled.p`
    font-size: 10px;
    color: #666;
    line-height: 22px;
    margin-bottom: 30px;
`
export const FlipkartDes = styled.p`

        font-size: 10px;
        color: #8e8e8e;
        margin: 10px 0;

        p{
         margin: 10px 0;
     }

    span{
        font-size: 12px;
        font-weight: 600;
        color: #666;
        margin: 10px 0;
        display: block;
    }
        
`
export const FooterLinks = styled.div`
    font-size: 14px;
    background-color: #172337;
    color: #212121;
    line-height: 1.4;
    width: 100%;
    height: 320px;
   
`
export const Top = styled.div`
   width: 100%;
   height: 80%;
   padding: 30px 40px;
   border-bottom: 1px dotted #666;
   display: flex;
`
export const Bottom = styled.div`
   width: 100%;
   height: 20%;
   padding: 20px 40px;
   display: grid;
   grid-template-columns:1fr 1fr 1fr 1fr 1fr 2fr;
   div{
       display: flex;
       align-items: center;
   }

   p{
     color: white;
     font-size: 12px;
     cursor: pointer;
   }
`
export const TopLeft = styled.div`
   width: 65%;
   height: 100%;
   display: grid;
   grid-template-columns: repeat(4,1fr);
   grid-gap: 5px;

   div{
         width: 100%;
         height: 100%;
   }

   div p:not(:first-child) {
    color:#fff;
    font-size: 12px;
    margin-top: 5px;
    font-weight: 400;
    cursor: pointer;
    &:hover{
        text-decoration: underline;
    }
}
   
`
export const TopRight = styled.div`
   width: 35%;
   height: 100%;
   display: grid;
   grid-template-columns: repeat(2,1fr);

   div{
         width: 100%;
         height: 100%;
   }
   
   div:nth-child(1){
       padding-left: 15px;
       border-left: 1px dotted #666;
       height: 130px;
   }

   div p:not(:first-child) {
    color:#fff;
    font-size: 10px;
    margin-top: 5px;
    font-weight: 400;
    cursor: pointer;
    &:hover{
        text-decoration: underline;
    }

    span{
        color: #2874f0;
    }
 
`

export const TopLeftTitle = styled.p`
    font-size: 10px;
    color: #8e8e8e;
    font-weight: 500;
    margin-bottom: 5px;
`