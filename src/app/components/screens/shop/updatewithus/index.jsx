import React, { useState } from 'react';
import { StayUpdateWrapper } from './style'

export default function StayUpdate({getUpdatesData = {}}) {
    const {title = '', description = ''} = getUpdatesData || {}
    const [emailText, setEmailText] = useState('');
    
    const handleChangeEmail = (event) => {
        setEmailText(event.target.value);
    };
    return (
        <div>
            <StayUpdateWrapper>
                <label className='title-text'>{title}</label>
                <label className='description-text'>{description}</label>

                <div className='subscribe-email-container'>
                    <input
                        className="email-input-text"
                        type="email"
                        value={emailText}
                        placeholder="Your Email"
                        onChange={handleChangeEmail} />

                        <div className='subscribe-button-container'>
                            <label className='subscribe-button-text'>Subscribe</label>
                        </div>
                </div>

            </StayUpdateWrapper>
        </div>
    );
};
