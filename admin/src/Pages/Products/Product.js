import Navbar from "../../Components/Navbar/Navbar"
import { Wraper, Body, Container, Header, Title, Button, CreateProduct, HeaderBox, CatHeader, Input, SubmitField, AddCatButton, InputField, TableBox, Table, TableHeader, TableBody, TableRow, TableHeading, TableData, ProductDetail, Top, TopLeft, TopRight, Name, Quantity, Price, Category, Middle, Bottom, BottomTitle, PictureBox, P, Lable, SingleImg, SingleImgBox, UpdateProduct } from "./Product.style"
import Sidebar from "../../Components/Sidebar/Sidebar"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { categoryContext } from "../../Context/Category-Conttext/CategoryContextProvider"
import { FaWindowClose } from 'react-icons/fa';
import { productContext } from "../../Context/Product context/ProductContextProvider"
import Productactions from "../../Context/Product context/Product.actions"

function Product() {

    const { products, productDispatch } = useContext(productContext);
    const { categories } = useContext(categoryContext);
    const [open, setOpen] = useState(false);
    const [openUpdateProduct, setopenUpdateProduct] = useState(false);
    const [openDeatil, setOpenDetail] = useState(false);
    const [productDetail, setProductDetail] = useState(null);
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState();
    const [category, setcategory] = useState("");
    const [productPicture, setProductPicture] = useState([]);
    const [updateProductPicture, setUpdateProductPicture] = useState([]);
    const [description, setDscription] = useState("");
    const [quantity, setQuantity] = useState();
    const [updateProductId, setUpdateProductId] = useState("")


    useEffect(() => {

        //products data fatch
        const getData = async () => {

            try {
                const res = await axios.get("/products")
                res && productDispatch({ type: Productactions.Feaching_success, payload: res.data })
            } catch (error) {
                productDispatch({ type: Productactions.Feaching_failur })
            }

        }

        getData()

    }, []);



    const closebox = () => {
        setOpen(!open);
        setOpenDetail(false);
    }

    const openUpdateProductfun = (product) => {
        // console.log(product)
        setopenUpdateProduct(!openUpdateProduct)
        setProductName(product.name);
        setPrice(product.price)
        setDscription(product.description)
        setQuantity(product.quantity)
        setUpdateProductId(product._id)
        setcategory(product.category._id)
    }
    const closeUpdateProduct = () => {
        setopenUpdateProduct(!openUpdateProduct)

        setProductName("");
        setPrice("")
        setDscription("")
        setQuantity("")
        setUpdateProductPicture("")
        setcategory("")
    }

    const OpenDetailPage = () => {
        setOpenDetail(!openDeatil);
        setOpen(false);
    }

    const ProductDetails = (p) => {
        setOpenDetail(!openDeatil);
        setProductDetail(p);
    }

    const createCategory = (categories, options = []) => {

        for (let category of categories) {
            options.push({ value: category._id, name: category.name });
            if (category.children.length > 0) {
                createCategory(category.children, options)
            }
        }

        return options;
    };


    const FileUpload = (e) => {
        setProductPicture([
            ...productPicture,
            e.target.files[0]
        ])
    }
    const UpdateFileUpload = (e) => {
        setUpdateProductPicture([
            ...updateProductPicture,
            e.target.files[0]
        ])
    }




    const submitData = async () => {

        if (!productName || !price || !quantity || !description || !category || !productPicture) {
            window.alert("You have to fill all the fileds.")
        } else {

            const formData = new FormData()
            formData.append("name", productName);
            formData.append("price", price);
            formData.append("quantity", quantity);
            formData.append("description", description);
            formData.append("category", category);

            for (let pic of productPicture) {
                formData.append("files", pic)
            }

            setProductName("");
            setPrice("");
            setProductPicture("");
            setDscription("");
            setQuantity("");
            setcategory("");

            try {

                const res = await axios.post("product/create", formData);

                if (res) {

                    const newProduct = await axios.get("/products");
                    newProduct && productDispatch({ type: Productactions.Feaching_success, payload: newProduct.data });
                    newProduct && setOpen(false);

                } else {

                    setOpen(false);
                    window.alert("could not get category");
                }

            } catch (error) {
                window.alert("could not create product !!")
            }
        }
    }
    const UpdatetData = async () => {

        const formData = new FormData()
        formData.append("name", productName);
        formData.append("price", price);
        formData.append("quantity", quantity);
        formData.append("description", description);
        formData.append("category", category);

        if (updateProductPicture.length > 0) {
            for (let pic of updateProductPicture) {
                formData.append("files", pic)
            }
        }

        setProductName("");
        setPrice("");
        setUpdateProductPicture("");
        setDscription("");
        setQuantity("");
        setcategory("");

        try {

            const res = await axios.put(`product/update/${updateProductId}`, formData);
            console.log(res)

            if (res) {

                const newProduct = await axios.get("/products");
                newProduct && productDispatch({ type: Productactions.Feaching_success, payload: newProduct.data });
                newProduct && setopenUpdateProduct(!openUpdateProduct)

            } else {

                setopenUpdateProduct(!openUpdateProduct);
                window.alert("could not get category");
            }

        } catch (error) {
            window.alert("could not create product !!")
        }

    }

    const DeleteProduct = async (productId) => {
        const res = await axios.delete(`/product/delete/${productId}`);
        if (res) {
            const newProductLIst = products.filter((product) => product._id.toString() != productId)
            productDispatch({ type: Productactions.Feaching_success, payload: newProductLIst })
        }
    }


    return (
        <Wraper>
            <Navbar />
            <Body>
                <Sidebar />
                <Container>

                    {/* add a new product start */}

                    <CreateProduct open={open}>
                        <HeaderBox>
                            <CatHeader>Create A New Product</CatHeader>
                            <FaWindowClose onClick={closebox} style={{ fontSize: "20px", cursor: "pointer", color: "red", }} />
                        </HeaderBox>
                        <InputField>
                            <Input onChange={(e) => { setProductName(e.target.value) }} type="text" value={productName} placeholder="Product Name" />
                            <Input onChange={(e) => { setPrice(e.target.value) }} type="Number" value={price} placeholder="Price" />
                            <Input onChange={(e) => { setDscription(e.target.value) }} type="text" value={description} placeholder="Descriptions" />
                            <Input onChange={(e) => { setQuantity(e.target.value) }} value={quantity} type="Number" placeholder="Quantity" />
                            <select value={category} onChange={(e) => { setcategory(e.target.value) }} style={{ padding: "5px 10px", marginBottom: "10px" }}>
                                <option>Add Category</option>
                                {categories && createCategory(categories).map((op) => (
                                    <option key={op.value} value={op.value}>{op.name}</option>
                                ))}
                            </select>
                            {productPicture.length > 0 && productPicture.map((pic) => (<div>{pic.name}</div>))}
                            <Input type="file" file onChange={FileUpload} />
                        </InputField>
                        <SubmitField>
                            <AddCatButton onClick={submitData}>Add Product</AddCatButton>
                        </SubmitField>
                    </CreateProduct>

                    {/* add a new product end */}
                    {/* update product start */}

                    <UpdateProduct openUpdateProduct={openUpdateProduct}>
                        <HeaderBox>
                            <CatHeader>Update Product</CatHeader>
                            <FaWindowClose onClick={closeUpdateProduct} style={{ fontSize: "20px", cursor: "pointer", color: "red", }} />
                        </HeaderBox>
                        <InputField>
                            <Input onChange={(e) => { setProductName(e.target.value) }} type="text" value={productName} placeholder={productName} />
                            <Input onChange={(e) => { setPrice(e.target.value) }} type="Number" value={price} placeholder={price} />
                            <Input onChange={(e) => { setDscription(e.target.value) }} type="text" value={description} placeholder={description} />
                            <Input onChange={(e) => { setQuantity(e.target.value) }} value={quantity} type="Number" placeholder={quantity} />
                            <select value={category} onChange={(e) => { setcategory(e.target.value) }} style={{ padding: "5px 10px", marginBottom: "10px" }}>
                                <option>Add Category</option>
                                {categories && createCategory(categories).map((op) => (
                                    <option key={op.value} value={op.value}>{op.name}</option>
                                ))}
                            </select>
                            {updateProductPicture.length > 0 && updateProductPicture.map((pic) => (<div>{pic.name}</div>))}
                            <Input type="file" file onChange={UpdateFileUpload} />
                        </InputField>
                        <SubmitField>
                            <AddCatButton onClick={UpdatetData}>Update Product</AddCatButton>
                        </SubmitField>
                    </UpdateProduct>

                    {/* update product end */}

                    {/* show product details start */}

                    {productDetail && (

                        <ProductDetail open={openDeatil}>
                            <HeaderBox>
                                <CatHeader>Product Details</CatHeader>
                                <FaWindowClose onClick={OpenDetailPage} style={{ fontSize: "20px", cursor: "pointer", color: "red", }} />
                            </HeaderBox>
                            <productBody>
                                <Top>
                                    <TopLeft >
                                        <Name>
                                            <Lable htmlFor="Name">Name</Lable>
                                            <P id="Name">{productDetail.name}</P>
                                        </Name>
                                        <Quantity>
                                            <Lable htmlFor="Quantity">Quantity</Lable>
                                            <P id="Quantity">{productDetail.quantity}</P>
                                        </Quantity>
                                    </TopLeft>
                                    <TopRight >
                                        <Price>
                                            <Lable htmlFor="Price">Price</Lable>
                                            <P id="Price">{productDetail.price}</P>
                                        </Price>
                                        <Category>
                                            <Lable htmlFor="Category">Category</Lable>
                                            <P id="Category">{productDetail.category ? productDetail.category.name : null}</P>
                                        </Category>
                                    </TopRight>
                                </Top>
                                <Middle>
                                    <Lable htmlFor="Description">Description</Lable>
                                    <P id="Description">{productDetail.description}</P>
                                </Middle>
                                <Bottom>
                                    <BottomTitle>Product Photos</BottomTitle>
                                    <PictureBox>
                                        {productDetail.productPicture.map((p) => (
                                            <SingleImgBox>
                                                <SingleImg src={`http://localhost:8000/${p.img}`} alt="" />
                                            </SingleImgBox>
                                        ))}
                                    </PictureBox>
                                </Bottom>
                            </productBody>
                        </ProductDetail>
                    )}

                    {/* show product details end */}

                    {/* Product Table */}

                    <Header>
                        <Title>Product</Title>
                        <Button open={open} onClick={closebox}>Add</Button>
                    </Header>
                    <TableBox>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHeading>#</TableHeading>
                                    <TableHeading>Name</TableHeading>
                                    <TableHeading>Price</TableHeading>
                                    <TableHeading>Quantity</TableHeading>
                                    <TableHeading>Category</TableHeading>
                                    <TableHeading>Actions</TableHeading>
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {
                                    products && products.map((p, i) => (
                                        <TableRow key={p._id}>
                                            <TableData >{i + 1}</TableData>
                                            <TableData>{p.name}</TableData>
                                            <TableData>{p.price}</TableData>
                                            <TableData>{p.quantity}</TableData>
                                            <TableData>{p.category && p.category.name}</TableData>
                                            <TableData action>
                                                <button onClick={() => ProductDetails(p)}>Info</button>
                                                <button onClick={() => openUpdateProductfun(p)}>Edite</button>
                                                <button onClick={() => { DeleteProduct(p._id) }}>Delete</button>
                                            </TableData>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableBox>

                    {/* Product Table */}
                </Container>
            </Body>
        </Wraper>
    )
}



export default Product
