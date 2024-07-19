
import React, { useState, useCallback } from 'react';
import { MarketPlaceWrapper } from './style'
import noop from 'lodash/noop'


export default function ShowMarketPlace({
    isMobile = false,
    book = [],
    country = [],
    marketPlace = [],
    viewSeriesClick = noop }) {

    const handleViewMoreClick = useCallback((link) => {
        viewSeriesClick(link)
    }, []);

    const [selectedBookOption, setSelectedBookOption] = useState('');
    const [selectedCountryOption, setSelectedCountryOption] = useState('');

    const isBookDropdownSelected = () => {
        return selectedBookOption !== '';
    };


    const isCountryDropdownSelected = () => {
        return selectedCountryOption !== '';
    };


    const handleBookSelectChange = (event) => {
        setSelectedBookOption(event.target.value);
        setSelectedCountryOption('')
    };
    const handleCountrySelectChange = (event) => {
        setSelectedCountryOption(event.target.value);
    };

    return (
        <MarketPlaceWrapper>
            <label className='title-text'>Select Book and Your Country</label>
            <div className='selection-container'>
                <div className='select-book'>
                    <select className='select-book-text' value={selectedBookOption} onChange={handleBookSelectChange}>
                        <option className='select-option-text' value="">Select Book</option>
                        {book.map(bookOption => (
                            <option key={bookOption.bookId} className='select-option-text' value={bookOption.bookId}>{bookOption.bookName}</option>
                        ))}
                    </select>
                </div>

                <div className='select-country'>
                    <select className='select-book-text' value={selectedCountryOption} onChange={handleCountrySelectChange}>
                        <option className='select-option-text' value="">Select Country</option>
                        {country.map(countryOption => (
                            <option key={countryOption.countryId} className='select-option-text' value={countryOption.countryId}>{countryOption.countryName}</option>
                        ))}
                    </select>
                </div>



            </div>

            {isBookDropdownSelected() && isCountryDropdownSelected() &&
                isMobile && <div className='marketplace-mobile-list-container'>
                    {marketPlace.map((item, index) => {
                        const {
                            marketPlaceName = '',
                            marketPlaceImage = '',
                            bookTitle = '',
                            bookDescription = '',
                            cta = {}
                        } = item || {}
                        const { title = '', marketPlaceUrl = '' } = cta || {}
                        return (
                            <div key={index}  className='marketplace-container'>
                                <img src={marketPlaceImage} alt={bookTitle} className='marketplace-image' />
                                <hr className='line-seprator' />
                                <label className='book-title-text'>{bookTitle}</label>
                                <label className='book-description-text'>{bookDescription}</label>
                                <div className='marketplace-button-container'
                                    onClick={(event) => {
                                        event.preventDefault()
                                        event.stopPropagation()
                                        handleViewMoreClick(marketPlaceUrl)
                                    }}
                                >
                                    <label className='marketplace-button-text'>{title}</label>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            }
            {isBookDropdownSelected() && isCountryDropdownSelected() &&
                !isMobile && <div className="grid-container">
                    {marketPlace.map((item, index) => {
                        const {
                            marketPlaceName = '',
                            marketPlaceImage = '',
                            bookTitle = '',
                            bookDescription = '',
                            cta = {}
                        } = item || {}
                        const { title = '', marketPlaceUrl = '' } = cta || {}
                        return (
                            <div key={index} className="grid-item">
                                <img src={marketPlaceImage} alt={bookTitle} className='marketplace-image' />
                                <hr className='line-seprator' />
                                <label className='book-title-text'>{bookTitle}</label>
                                <label className='book-description-text'>{bookDescription}</label>
                                <div className='marketplace-button-container'
                                    onClick={(event) => {
                                        event.preventDefault()
                                        event.stopPropagation()
                                        handleViewMoreClick(marketPlaceUrl)
                                    }}
                                >
                                    <label className='marketplace-button-text'>{title}</label>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            }



        </MarketPlaceWrapper>
    );
};