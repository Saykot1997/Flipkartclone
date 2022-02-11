import Navbar from "../../Components/Navbar/Navbar"
import { Wraper, Body, Container, ActionBox, CreatePage, HeaderBox, CatHeader, Title, InputField, Input, SubmitField, AddCatButton, PageCreateButton, Header, PageItem } from "./PageCreate.style"
import Sidebar from "../../Components/Sidebar/Sidebar"
import { useContext, useEffect, useState } from "react"
import { FaWindowClose } from 'react-icons/fa';
import { categoryContext } from "../../Context/Category-Conttext/CategoryContextProvider";
import axios from "axios";
import { HOST } from "../../Data"
import { authContext } from "../../Context/Admin Context/ContextProvider";

function PageCreate() {

    const { user } = useContext(authContext);
    const { categories } = useContext(categoryContext);
    const [pageName, setPageName] = useState("");
    const [pageDesc, setPageDesc] = useState("");
    const [parentId, setParentId] = useState("");
    const [open, setOpen] = useState(false);
    const [type, setType] = useState("");
    const [bannerImg, setBannerImg] = useState([]);
    const [pages, setPages] = useState(null);

    useEffect(() => {

        const getPages = async () => {
            const res = await axios.get(`${HOST}/api/pages`, {
                headers: {
                    "Authorization": `Bearer ${user.token}`
                }
            })
            setPages(res.data)
        }
        getPages();

    }, [])



    const createPageBox = () => {
        setOpen(!open);
    }

    const closebox = () => {
        setOpen(!open);
    };

    const changeCategory = (e) => {

        setParentId(e.target.value);
        const cat = createCategory(categories);
        const categoriesof = cat.find((cate) => cate.value === e.target.value);
        setType(categoriesof.type)

    }

    const createCategory = (categories, options = []) => {

        for (let category of categories) {

            options.push({
                value: category._id,
                name: category.name,
                parentId: category.parentId,
                type: category.type
            });

            if (category.children.length > 0) {
                createCategory(category.children, options);
            }
        }

        return options;
    }

    const submitForm = async () => {

        if (pageName && pageDesc && parentId && bannerImg.length > 0) {

            const form = new FormData();
            form.append("title", pageName);
            form.append("description", pageDesc);
            form.append("category", parentId);
            form.append("type", type);

            bannerImg.forEach((item) => {
                form.append("banners", item)
            });

            const res = await axios.post(`${HOST}/api/page/create`, form, {
                headers: {
                    "Authorization": `Bearer ${user.token}`
                }
            });

            setPages(res.data);
            setOpen(!open);
            setPageName("");
            setPageDesc("");
            setParentId("");
            setType("");
            setBannerImg([]);

        } else {

            window.alert("Fill all the fileds")
        }

    }

    const DeletePage = (id) => {

        try {

            const res = axios.delete(`${HOST}/api/page/delete/${id}`, {
                headers: {
                    "Authorization": `Bearer ${user.token}`
                }
            });

            setPages(res.data);

        } catch (error) {

            console.log(error)
        }
    }


    return (
        <Wraper>
            <Navbar />
            <Body>
                <Sidebar />
                <Container>
                    <Header>
                        <h4>Create page</h4>
                        <PageCreateButton open={open} onClick={createPageBox}>Create Page</PageCreateButton>
                    </Header>

                    {/* create page */}
                    <CreatePage open={open}>
                        <HeaderBox>
                            <CatHeader>Create A New Page</CatHeader>
                            <FaWindowClose onClick={closebox} style={{ fontSize: "20px", cursor: "pointer", color: "red", }} />
                        </HeaderBox>
                        <InputField>
                            <Input onChange={(e) => { setPageName(e.target.value) }} value={pageName} type="text" placeholder="Page Title" />
                            <Input onChange={(e) => { setPageDesc(e.target.value) }} value={pageDesc} type="text" placeholder="Page Description" />

                            <select value={parentId} onChange={changeCategory} style={{ padding: "10px", margin: "10px 0" }}>
                                <option>Select Category</option>
                                {categories && createCategory(categories).map((op, index) => (
                                    <option key={index} value={op.value}>{op.name}</option>
                                ))}
                            </select>
                            {
                                bannerImg ?
                                    <div>
                                        {bannerImg.map((item, index) => (
                                            <p key={index}>{item.name}</p>
                                        ))}
                                    </div> : null
                            }
                            <Input type="file" file onChange={(e) => { setBannerImg([...bannerImg, e.target.files[0]]) }} />
                        </InputField>
                        <SubmitField>
                            <AddCatButton onClick={submitForm} >Create Page</AddCatButton>
                        </SubmitField>
                    </CreatePage>

                    {/* create page end here */}

                    <div>

                        <h4 style={{ textAlign: "center", padding: "20px" }}>All Category Pages</h4>

                        {
                            pages && pages.map((page, i) => (
                                <PageItem key={i}>
                                    <div>
                                        <img src={`${HOST}/${page.banners[0].img}`} alt="" />
                                    </div>
                                    <div>
                                        <Title>Category</Title>
                                        <p>{page.category.name}</p>
                                    </div>
                                    <div>
                                        <Title>Title</Title>
                                        <p>{page.title}</p>
                                    </div>
                                    <div>
                                        <Title>Type</Title>
                                        <p>{page.type}</p>
                                    </div>
                                    <div >
                                        <Title>Actions</Title>
                                        <ActionBox>
                                            <button onClick={() => DeletePage(page._id)}>Delete</button>
                                        </ActionBox>
                                    </div>
                                </PageItem>
                            ))
                        }

                    </div>
                </Container>
            </Body>
        </Wraper>
    )
}

export default PageCreate
