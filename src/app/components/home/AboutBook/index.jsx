import React, { useCallback } from "react";
import { AboutBookContainer } from './style'
import LeftBook from './LeftBook'
import RightBook from './RightBook'
import noop from 'lodash/noop'
import { commonMethod } from '../../../utils/Utility'

export default function AboutBook({
    learnMoreClick = noop,
    aboutBook = {}
}) {
    const { logoImage = '', cta = {} } = aboutBook
    const { text = '', link = '' } = cta || {}
    const handleClick = useCallback((link) => {
        learnMoreClick(link)
    }, []);
    const isMobile = commonMethod();

    return (
        <AboutBookContainer>

            <div className="book-img">
                <LeftBook ismobile={isMobile} />
            </div>
            <div className="text-container">
                <img className="image"
                    src='/images/logo1.png'
                    alt="Logo" />
                <div className="button-container-aboutbook" onClick={() => handleClick(link)}>
                    <label className="button-text-aboutbook">{text}</label>
                </div>

            </div>
            <div className="book-img">
                <RightBook ismobile={isMobile} />
            </div>
        </AboutBookContainer>
    )
}