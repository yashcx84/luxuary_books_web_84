import React, { useCallback } from "react";
import { BookJourneyEvenItemWrapper } from './style'


export default function BookJourneyEvenItem({ 
    character = {}
 }) {
    const { bookImageUrl = '', title = '', description = '', cta = {} } = character || {}
    const { text = '', link = '' } = cta || {}
   
    return (
        <BookJourneyEvenItemWrapper>
            <img className="book-item-image" src={bookImageUrl} />

            <div className="book-details-container">
                <label className="book-journey-title">{title}</label>
                <label className="book-journey-subtitle">{description}</label>
            </div>

        </BookJourneyEvenItemWrapper>
    )
}