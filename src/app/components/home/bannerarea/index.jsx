import React, {useCallback, useState } from "react";
import Slider from "../Slider/index";
import { StyledHappyCustomerWrapper, ItemContainer } from './style'
import CustomCarousel from '../../CustomCarousel/index'
import {commonMethod} from '../../../utils/Utility'
import noop from 'lodash/noop'

export default function BannerContent({
    bannerData = [],
    bannerWelcome = "",
    exploreBookClick = noop,
    }) {

    const isMobile = commonMethod();

    const handleClick = useCallback((link) => {
        exploreBookClick(link)
    }, []);

    return (

        <StyledHappyCustomerWrapper>

            <label className="banner-content-welcome-text">{bannerWelcome}</label>
            {
                isMobile ? (
                <CustomCarousel scrollWidth={1} scrollDuration={100}>
                    {bannerData.map((banner, index) => {
                            if (!banner) return null
                            const { bookImage = '', cta = {} } = banner
                            const {text = '', link = ''} = cta
                            return (
                                <ItemContainer key={index}>
                                    <div className="book__img">
                                        <img src={bookImage} alt="book-image" />
                                    </div>
                                    <div className="button-container" 
                                    onClick={(event) => {
                                        event.preventDefault()
                                        event.stopPropagation()
                                        handleClick(link)
                                      }}
                                    >
                                        <label className="button-text">{text}</label>
                                    </div>
                                </ItemContainer>
                            )
                        })}
                </CustomCarousel>
                ) : 
                (
                <Slider slidesToShow={1} slidesToScroll={1} hideBlur={true}>
                    {bannerData.map((banner, index) => {
                            if (!banner) return null
                            const { bookImage = '', title = '', description = '', cta = {} } = banner
                            const {text = '', link = ''} = cta
                            return (
                                <ItemContainer key={index}>
                                    <div className="book__img">
                                        <img src={bookImage} alt="luxary-book" />
                                    </div>
                                    <label className="book-title">{title}</label>
                                    <label className="book-subtitle">{description}</label>
                                    <div className="button-container" 
                                    onClick={(event) => {
                                        event.preventDefault()
                                        event.stopPropagation()
                                        handleClick(link)
                                      }}
                                    >
                                        <label className="button-text">{text}</label>
                                    </div>
                                </ItemContainer>
                            )
                        })}
                </Slider>
                )}
            
        </StyledHappyCustomerWrapper>
    )
}