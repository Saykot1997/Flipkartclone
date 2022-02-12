import Navbar from "../../Components/Navbar/Navbar";
import { Wraper, Body, Container, Header, Title, Button, CreateCategory, UpdateCategory, DeleteCategory, HeaderBox, CatHeader, Input, SubmitField, AddCatButton, UpdateCatButton, DeleteCatButton, InputField, Confirm, Denay } from "./Category.style"
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useContext, useState } from "react";
import axios from "axios";
import CheckboxTree from 'react-checkbox-tree';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import Categoryactions from "../../Context/Category-Conttext/Category.actions";
import { categoryContext } from "../../Context/Category-Conttext/CategoryContextProvider";
import { FaWindowClose } from 'react-icons/fa';
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";
import { HOST } from "../../Data";
import { authContext } from "../../Context/Admin Context/ContextProvider";

function Category() {

    const { user } = useContext(authContext);
    const { categories, dispatch } = useContext(categoryContext);
    const [open, setOpen] = useState(false);
    const [catName, setCatName] = useState("");
    const [type, setType] = useState("");
    const [parentId, setParentId] = useState("");
    const [catImg, setCatImg] = useState(null);
    const [checked, setChecked] = useState([]);
    const [expanded, setExpanded] = useState([]);
    const [updateCategory, setUpdateCategory] = useState(false);
    const [deleteCategory, setDeleteCategory] = useState(false);
    const [checkedArray, setCheckedArray] = useState([]);
    const [expandedArray, setExpandedArray] = useState([]);


    const showCategory = (categories) => {

        let categoryList = []

        for (let category of categories) {

            categoryList.push(
                {
                    value: category._id,
                    label: category.name,
                    children: category.children.length > 0 && showCategory(category.children)
                }
            )
        }

        return categoryList
    };

    const closebox = () => {
        setOpen(!open);
    };

    const handleDeleteCategory = () => {

        setDeleteCategory(!deleteCategory);
        const category = createCategory(categories);
        const checkedArray = []
        const expandedArray = []

        checked.length > 0 && checked.forEach((categoryId) => {

            const CheckedCategory = category.find((cat) => categoryId === cat.value);
            CheckedCategory && checkedArray.push(CheckedCategory);
        })

        expanded.length > 0 && expanded.forEach((categoryId) => {

            const ExpandedCategory = category.find((cat) => categoryId === cat.value);
            ExpandedCategory && expandedArray.push(ExpandedCategory);
        })

        setCheckedArray(checkedArray);
        setExpandedArray(expandedArray);
    };

    const denayDelete = () => {

        setDeleteCategory(!deleteCategory);
    };

    const confirmDelete = async () => {

        if (checkedArray.length > 0) {

            setDeleteCategory(!deleteCategory);
            const checkedIdArray = checkedArray.map((item, index) => ({ _id: item.value }));

            if (checkedIdArray.length > 0) {

                const res = await axios.post(`${HOST}/api/category/delete`, { payload: checkedIdArray }, {
                    headers: {
                        "Authorization": `Bearer ${user.token}`
                    }
                });

                if (res.status === 200) {

                    try {

                        const res = await axios.get(`${HOST}/api/categories`, {
                            headers: {
                                "Authorization": `Bearer ${user.token}`
                            }
                        });
                        res && dispatch({ type: Categoryactions.Feaching_success, payload: res.data });

                    } catch (error) {

                        window.alert("could not update");
                    }
                }
            }

        } else {

            window.alert("you hove to checked an category ")
        }


    };


    const HandleCategoryName = (key, value, index, type) => {

        if (type === "checked") {

            const updatedCheckedArray = checkedArray.map((item, _index) => index === _index ? { ...item, [key]: value } : item);
            setCheckedArray(updatedCheckedArray);

        } else if (type === "expanded") {

            const updatedExpandedArray = expandedArray.map((item, _index) => index === _index ? { ...item, [key]: value } : item);
            setExpandedArray(updatedExpandedArray);
        }
    };

    const closeUpdatebox = () => {
        setUpdateCategory(!updateCategory);
    };

    const openUpdatebox = () => {

        setUpdateCategory(!updateCategory);
        const category = createCategory(categories);

        const checkedArray = []
        const expandedArray = []

        checked.length > 0 && checked.forEach((categoryId) => {
            const CheckedCategory = category.find((cat) => categoryId === cat.value)
            CheckedCategory && checkedArray.push(CheckedCategory)
        })

        expanded.length > 0 && expanded.forEach((categoryId) => {
            const ExpandedCategory = category.find((cat) => categoryId === cat.value)
            ExpandedCategory && expandedArray.push(ExpandedCategory)
        })

        setCheckedArray(checkedArray);
        setExpandedArray(expandedArray);
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


    const submitData = async () => {

        if (!catName) {

            window.alert("You have to fill the fields.");

        } else {

            const formData = new FormData()
            formData.append("name", catName);
            formData.append("parentId", parentId);
            formData.append("type", type.toLocaleLowerCase());
            formData.append("files", catImg);

            setCatName("");
            setParentId("");
            setCatImg(null);
            setType("")

            try {

                const res = await axios.post(`${HOST}/api/category/create`, formData, {
                    headers: {
                        "Authorization": `Bearer ${user.token}`
                    }
                });

                if (res) {

                    const newCategory = await axios.get(`${HOST}/api/categories`, {
                        headers: {
                            "Authorization": `Bearer ${user.token}`
                        }
                    });

                    newCategory && dispatch({ type: Categoryactions.Feaching_success, payload: newCategory.data });
                    newCategory && setOpen(false);

                } else {

                    setOpen(false);
                    window.alert("could not get category");
                }
            } catch (error) {

                setOpen(false);
                window.alert("could not create category");
            }
        }

    }

    const updateFormData = async () => {

        closeUpdatebox();

        if (checkedArray.length > 0) {

            const form = new FormData();

            expandedArray.forEach((item, index) => {

                form.append("_id", item.value);
                form.append("name", item.name);
                form.append("parentId", item.parentId ? item.parentId : "");
                form.append("type", item.type.toLocaleLowerCase());
            });

            checkedArray.forEach((item, index) => {

                form.append("_id", item.value);
                form.append("name", item.name);
                form.append("parentId", item.parentId ? item.parentId : "");
                form.append("type", item.type.toLocaleLowerCase());
            })

            const res = await axios.post(`${HOST}/api/category/update`, form, {
                headers: {
                    "Authorization": `Bearer ${user.token}`
                }
            });

            if (res.status === 200) {

                try {

                    const res = await axios.get(`${HOST}/api/categories`, {
                        headers: {
                            "Authorization": `Bearer ${user.token}`
                        }
                    });

                    dispatch({ type: Categoryactions.Feaching_success, payload: res.data });

                } catch (error) {

                    window.alert("could not update");
                }
            }

        } else {

            window.alert("You have to checked an category")
        }
    }


    return (
        <Wraper>
            <Navbar />
            <Body>
                <Sidebar />
                <Container>
                    {/* create category start */}
                    <CreateCategory open={open}>
                        <HeaderBox>
                            <CatHeader>Create A New Category</CatHeader>
                            <FaWindowClose onClick={closebox} style={{ fontSize: "20px", cursor: "pointer", color: "red", }} />
                        </HeaderBox>
                        <InputField>
                            <Input onChange={(e) => { setCatName(e.target.value) }} value={catName} type="text" placeholder="Add Category" />
                            <select value={type} onChange={(e) => { setType(e.target.value) }} style={{ padding: "10px", margin: "10px 0", display: "block" }} >
                                <option>Select Type</option>
                                <option value="page">Page</option>
                                <option value="store">Store</option>
                                <option value="product">Product</option>
                            </select>
                            <select value={parentId} onChange={(e) => { setParentId(e.target.value) }} style={{ padding: "10px", margin: "10px 0" }}>
                                <option>Add Parent Category</option>
                                {categories && createCategory(categories).map((op, index) => (
                                    <option key={index} value={op.value}>{op.name}</option>
                                ))}
                            </select>
                            {/* <Input type="file" file value={catImg} onChange={(e) => { setCatImg(e.target.files[0]) }} /> */}
                        </InputField>
                        <SubmitField>
                            <AddCatButton onClick={submitData}>Add Category</AddCatButton>
                        </SubmitField>
                    </CreateCategory>
                    {/* create category end */}

                    {/* update category start */}
                    <UpdateCategory updateCategory={updateCategory}>
                        <HeaderBox>
                            <CatHeader>Update Category</CatHeader>
                            <FaWindowClose onClick={closeUpdatebox} style={{ fontSize: "20px", cursor: "pointer", color: "red", }} />
                        </HeaderBox>

                        <h4 style={{ margin: "20px 0" }}>Expanded :</h4>
                        {
                            expandedArray && expandedArray.map((item, index) =>
                                <InputField updateCategory key={index}>
                                    <Input updateCategory onChange={(e) => HandleCategoryName("name", e.target.value, index, "expanded")} value={item.name} type="text" placeholder="Category Name" />
                                    <select value={item.parentId} onChange={(e) => HandleCategoryName("parentId", e.target.value, index, "expanded")} style={{ padding: "10px", width: "30%" }}>
                                        <option>Add Category</option>
                                        {categories && createCategory(categories).map((op, index) => (
                                            <option key={index} value={op.value}>{op.name}</option>
                                        ))}
                                    </select>
                                    <select value={item.type} onChange={(e) => HandleCategoryName("type", e.target.value, index, "expanded")} style={{ width: "32%", padding: "10px" }}>
                                        <option value="">Select Type</option>
                                        <option value="store">Store</option>
                                        <option value="product">Product</option>
                                        <option value="page">Page</option>
                                    </select>
                                </InputField>)
                        }

                        <h4 style={{ margin: "20px 0" }}>Chacked :</h4>

                        {
                            checkedArray && checkedArray.map((item, index) =>
                                <InputField updateCategory>
                                    <Input updateCategory onChange={(e) => HandleCategoryName("name", e.target.value, index, "checked")} value={item.name} type="text" placeholder="Category Name" />
                                    <select value={item.parentId} onChange={(e) => HandleCategoryName("parentId", e.target.value, index, "checked")} style={{ padding: "10px", width: "30%" }}>
                                        <option>Add Category</option>
                                        {categories && createCategory(categories).map((op, index) => (
                                            <option key={index} value={op.value}>{op.name}</option>
                                        ))}
                                    </select>
                                    <select value={item.type} onChange={(e) => HandleCategoryName("type", e.target.value, index, "checked")} style={{ width: "32%", padding: "10px" }}>
                                        <option value="">Select Type</option>
                                        <option value="store">Store</option>
                                        <option value="product">Product</option>
                                        <option value="page">Page</option>
                                    </select>
                                    {/* <Input type="file" file value={catImg} onChange={(e) => { setCatImg(e.target.files[0]) }} /> */}
                                </InputField>)
                        }
                        <SubmitField>
                            <AddCatButton onClick={updateFormData}>Update Category</AddCatButton>
                        </SubmitField>
                    </UpdateCategory>

                    {/* update category end */}

                    {/* delete category start */}

                    <DeleteCategory deleteCategory={deleteCategory}>
                        <HeaderBox>
                            <CatHeader>Confirm</CatHeader>
                        </HeaderBox>
                        <div>
                            <h4>Expanded :</h4>
                            {
                                expandedArray && expandedArray.map((item, index) => (
                                    <p style={{ margin: "10px 0" }} key={index}>{item.name}</p>
                                ))
                            }
                            <h4>Checked :</h4>
                            {
                                checkedArray && checkedArray.map((item, index) => (
                                    <p style={{ margin: "10px 0" }} key={index}>{item.name}</p>
                                ))
                            }
                        </div>

                        <SubmitField Delete>
                            <Denay onClick={denayDelete}>No</Denay>
                            <Confirm onClick={confirmDelete}>Yes</Confirm>
                        </SubmitField>
                    </DeleteCategory>

                    {/* delete category End */}

                    {/* show category start */}

                    <Header>
                        <Title>Category</Title>
                        <div>
                            <Button onClick={closebox}>Add</Button>
                            <UpdateCatButton onClick={openUpdatebox}>Update</UpdateCatButton>
                            <DeleteCatButton onClick={handleDeleteCategory}>Delete</DeleteCatButton>
                        </div>
                    </Header>
                    <div>
                        {categories && <CheckboxTree
                            nodes={showCategory(categories)}
                            checked={checked}
                            expanded={expanded}
                            onCheck={checked => setChecked(checked)}
                            onExpand={expanded => setExpanded(expanded)}
                            icons={{
                                check: <ImCheckboxChecked />,
                                uncheck: < ImCheckboxUnchecked />,
                                halfCheck: <span className="rct-icon rct-icon-half-check" />,
                                expandClose: <IoMdArrowDropdown />,
                                expandOpen: <IoMdArrowDropright />
                            }}
                        />}
                    </div>
                </Container>
            </Body>
        </Wraper>
    )
}



export default Category
