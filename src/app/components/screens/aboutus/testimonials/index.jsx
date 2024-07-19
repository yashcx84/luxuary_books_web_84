import React from "react";
import { TestiMonialsWrapper, TestimonialItem } from './style';
import Slider from "../../../home/Slider/index";
import RatingStar from './StarRating'
import CustomCarousel from '../../../CustomCarousel/index'

export default function TestimonialsPage({ testimonials = {}, isMobile = false, }) {

    const { title = '', reviews = [] } = testimonials || {}
    return (
        <TestiMonialsWrapper>
            <div className="blur-background"></div>
            <label className="title-text ">{title}</label>

            {isMobile ? (
                <CustomCarousel scrollWidth={1} scrollDuration={100}>
                    {reviews.map((review, index) => {
                        if (!review) return null
                        const { name = '', lastUpdated = '', description = '', rating = 0.0 } = review

                        return (
                            <TestimonialItem key={index}>

                                <div className="inner-cover-area">

                                    <RatingStar isMobile={isMobile} rating={rating}/>
                                    <div className="text-container">
                                        <img src="./images/shape_quotes_mobile.svg" className="quote-image" />
                                        <label className="review-title">{description}</label>
                                    </div>
                                    <div className="user-info-container">
                                        <label className="user-name">{name}</label>
                                        <label className="user-occupation">{lastUpdated}</label>
                                    </div>

                                </div>

                            </TestimonialItem>
                        )

                    })}
                </CustomCarousel>
            ) : (
                <Slider slidesToShow={1} slidesToScroll={1} hideBlur={true}>
                    {reviews.map((review, index) => {
                        if (!review) return null
                        const { name = '', lastUpdated = '', description = '', rating = 0.0 } = review

                        return (
                            <TestimonialItem key={index}>

                                <div className="inner-cover-area">

                                    <RatingStar isMobile={isMobile} rating={rating}/>
                                    <div className="text-container">
                                        <img src="./images/shape_quotes.svg" className="quote-image" />
                                        <label className="review-title">{description}</label>
                                    </div>
                                    <div className="user-info-container">
                                        <label className="user-name">{name}</label>
                                        <label className="user-occupation">{lastUpdated}</label>
                                    </div>

                                </div>

                            </TestimonialItem>
                        )

                    })}
                </Slider>
            )}


        </TestiMonialsWrapper>
    )
}