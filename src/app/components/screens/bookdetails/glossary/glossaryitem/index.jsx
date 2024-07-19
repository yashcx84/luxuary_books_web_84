import React, { useState } from "react";
import { StyledGlossaryItemWrapper } from './style'
import DownArrow from './DownArrow'
import UpArrow from './UpArrow'

export default function GlossaryItem({ word = {} }) {
    const { term = '', meaning = '' } = word || {};
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <StyledGlossaryItemWrapper>
            <div className='header' onClick={toggleExpanded}>
                <label className="term-text">{term}</label>
                <span className="arrow">
                    {isExpanded ? (
                        <UpArrow />
                    ) : (
                        <DownArrow />
                    )}
                </span>
            </div>
            {isExpanded && (
                <div className="meaning-container">
                    <label className="meaning-text">{meaning}</label>
                </div>
            )}
            <hr className="seprator"/>
        </StyledGlossaryItemWrapper>
    );
}