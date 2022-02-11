import React from 'react'
import img from "../../img/Screenshot_1.png"
import { Bottom, FooterLinks, Top, TopLeft, TopLeftTitle, TopRight } from './Footer.style';
import { helpIcon, giftIcon, starIcon, cartIcon } from "../../data"

export default function BottomFooter() {

    return (
        <div>
            <FooterLinks>
                <Top>
                    <TopLeft>
                        <div>
                            <TopLeftTitle>ABOUT</TopLeftTitle>
                            <p>contact us</p>
                            <p>about us</p>
                            <p>carrer</p>
                            <p>flipkart stories</p>
                            <p>press</p>
                            <p>flipkart wholesele</p>
                            <p>corporate</p>
                        </div>
                        <div>
                            <TopLeftTitle>HELP</TopLeftTitle>
                            <p>Payments</p>
                            <p>Shipping</p>
                            <p>Cancellation & Returns</p>
                            <p>FAQ</p>
                            <p>Report Infringement</p>
                        </div>
                        <div>
                            <TopLeftTitle>POLICY</TopLeftTitle>
                            <p>Return Policy</p>
                            <p>Terms Of Use</p>
                            <p>Security</p>
                            <p>Privacy</p>
                            <p>Sitemap</p>
                            <p>EPR Compliances</p>
                        </div>
                        <div>
                            <TopLeftTitle>SOCIAL</TopLeftTitle>
                            <p>SOCIAL</p>
                            <p>Facebook</p>
                            <p>Twitter</p>
                            <p>YouTube</p>
                        </div>
                    </TopLeft>
                    <TopRight>
                        <div>
                            <TopLeftTitle> Mail Us:</TopLeftTitle>

                            <p>Flipkart Internet Private Limited,</p>

                            <p>Buildings Alyssa, Begonia &</p>

                            <p> Clove Embassy Tech Village,</p>

                            <p>Outer Ring Road, Devarabeesanahalli Village,</p>

                            <p>Bengaluru, 560103,</p>

                            <p>Karnataka, India</p>
                        </div>
                        <div>
                            <TopLeftTitle>Registered Office Address:</TopLeftTitle>

                            <p>Flipkart Internet Private Limited,</p>

                            <p>Buildings Alyssa, Begonia &</p>

                            <p>Clove Embassy Tech Village,</p>

                            <p>Outer Ring Road, Devarabeesanahalli Village,</p>

                            <p>Bengaluru, 560103,</p>

                            <p>Karnataka, India</p>

                            <p>CIN : U51109KA2012PTC066107</p>

                            <p>Telephone: <span>1800 202 9898</span></p>
                        </div>

                    </TopRight>
                </Top>
                <Bottom>
                    <div>
                        <img src={cartIcon} alt="" style={{ width: "14px", marginRight: "5px" }} />
                        <p>Sell On Flipkart</p>
                    </div>
                    <div>
                        <img src={starIcon} alt="" style={{ width: "14px", marginRight: "5px" }} />
                        <p>Advertise</p>
                    </div>
                    <div>
                        <img src={giftIcon} alt="" style={{ width: "14px", marginRight: "5px" }} />
                        <p>Gift Cards</p>
                    </div>
                    <div>
                        <img src={helpIcon} alt="" style={{ width: "14px", marginRight: "5px" }} />
                        <p>Help Center</p>
                    </div>
                    <div>
                        <p>© 2007-2021 Flipkart.com</p>
                    </div>
                    <div>
                        <img style={{ width: "100%" }} src={img} alt="" />
                    </div>
                </Bottom>
            </FooterLinks>
        </div>
    )
}
