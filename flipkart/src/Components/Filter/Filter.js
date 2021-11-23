import React, { useContext, useState } from 'react'
import { productContext } from '../../Context/Product context/ProductContextProvider';
import { FilterInput, Title, Wraper } from './Filter.style';

export default function Filter({ setFilterAbleProduct }) {

    const { products } = useContext(productContext);
    const [min, setMin] = useState("");
    const [max, setMax] = useState("");

    const filterProduct = () => {
        if (max && min) {
            if (max < min) {
                window.alert("maximum is smaller then minimum")
            } else {
                let filteredProduct = products.filter(product => {
                    return product.price >= min && product.price <= max
                })

                setFilterAbleProduct(filteredProduct)
                setMax("")
                setMin("")
            }
        }
    }

    const ClearFilter = () => {
        setFilterAbleProduct(products);
        setMax("")
        setMin("")
    }


    return (
        <Wraper>
            <Title>Filter BY Price</Title>
            <FilterInput>
                <input type="number" placeholder="Minimum" onChange={(e) => { setMin(e.target.value) }} />
                <input type="number" placeholder="Maximum" onChange={(e) => { setMax(e.target.value) }} />
                <div>
                    <button onClick={filterProduct}>Filter</button>
                    <button onClick={ClearFilter}>Clear Filter</button>
                </div>
            </FilterInput>
        </Wraper>
    )
}
