import React from 'react'
import { Header } from '../../Components/Header/Header'
import { Menu } from '../../Components/Menu-Header/Menu';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { bannerData, products } from '../../data'
import { BannerBox, PreBTN, NextBTN, DealOFDay, HeaderOFDAY, ViewBTN, DiscountItms, DiscountItm, ItemDiscunt, ItemName, ItemTitle } from './Home.style';
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import Footer from '../../Components/Footer/Footer';

export const Home = () => {
    return (
        <>
            <Header />
            <Menu />
            <BannerBox>
                <Carousel
                    autoPlay={true}
                    showThumbs={false}
                    infiniteLoop={true}
                    showIndicators={false}

                    renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
                        hasPrev && (
                            <PreBTN onClick={clickHandler}>
                                <GrFormPrevious />
                            </PreBTN>
                        )
                    }
                    renderArrowNext={(clickHandler, hasNext, labelNext) =>
                        hasNext && (
                            <NextBTN onClick={clickHandler}>
                                <GrFormNext />
                            </NextBTN>
                        )
                    }
                >
                    {bannerData.map((item, index) => { return <div key={index}>  <img src={item} alt={item} /></div> })}

                </Carousel>

                <DealOFDay>
                    <HeaderOFDAY>
                        <p>Deal of the day</p>
                        <ViewBTN>View All</ViewBTN>
                    </HeaderOFDAY>
                    <DiscountItms>
                        {
                            products.map((item, index) => {

                                return (
                                    <DiscountItm key={index}>
                                        <img src={item.url} alt={item} />
                                        <ItemName>{item.title.shortTitle}</ItemName>
                                        <ItemDiscunt>Up to {item.price.discount} discount</ItemDiscunt>
                                        <ItemTitle>{item.title.longTitle}</ItemTitle>
                                    </DiscountItm>
                                )
                            })
                        }
                    </DiscountItms>
                </DealOFDay>
                <DealOFDay>
                    <HeaderOFDAY>
                        <p>Deal of the day</p>
                        <ViewBTN>View All</ViewBTN>
                    </HeaderOFDAY>
                    <DiscountItms>
                        {
                            products.reverse().map((item, index) => {

                                return (
                                    <DiscountItm key={index}>
                                        <img src={item.url} alt={item} />
                                        <ItemName>{item.title.shortTitle}</ItemName>
                                        <ItemDiscunt>Up to {item.price.discount} discount</ItemDiscunt>
                                        <ItemTitle>{item.title.longTitle}</ItemTitle>
                                    </DiscountItm>
                                )
                            })
                        }
                    </DiscountItms>
                </DealOFDay>
                <DealOFDay>
                    <HeaderOFDAY>
                        <p>Deal of the day</p>
                        <ViewBTN>View All</ViewBTN>
                    </HeaderOFDAY>
                    <DiscountItms>
                        {
                            products.reverse().map((item, index) => {

                                return (
                                    <DiscountItm key={index}>
                                        <img src={item.url} alt={item} />
                                        <ItemName>{item.title.shortTitle}</ItemName>
                                        <ItemDiscunt>Up to {item.price.discount} discount</ItemDiscunt>
                                        <ItemTitle>{item.title.longTitle}</ItemTitle>
                                    </DiscountItm>
                                )
                            })
                        }
                    </DiscountItms>
                </DealOFDay>
            </BannerBox>
            <Footer />

        </>
    )
}
