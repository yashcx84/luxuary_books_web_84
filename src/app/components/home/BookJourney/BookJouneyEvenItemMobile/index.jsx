import React, {useCallback} from 'react';
import {BookJourneyEvenItemWrapper} from './style'

export default function BookJourneyEvenComponent({
    character = {}
}) {

    const { bookImageUrl = '', title = '', description = '', cta = {} } = character || {}
    const {text = '', link = ''} = cta || {}

    return(
        <BookJourneyEvenItemWrapper>

            <img src={bookImageUrl} className='book-item-image'/>
            <label className="book-journey-title">{title}</label>
            <label className="book-journey-subtitle">{description}</label> 
        </BookJourneyEvenItemWrapper>
    )
}