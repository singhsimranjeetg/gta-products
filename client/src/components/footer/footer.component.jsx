import React from "react"
import {ReactComponent as Logo} from "../../assets/crown.svg"
import {FooterContainer, OptionsContainer, LogoContainer, OptionLink, FooterCopyright} from "./footer.styles"


const Footer = () => (
                    <FooterContainer>
                            <OptionsContainer>
                                <OptionLink>
                                    <a href="/">company</a>
                                </OptionLink>
                                <OptionLink>
                                    <a href="/">contact</a>
                                </OptionLink>
                                <OptionLink>
                                    <a href="/">careers</a>
                                </OptionLink>
                                <OptionLink>
                                    <a href="/">privacy policy</a>
                                </OptionLink>
                                <OptionLink>
                                    <a href="/">terms & condition</a>
                                </OptionLink>
                            </OptionsContainer>
                        <LogoContainer>
                            <Logo />            
                        </LogoContainer>
                       
                
                    
                        <FooterCopyright>
                            Built by SIMRANJEET SINGH with little
                           customization in React course by Andrei.
                           Copyright &copy; by Next-Day-Tours
                           2020
                        </FooterCopyright>

                </FooterContainer>
)

export default Footer