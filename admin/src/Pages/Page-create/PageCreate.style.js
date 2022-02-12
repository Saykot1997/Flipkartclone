import styled from "styled-components";

export const Wraper = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
`;

export const Body = styled.div`
  display: flex;
  width: 100%;
  height: calc(100% - 60px);
`;

export const Container = styled.div`
  width: 85%;
  height: 100%;
  overflow-y : scroll;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`

export const PageCreateButton = styled.button`
  padding: 10px 20px;
  background: green;
  color: white;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  display: ${({ open }) => open ? "none" : "block"};
`

export const CreatePage = styled.div`
    background: white;
    width: 400px;
    padding: 40px;
    transition:.5s ease-in;
    box-shadow: 0 0 5px rgba(0,0,0,.3);
    position: absolute;
    display: ${({ open }) => (open ? "block" : "none")};
    top: ${({ open }) => (open ? "60px" : "-500px")};
    left: 50%;
    transform: translateX(-50%);
`;
export const HeaderBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;
export const CatHeader = styled.h3`
    font-size: 20px;
`
export const InputField = styled.div`
    width: 100%;
    justify-content: space-between;
    align-items: center;
    display: ${({ updateCategory }) => (updateCategory ? "flex" : "block")};
`
export const Input = styled.input`
    width: 100%;
    padding: ${({ file }) => (file ? "0" : "10px")};
    border: ${({ file }) => (file ? "none" : "1px solid blue")};
    border-radius: 5px;
    margin: 10px 0;
    outline: none;
    width: ${({ updateCategory }) => (updateCategory ? "30%" : "100%")};
    &:focus{
      outline: none;
    }
`
export const SubmitField = styled.div`
    width: 100%;
    margin-top: 30px;
    text-align: ${({ Delete }) => (Delete ? "right" : "center")};
`
export const AddCatButton = styled.button`
    padding:10px 15px;
    border-radius: 20px;
    border: none;
    cursor: pointer;

`

export const PageItem = styled.div`
    padding: 10px 20px;
    width: 100%;
    height: 120px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
    img{
      max-width: 260px;
      max-height: 100px;
    }
    p{
      padding: 5px;
      text-align: center;
    }
    div{
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
`

export const Title = styled.p`
    font-weight: 600;
    font-size: 18px;
    color: #444;
`

export const ActionBox = styled.div`
   button{
    padding: 5px 10px;
    margin: 0 10px;
   }
`