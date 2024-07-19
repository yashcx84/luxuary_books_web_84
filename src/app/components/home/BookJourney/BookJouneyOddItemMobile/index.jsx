import React, { useCallback } from 'react';
import { BookJourneyOddItemWrapper } from './style'

export default function BookJourneyOddComponent({
    character = {}
}) {
    const { bookImageUrl = '', title = '', description = '', cta = {} } = character || {}
    const { text = '', link = '' } = cta || {}
    
    return (
        <BookJourneyOddItemWrapper>

            <img src={bookImageUrl} className='book-item-image' />
            <label className="book-journey-title">{title}</label>
            <label className="book-journey-subtitle">{description}</label>
        </BookJourneyOddItemWrapper>
    )
}