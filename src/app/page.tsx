'use client'
import '../app/luxarybook.theme.css'
import React, { useCallback, useMemo } from "react";
import HomeLandingPage from './components/home/index'
import { HomePageContainer } from './home.page'
import { useRouter } from 'next/navigation';
import Footer from './components/footer/Footer';

export default function Home() {
  const router = useRouter();
  const learnMoreClick = useCallback((url: string) => {
    router.push(url)
  }, [])

  const exploreBookClick = useCallback((url: string) => {
    router.push(url)
  }, [])
  
  const homePageActions = useMemo(() => {
    return {
      learnMoreClick,
      exploreBookClick
      
    }
  }, [
    learnMoreClick,
    exploreBookClick
  ])
  return (
    <>
      <HomePageContainer >
        <HomeLandingPage actions={homePageActions}/>
      </HomePageContainer>
      <Footer/>
    </>
  );
}