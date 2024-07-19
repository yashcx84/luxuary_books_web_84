import React, {useCallback} from 'react';
import { ContactInfoWrapper } from './style';
import Arrow from '../Arrow';
import { useRouter } from 'next/navigation';

export default function UsefulLinkItem({isMobile = false, usefulLink = {}}) {
    const router = useRouter();
    const {title = '', link = ''} = usefulLink || {};
    const learnMoreClick = useCallback((url) => {
        router.push(url)
      }, [])
    return (
        <ContactInfoWrapper>
            <div className="top-stroke"></div>
            <div className='item-container' onClick={() => learnMoreClick(link)}>
                <label className="content">{title}</label>
                <Arrow isMobile={isMobile}/>
            </div>
            <div className="bottom-stroke"></div>

        </ContactInfoWrapper>
    )
}