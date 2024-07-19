import React from 'react';
import {ShopBannerWrapper} from './style'

export default function ShopBannerPage({bannerData = {}}) {

    const {bookImageUrl = '', title = '', subtitle = '', description = ''} = bannerData || {}
    return (
        <div>
            <ShopBannerWrapper>
                <div className='banner-text-container'>
                    <label className='shop-banner-title'>{title}</label>
                    <label className='shop-banner-subtitle'>{subtitle}</label>
                    <label className='shop-banner-description'>{description}</label>
                </div>
                <div className='banner-image-container'>
                    <img src={bookImageUrl} className='banner-image' alt='Book Shop Image'/>
                </div>
            </ShopBannerWrapper>
        </div>
    );
};
