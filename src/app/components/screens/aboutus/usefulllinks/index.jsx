import React from 'react';
import { UseFulLinkWrapper } from './style';
import UsefulLinkItem from './UsefulLinkItem/index'

export default function UseFulLinkPage({ isMobile = false, usefulLinks = [] }) {

    return (
        <UseFulLinkWrapper>
            <div>
                {usefulLinks.map((usefulLink, index) => {
                    if (!usefulLink) return null
                    return (
                        <UsefulLinkItem key={index} isMobile={isMobile} usefulLink={usefulLink}/>
                    )
                })}
            </div>

        </UseFulLinkWrapper>
    )
}