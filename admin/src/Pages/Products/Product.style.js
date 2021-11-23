import styled from "styled-components";

export const Wraper = styled.div`
    width: 100%;
    height: 100vh;
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
  background:linear-gradient(to right,#1ab195 ,#91c944);
  color: white;
  outline: none;
  border:none ;
  cursor: pointer;
  display: ${({ open }) => (open ? "none" : "block")};

  &:hover{
    background:linear-gradient(to right,#1bb000 ,#91c944);
    }
`

export const CreateProduct = styled.div`
    z-index: 100;
    width: 400px;
    height: auto;
    background:linear-gradient(to right,#1ab195 ,#91c944);
    padding: 40px;
    transition:.5s ease-in;
    box-shadow: 0 0 5px rgba(0,0,0,.3);
    position: absolute;
    display: ${({ open }) => (open ? "block" : "none")};
    top: ${({ open }) => (open ? "60px" : "-500px")};
    left: 50%;
    transform: translateX(-50%);
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
`
export const Input = styled.input`
    width: 100%;
    padding: ${({ file }) => (file ? "0" : "10px")};
    border: ${({ file }) => (file ? "none" : "1px solid blue")};
    margin-top: ${({ file }) => (file ? "10px" : "0")};
    margin-bottom: ${({ file }) => (file ? "0" : "20px")};
    border-radius: 5px;
    outline: none;
    &:focus{
      outline: none;
    }
`

export const SubmitField = styled.div`
    width: 100%;
    margin-top: 40px;
    text-align: center;
`
export const AddCatButton = styled.button`
    padding:10px 15px;
    border-radius: 20px;
    border: none;
    cursor: pointer;

`
export const TableBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`
export const Table = styled.table`
    width: 90%;
    border: 1px solid white;
    border-collapse: collapse;
`
export const TableHeader = styled.thead`
    width: 100%;
`
export const TableBody = styled.tbody`
    width: 100%;
`
export const TableRow = styled.tr`
    text-align: center;
`

export const TableHeading = styled.th`
    border: 1px solid black;
    padding: 10px 0;
`
export const TableData = styled.td`
    border: 1px solid black;
    padding: ${({ action }) => (action ? "5px" : "10px")};
    button{
        padding: 5px 10px;
        cursor: pointer;
        margin: 0 5px;
    }
`

export const ProductDetail = styled.div`
    z-index: 100;
    width: 70%;
    height: auto;
    background:linear-gradient(to right,#1ab195 ,#91c944);
    padding: 40px;
    transition:.5s ease-in;
    box-shadow: 0 0 5px rgba(0,0,0,.3);
    position: absolute;
    display: ${({ open }) => (open ? "block" : "none")};
    top: ${({ open }) => (open ? "60px" : "-500px")};
    left: 50%;
    transform: translateX(-50%);
`
export const productBody = styled.div`
    width: 100%;
`
export const Top = styled.div`
    display: flex;
`
export const TopLeft = styled.div`
    width: 60%;
`
export const TopRight = styled.div`
    width: 40%;
`
export const Name = styled.div`
    width: 100%;
    margin-bottom: 10px;
`
export const Quantity = styled.div`
    width: 100%;
    margin-bottom: 10px;
`
export const Price = styled.div`
    width: 100%;
    margin-bottom: 10px;
`
export const Category = styled.div`
    width: 100%;
    margin-bottom: 10px;
`
export const Middle = styled.div`
    width: 100%;
`
export const Bottom = styled.div`
margin-top: 20px;
    width: 100%;
`
export const BottomTitle = styled.h2`
    font-size: 20px;
`
export const PictureBox = styled.div`
margin-top: 20px;
    width: 100%;
    height: 200px;
    display: flex;
`
export const SingleImgBox = styled.div`
    margin-right: 20px;
`
export const SingleImg = styled.img`
  width: 100%;
  height: 100%;
`

export const P = styled.p`
    margin-top: 5px;
`
export const Lable = styled.label`
   font-weight: 600;
`

export const UpdateProduct = styled.div`
    z-index: 100;
    width: 400px;
    height: auto;
    background:linear-gradient(to right,#1ab195 ,#91c944);
    padding: 10px 20px;
    transition:.5s ease-in;
    box-shadow: 0 0 5px rgba(0,0,0,.3);
    position: absolute;
    display: ${({ openUpdateProduct }) => (openUpdateProduct ? "block" : "none")};
    top: ${({ openUpdateProduct }) => (openUpdateProduct ? "60px" : "-500px")};
    left: 50%;
    transform: translateX(-50%);
`