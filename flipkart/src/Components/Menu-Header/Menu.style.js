import styled from "styled-components"

export const Wraper = styled.div`
    width: 100%;
    height: 40px;
    background: #fff;
    border-bottom: 1px solid #cecece;
    box-shadow: 0 2px 2px -2px #333;

    >ul{
      display: flex;
      margin: 0 50px;
      position: relative;
    }

    >ul >li >span{
      display: block;
      line-height: 40px;
      padding: 0 20px;
      font-size: 14px;
      cursor:pointer;

      &:hover{
          color: #2874f0;
        }
  }

  >ul >li >ul{
      position: absolute;
      left: 0;
      right: 0; 
      display: none;
      border: 1px solid #cecece;
      background: white;
      z-index: 12;
  }
  >ul >li:hover ul{
    display: block;
  }

  >ul >li >ul >li{
    margin: 0 20px;
    /* float: left; */
  }

  >ul >li >ul >li a{
   display: block;
   padding: 5px 0;
   font-size: 12px;
   text-decoration: none;
   color: #707070;
  }

  >ul >li >ul >li >a{
    font-weight: bold;
    display: block;
  }

`;
