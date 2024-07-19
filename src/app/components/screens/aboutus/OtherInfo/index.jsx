import React, { useCallback } from "react";
import { OtherInfoWrapper } from './style';
import noop from 'lodash/noop'

export default function OtherInfo({
    otherInfo = {},
    learnMoreClick = noop
}) {
    const { description = '', cta = {} } = otherInfo || {}
    const { text = '', link = '' } = cta || {}
    const handleClick = useCallback((link) => {
        learnMoreClick(link)
    }, []);
    return (
        <OtherInfoWrapper>

            <label className="description">{description}</label>
            <div className="button-container"
            onClick={(event) => {
                event.preventDefault()
                event.stopPropagation()
                handleClick(link)
            }}>
                <label className="button-text">{text}</label>
            </div>
        </OtherInfoWrapper>
    )
}