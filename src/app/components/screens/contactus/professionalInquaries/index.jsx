import React from "react";
import { ProfessionalInquiriesWrapper } from './style'

export default function ProfessionalInquiries({ professionalInquiries = {} }) {
    const {
        title = '',
        address = '',
        email = '',
        phone = '' 
    } = professionalInquiries

    return (
        <ProfessionalInquiriesWrapper>
            <label className="title-text"> {title} </label>
            <div className="details-inquiries">
                <label className="details-inquiries-text">Drop us a line :</label>
                <label className="details-inquiries-value">{email}</label>
            </div>
        </ProfessionalInquiriesWrapper>
    )
}