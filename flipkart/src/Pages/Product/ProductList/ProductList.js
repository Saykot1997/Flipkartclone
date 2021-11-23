import React from 'react'
import { Body } from "./ProductList.style"
import { Header } from '../../../Components/Header/Header';
import { Menu } from '../../../Components/Menu-Header/Menu';
import { GetParams } from '../../../utils/Getparams'
import Productstore from './Productstore'
import Page from './Page'
import ProductType from './ProductType';
import BottomFooter from '../../../Components/Footer/BottomFooter';

export default function ProductList(props) {

    const renderProduct = () => {
        const Params = GetParams(props.location.search);
        let content = null
        switch (Params.type) {
            case "store":
                content = <Productstore {...props} />;
                break;
            case "page":
                content = <Page {...props} />
                break;
            case "product":
                content = <ProductType {...props} />
                break;
            default:
                content = null
        }
        return content;
    }

    return (
        <>
            <Body>
                <Header />
                <Menu />
                {renderProduct()}
            </Body>
            <BottomFooter />
        </>
    )
}
