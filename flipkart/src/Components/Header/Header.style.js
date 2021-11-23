import styled from "styled-components"
import { FaSearch } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { loginImgURL } from '../../data'


export const Wraper = styled.div`
    width: 100%;
    height: 57px;
    padding: 8px 180px 10px 198px;
    background: #2874f0;
    display: flex;
    position: relative;
`;

export const Left = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
`;

export const Right = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const Logo = styled.div`
margin-top: 2px;
    display: flex;
    flex-direction: column;
    margin-right: 10px;
    width: 70px;
`;
export const LogoImg = styled.img`
    width: 75px;
`;
export const Sublogo = styled.div`
    display: flex;
`;
export const Fast = styled.span`
    font-style: italic;
    color: white;
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 10px;
    margin-right: 2px;
    
`;
export const Second = styled.span`
    color: #ffe500;
    font-weight: 500;
    margin-right: 2px;
    font-size: 11px;
    font-style: italic;
    font-family: 'Be Vietnam Pro', sans-serif;
`;
export const Sub = styled.img`
   width: 8px;
   height: 8px;
`;

export const Search = styled.div`
    position: relative;
    display: flex;
    height: 40px;
    align-items: center;
    width: calc(100% - 70px);
    margin-left: 10px;
    margin-right: 35px;
    box-shadow: 0 2px 2px -2p #333;
`;
export const Input = styled.input`
    width: 100%;
    height: 100%;
    padding: 8px 50px 8px 20px;

    &::placeholder{
        font-size: 14px;
    }
    &:focus{
        outline: none;
        border: none;
    }
`;

export const SearchIcon = styled(FaSearch)`
    position: absolute;
    top: 10px;
    right: 18px;
    color: #2874f0;
    font-size: 18px;
`

export const Log = styled.div`
    display: flex;
    justify-content: space-between;

`
export const Sing = styled.span`
    color: #2874f0;
    cursor: pointer;
    font-weight: 500;
 `
export const LI = styled.li`

    display: block;
    padding: 15px 0;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    border-bottom: ${({ last }) => (last && "none")};
    cursor: pointer;
`
export const LoginBox = styled.ul`
    width:250px;
    background: white;
    box-shadow: 0 0 4px rgba(0,0,0,0.5);
    position: absolute;
    padding: 20px 20px;
    top: 50px;
    right: 300px;
    z-index: 100;
    display:${({ loginOpen }) => (loginOpen ? "block" : "none")} ;
`
export const Botton = styled.button`
    height: 32px;
    width: 120px;
    background: white;
    color: #2874f0;
    font-size: 15px;
    font-weight: 600;
    border: none;
    cursor: pointer;
`

export const More = styled.div`
    display: flex;
    align-items: center;
    margin-left: 40px;
    cursor: pointer;
`
export const Cart = styled.div`
    display: flex;
    margin-left: 40px;
    cursor: pointer;
    position: relative;
`
export const ItemNumber = styled.div`
   position: absolute;
   right: 35px;
   top: -10px;
   height: 20px;
   width: 20px;
   border-radius: 30%;
   background: rgba(255,0,0 ,0.7);
   color: white;
   font-size: 14px;
   font-weight: 400;
   display: flex;
   justify-content: center;
   align-items: center;
`
export const Span = styled.span`
   font-size: 16px;
   font-weight: 500;
   color: white;
`

export const DropArrow = styled(RiArrowDropDownLine)`
    color: white;
    font-size: 20px;
`

export const ShoppingCart = styled(FaShoppingCart)`
    color: white;
    font-size: 18px;
    margin-top: 7px;
    margin-right: 5px;
`
export const SinginDiv = styled.div`
    width: 100%;
    height: 100vh;
    z-index: 100;
    background: rgba(0,0,0,0.4);
    position: absolute;
    justify-content: center;
    display: ${({ loginBox }) => (loginBox ? "flex" : "none")};
`
export const SingupDiv = styled.div`
    width: 100%;
    height: 100vh;
    z-index: 100;
    background: rgba(0,0,0,0.4);
    position: absolute;
    justify-content: center;
    display: ${({ signupBox }) => (signupBox ? "flex" : "none")};
`
export const SigninBox = styled.div`
    width: 700px;
    height: 500px ;
    display: flex;
    justify-content: space-between;
    margin-top: 60px;
    background: white;
`
export const SignupBox = styled.div`
    width: 700px;
    height: 500px ;
    display: flex;
    justify-content: space-between;
    margin-top: 60px;
    background: white;
`
export const LeftBox = styled.div`
  width: 40%;
  height: 100%;
  background-image: url(${loginImgURL});
  background-repeat: no-repeat;
  background-position: center 85%;
  background-color: #2874f0;
  color: #fff;
  padding: 40px 33px;
  font-size: 15px;
  p{
      margin-top: 20px;
      font-size: 16px;
      line-height: 26px;
  }
`
export const RightBox = styled.div`
  width: 60%;
  height: 100%;
  padding: ${({ reg }) => (reg ? "35px 35px 16px" : "56px 35px 16px")};
`
export const InputDiv = styled.div`
  width: 100%;
  margin-bottom: ${({ last }) => (last ? "10px" : "20px")};
  position: relative;
  p{
   position: absolute;
   top: 8px;
   right: 20px;
   color:  #2874f0;
   font-weight: 500;
   cursor: pointer;
  }
  input{
      padding: 10px 0;
      width: 100%;
      margin-bottom: 10px;
      border: none;
      border-bottom: 1px solid rgba(0,0,0,0.1);

      &::placeholder{
          font-size: 16px;
      }

      &:focus{
          border: none;
          outline: none;
      }
  }
`

export const PolicyBox = styled.div`
    width: 100%;
    padding:${({ reg }) => (reg ? "10px 0" : "20px 0")};
    p{
        font-size: 12px;
        line-height: 18px;

        a{
            text-decoration: none;
            color:  #2874f0;
        }
    }
`
export const OR = styled.p`
    margin: 10px 0;
    text-align: center;
    color: rgba(0,0,0,0.6);
`
export const OPT = styled.button`
    background: #fff;
    box-shadow: 0 1px 4px 2px rgb(0 0 0 / 20%);
    border: none;
    color: #2874f0;
    width: 100%;
    padding: 10px 0;
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
    margin-bottom: 20px;
`
export const LoginBtn = styled.button`
    background:#fb641b;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
    border: none;
    color: #fff;
    width: 100%;
    padding: 10px 0;
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
`
export const Account = styled.p`
    font-size: 14px;
    color: #2874f0;
    text-align: center;
    margin-top: 30px;
    cursor: pointer;
`
export const CloseBtn = styled.p`
    font-size: 26px;
    color: #fff;
    position: absolute;
    top: 50px;
    right: 380px;
    cursor: pointer;
 
`
export const User = styled.p`
    text-transform: capitalize;
     color: white; 
     cursor: pointer; 
`
