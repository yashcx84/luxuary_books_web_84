import React, { useCallback } from "react";
import { BookJourneyOddItemWrapper } from './style'


export default function BookJourneyOddItem({
    character = {},
}) {

    const { bookImageUrl = '', title = '', description = '', cta = {} } = character || {}
    const { text = '', link = '' } = cta || {}
    return (
        <BookJourneyOddItemWrapper>

            <div className="book-details-container">
                <label className="book-journey-title">{title}</label>
                <label className="book-journey-subtitle">{description}</label>
            </div>

            <img className="book-item-image" src={bookImageUrl} />

        </BookJourneyOddItemWrapper>
    )
}