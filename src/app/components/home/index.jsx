
import React from "react";
import BannerContent from './bannerarea/index'
import AboutBook from './AboutBook/index'
import BookJourney from './BookJourney/index'
import {HomeData} from './home.data'
import noop from 'lodash/noop'
import {HomeScreenContainer} from './style'

export default function HomeLandingPage(props) {
    const {
        learnMoreClick = noop,
        exploreBookClick = noop,
      } = props.actions || {}
      const {
        bannerWelcome = "",
        bannerData=[], 
        aboutBook = {}, 
        bookJourney = {}
    } = HomeData.result

    return (

        <HomeScreenContainer>
        <BannerContent exploreBookClick={exploreBookClick} bannerData={bannerData} bannerWelcome={bannerWelcome}/>
        <AboutBook learnMoreClick={learnMoreClick} aboutBook={aboutBook}/>
        <BookJourney bookJourney={bookJourney} learnMoreClick={learnMoreClick}/>
        </HomeScreenContainer>
    )
}