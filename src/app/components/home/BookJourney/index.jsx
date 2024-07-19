import React, {useCallback} from "react"
import { BookJouneyWrapper } from './style';
import BookJourneyOddItem from './BookJouneyOddItem/index'
import BookJourneyEvenItem from './BookJouneyEvenItem/index'
import BookJourneyEvenComponent from './BookJouneyEvenItemMobile/index'
import BookJourneyOddComponent from './BookJouneyOddItemMobile/index'
import { commonMethod } from '../../../utils/Utility'
import noop from 'lodash/noop'

export default function BookJourney({
    bookJourney = {},
    learnMoreClick = noop
}) {

    const isMobile = commonMethod();
    const { characters = [], cta = {}, headerText = "" } = bookJourney || {}

    const { text = '', link = '' } = cta || {};

    const handleClick = useCallback((link) => {
        learnMoreClick(link)
    }, []);


    return (
        <BookJouneyWrapper >
            <label className="header-text">{headerText}</label>
            {isMobile ? (
                <div className="bgContainer">
                    {characters.map((character, index) => {
                        if (!character) return null
                        const isEven = index % 2 == 0
                        return (
                            <div key={index}>
                                {isEven ? (
                                    <BookJourneyEvenComponent character={character} />
                                )
                                    :
                                    (
                                        <BookJourneyOddComponent character={character} />
                                    )}
                            </div>
                        )
                    })}
                </div>
            ) : (
                <div className="bgContainer">
                    {characters.map((character, index) => {
                        if (!character) return null
                        const isEven = index % 2 == 0
                        return (
                            <div key={index}>
                                {isEven ? (
                                    <BookJourneyEvenItem character={character} />
                                )
                                    :
                                    (
                                        <BookJourneyOddItem character={character} />
                                    )}
                            </div>
                        )
                    })}
                </div>
            )}

            <div className="book-journey-button-container"
                onClick={(event) => {
                    event.preventDefault()
                    event.stopPropagation()
                    handleClick(link)
                }}>
                <label className="book-journey-button-text">{text}</label>
            </div>
        </BookJouneyWrapper>
    )
}