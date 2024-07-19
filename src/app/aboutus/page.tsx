"use client"
import React, { useCallback, useMemo }  from "react";
import '../../app/luxarybook.theme.css'
import AboutUsLandingPage from '../components/screens/aboutus/index'
import Footer from '../components/footer/Footer';
import { useRouter } from 'next/navigation';


const AboutUs = () => {

  const router = useRouter();
  const learnMoreClick = useCallback((url: string) => {
    router.push(url)
  }, [])
  

  const aboutPageActions = useMemo(() => {
    return {
      learnMoreClick
      
    }
  }, [
    learnMoreClick
  ])


  return (
    <>
      <AboutUsLandingPage actions={aboutPageActions}/>
      <Footer />
    </>
  )
};

export default AboutUs;