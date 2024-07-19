import React from "react";
import { AboutUsWrapper } from './style';
import AuthorImage from './AboutAuthor/index';
import UseFulLinkPage from './usefulllinks/index'
import OtherInfo from './OtherInfo/index';
import TestimonialsPage from './testimonials/index';
import noop from 'lodash/noop'
import { AboutUsData } from '../../../aboutus/aboutus.data';
import { commonMethod } from '@/app/utils/Utility';

export default function AboutUsLandingPage(props){
    const {
        learnMoreClick = noop
      } = props.actions || {}
      const {
        title='', 
        imageUrl = '', 
        description = '',
        usefulLinks = [],
        otherInfo = {},
        testimonials = {}
    } = AboutUsData.result
    const isMobile = commonMethod();

    return(
        <AboutUsWrapper>
            <AuthorImage imageUrl={imageUrl} title={title} description={description}/>
            <UseFulLinkPage isMobile={isMobile} usefulLinks={usefulLinks}/>
            <TestimonialsPage testimonials={testimonials} isMobile={isMobile}/>

        </AboutUsWrapper>
    )
}