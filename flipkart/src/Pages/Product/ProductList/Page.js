import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router'
import Pageactions from '../../../Context/Page/Page.actions';
import { PageContext } from '../../../Context/Page/PageContextProvider';
import { GetParams } from '../../../utils/Getparams';
import { Link } from "react-router-dom"
import { PageTitle } from './ProductList.style';
import { Host } from '../../../data';

export default function Page(props) {

    const { pages, Pagedispatch } = useContext(PageContext);
    const params = GetParams(props.location.search);
    const path = useLocation().pathname.split('/')[1];

    useEffect(() => {

        try {

            const getPage = async () => {
                const res = await axios.get(`${Host}/api/page/${params.cid}/${params.type}`);
                Pagedispatch({ type: Pageactions.Feaching_success, payload: res.data });
            }
            getPage()

        } catch (error) {

            console.log(error)

        }

    }, [])

    return (
        <div>
            <PageTitle>{pages && pages.title}</PageTitle>
            <Carousel
                showThumbs={false}
                showIndicators={false}
            >
                {
                    pages && pages.banners.map((item, index) => (
                        <Link style={{ display: "block", marginBottom: "50px" }} to={`/brand/${path}`} key={index}>
                            <img src={`${Host}/${item.img}`} alt="" style={{ width: "100%", height: "100vh" }} />
                        </Link>
                    ))
                }
            </Carousel>
        </div>
    )
}
