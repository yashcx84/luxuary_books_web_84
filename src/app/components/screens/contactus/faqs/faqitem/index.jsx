import React, { useState } from "react";
import { StyledFaqItemWrapper } from './style'
import DownArrow from './DownArrow'
import UpArrow from './UpArrow'

export default function FaqItem({ faq = {} }) {
    const { question = '', answer = '' } = faq || {};
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <StyledFaqItemWrapper>
            <div className='header' onClick={toggleExpanded}>
                <label className="question-text">{question}</label>
                <span className="arrow">
                    {isExpanded ? (
                        <UpArrow />
                    ) : (
                        <DownArrow />
                    )}
                </span>
            </div>
            {isExpanded && (
                <div className="answer-container">
                    <label className="content">{answer}</label>
                </div>
            )}
            <hr className="seprator"/>
        </StyledFaqItemWrapper>
    );
}