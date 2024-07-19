import React, {useEffect} from "react";
import { FAQsWrapper } from './style'
import FaqItem from './faqitem/index'
import { useRouter } from 'next/navigation';


export default function FAQs({faqs = []}) {
    const router = useRouter();
    useEffect(() => {
        // Check if there's a hash in the URL
        if (router.asPath !== router.route) {
          const sectionId = router.asPath.substring(router.asPath.indexOf('#') + 1);
          const section = document.getElementById(sectionId);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, [router.asPath]);
    return (
        <FAQsWrapper id="faqsection">
            <label className="title-text">FAQS</label>
            <div className="faq-list-conainer">
                {faqs.map((faq, index) => {
                    if (!faq) return null
                    return (
                        <FaqItem key={index} faq={faq}>
                        </FaqItem>
                    )
                })}
            </div>

        </FAQsWrapper>
    )
}
