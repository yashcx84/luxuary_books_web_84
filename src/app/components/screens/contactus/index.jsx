import React from "react";
import { ContactUsWrapper } from './style';
import AuthorImage from './AboutBook/index'
import ProfessionalInquiriesWrapper from './professionalInquaries/index';
import SendMessge from './sendmessage/index';
import FAQs from './faqs/index';
import {ContactusData} from '../../../contactus/Contactus.Data'

export default function ContactUsLandingPage(){
      const {
        title='', 
        imageUrl = '', 
        description = '',
        faqs = [],
        professionalInquiries= {}
    } = ContactusData.result

    return(
        <ContactUsWrapper>

            <AuthorImage imageUrl={imageUrl} title={title} description={description}/>
            <SendMessge/>
            <FAQs faqs={faqs}/>
            <ProfessionalInquiriesWrapper professionalInquiries={professionalInquiries}/>

        </ContactUsWrapper>
    )
}