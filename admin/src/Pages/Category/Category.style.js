import styled from "styled-components";

export const Wraper = styled.div`
    width: 100%;
    height: 100vh;
    min-height: 100vh;
    position: relative;
`;

export const Body = styled.div`
  display: flex;
  width: 100%;
  height: calc(100% - 60px);
`;

export const Container = styled.div`
  width: 85%;
  height: 100%;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
`;

export const Title = styled.h4`
  font-size: 25px;
`
export const Button = styled.button`
  padding: 10px 20px;
  font-weight: 600;
  border-radius: 20px;
  outline: none;
  border:none ;
  cursor: pointer;
  margin-right: 5px;
  display:inline-block;
`

export const CreateCategory = styled.div`
    width: 400px;
    padding: 40px;
    transition:.5s ease-in;
    box-shadow: 0 0 5px rgba(0,0,0,.3);
    position: absolute;
    display: ${({ open }) => (open ? "block" : "none")};
    top: ${({ open }) => (open ? "60px" : "-500px")};
    left: 50%;
    transform: translateX(-50%);
`
export const UpdateCategory = styled.div`
    width: 700px;
    padding: 40px;
    transition:.5s ease-in;
    box-shadow: 0 0 5px rgba(0,0,0,.3);
    position: absolute;
    display: ${({ updateCategory }) => (updateCategory ? "block" : "none")};
    top: ${({ updateCategory }) => (updateCategory ? "60px" : "-500px")};
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
    background: white;
`
export const DeleteCategory = styled.div`
    width: 700px;
    padding: 40px;
    transition:.5s ease-in;
    box-shadow: 0 0 5px rgba(0,0,0,.3);
    position: absolute;
    display: ${({ deleteCategory }) => (deleteCategory ? "block" : "none")};
    top: ${({ deleteCategory }) => (deleteCategory ? "60px" : "-500px")};
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
    background: white;
`
export const HeaderBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`

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
   // margin-top: ${({ file }) => (file ? "20px" : "0")};
   // margin-bottom: ${({ file }) => (file ? "0" : "20px")};
 //   margin:  ${({ updateCategory }) => (updateCategory && "0")};
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
export const UpdateCatButton = styled.button`
    padding:8px 10px;
    margin-right: 5px;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    background: green;
    color: white;
    font-size: 12px;

`
export const DeleteCatButton = styled.button`
    padding:8px 10px;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    background: red;
    color: white;
    margin-right: 10px;
    font-size: 12px;
`
export const Denay = styled.button`
    padding:8px 10px;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    background: red;
    color: white;
    margin-right: 10px;
    font-size: 12px;
`
export const Confirm = styled.button`
    padding:8px 10px;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    background: green;
    color: white;
    margin-right: 10px;
    font-size: 12px;
`

