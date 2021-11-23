import React, { useContext } from 'react'
import { Wraper } from './Menu.style'
import { Link } from "react-router-dom"
import { categoryContext } from "../../Context/Category-Conttext/CategoryContextProvider"

export const Menu = () => {

    const { categories } = useContext(categoryContext)


    const showCategory = (categories) => {

        let categoryList = []

        for (let category of categories) {
            categoryList.push(
                <li>
                    {
                        category.parentId ? <Link to={`/${category.slug}/?cid=${category._id}&type=${category.type}`}>{category.name}</Link> :
                            <span>{category.name}</span>
                    }
                    {category.children.length > 0 ? (<ul>{showCategory(category.children)}</ul>) : null}
                </li>
            )
        }

        return categoryList
    };

    return (
        <Wraper>
            <ul>{categories && showCategory(categories)}</ul>
        </Wraper>
    )
}
