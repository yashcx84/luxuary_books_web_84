import React, {useEffect} from "react";
import { GlossaryWrapper } from './style'
import GlossaryItem from './glossaryitem/index'
import { useRouter } from 'next/navigation';


export default function AboutGlossaryTermsBook({glossary = []}) {
    const {title = '', words = []} = glossary
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
        <GlossaryWrapper id="grossaryoftermssection">
            <label className="title-text">{title}</label>
            <div className="glossary-list-conainer">
                {words.map((word, index) => {
                    if (!word) return null
                    return (
                        <GlossaryItem key={index} word={word}>
                        </GlossaryItem>
                    )
                })}
            </div>

        </GlossaryWrapper>
    )
}
