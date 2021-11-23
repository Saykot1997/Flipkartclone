import styled from "styled-components";

export const Wraper = styled.div`
    width: 100%;
    height: 100vh;
    background: #000;
`;
export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100% - 60px);

`;

export const FormBox = styled.div`
    height: 450px;
    width: 500px;
    border-radius: 20px;
    border:1px solid rgba(255,255,255,.8);
    background: rgba(255,255,255,.1);
    backdrop-filter: blur(15px);
    padding: 40px 60px 30px;

    animation: zoom .8s linear;
    @keyframes zoom {
      0%{
       transform: scale(0);
      }
      100%{
        transform: scale(1);
      }
  }

`;

export const Round1 = styled.div`
    height: 200px;
    width: 200px;
    border-radius: 50%;
    background: linear-gradient(90deg, rgba(216,16,84,1) 26%, rgba(239,0,255,1) 100%);
    position: absolute;
    top: 80px;
    right: 420px;
`
export const Round2 = styled.div`
    height: 200px;
    width: 200px;
    border-radius: 50%;
    background: linear-gradient(90deg, rgba(197,16,216,1) 28%, rgba(239,0,255,1) 83%);
    position: absolute;
    bottom: 80px;
    left: 420px;
`;

export const Header = styled.div`
    margin-bottom: 20px;
`;
export const Title = styled.h2`
font-size: 30px;
    margin-bottom: 10px;
    text-align: center;
    color: #fff;
`;
export const Subtitle = styled.p`
  margin-bottom: 10px;
  color: rgba(255,255,255,.7);
  text-align: center;
`;

export const InputFilds = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FirstNameField = styled.div`
    width: 100%;
    height: 50px;
    margin-bottom: 10px;
`
export const LastNameField = styled.div`
     width: 100%;
     height: 50px;
     margin-bottom: 10px;
`
export const EmailField = styled.div`
     width: 100%;
     height: 50px;
     margin-bottom: 10px;
`
export const PasswordField = styled.div`
     width: 100%;
     height: 50px;
`
export const Input = styled.input`
     width: 100%;
     padding: 10px 20px;
     background: transparent;
     color: white;
     font-size: 16px;
     border-radius: 15px;
     border:1px solid rgba(255,255,255,.8);

     &:focus{
        outline: none;
        border:3px solid rgba(255,255,255,.8);
     };
     &::placeholder{
       font-size: 14px;
     }
`
export const SubmitFild = styled.div`
     width: 100%;
`
export const Button = styled.button`
     width: 100%;
     margin-top: 10px;
     padding: 10px 20px;
     cursor: pointer;
     background: red;
     border-radius: 10px;
     border: none;
     outline: none;
     color: white;
     font-size: 16px;
     transition:.3s ease-in ;

     &:hover{
       background:rgba(255,0,0,.6) ;
     }
`

