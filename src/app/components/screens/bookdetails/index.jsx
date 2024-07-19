import React from "react";
import { BookDetailsWrapper } from './style';
import AboutBook from './AboutBook/index'
import AboutGlossaryTermsBook from './glossary/index'
import { BookDetailsData } from '../../../bookdetails/bookdetails.data';


export default function BookDetailsLandingPage(){
     
    const {
        title='', 
        imageUrl = '', 
        description = '',
        glossary = {}
    } = BookDetailsData.result
    return(
        <BookDetailsWrapper>

            <AboutBook imageUrl={imageUrl} title={title} description={description}/>
            <AboutGlossaryTermsBook glossary={glossary}/>

        </BookDetailsWrapper>
    )
}