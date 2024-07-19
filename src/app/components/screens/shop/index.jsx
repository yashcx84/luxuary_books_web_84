import React, { useState, useEffect } from 'react';
import { ShopWrapper } from './style'
import ShopBannerPage from './shopbanner/index'
import StayUpdate from './updatewithus/index'
import ShowMarketPlace from './marketplace/index'
import { commonMethod } from '../../../utils/Utility'
import { ShopData } from '../../../shop/Shopdata.Data'
import { ShopCountryData } from './../../../shop/ShopCountry.Data'
import { MarketPlaceData } from './../../../shop/MarketPlace.Data'

export default function ShopLandingPage(props) {
    const {
        viewSeriesClick = noop,
    } = props.actions || {}

    const {
        bannerData = {},
        getUpdatesData = {},
        book = []
    } = ShopData.result
    const {
        country = []
    } = ShopCountryData.result
    const {
        marketPlace = []
    } = MarketPlaceData.result

    const isMobile = commonMethod()

    return (
        <ShopWrapper>
            <ShopBannerPage bannerData={bannerData} />
            <StayUpdate getUpdatesData={getUpdatesData} />
            <ShowMarketPlace
                viewSeriesClick={viewSeriesClick}
                isMobile={isMobile}
                book={book}
                country={country}
                marketPlace={marketPlace}
            />
        </ShopWrapper>
    );
};
