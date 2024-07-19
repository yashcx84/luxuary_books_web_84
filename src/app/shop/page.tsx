'use client';
import React, { useCallback, useMemo } from "react";
import '../../app/luxarybook.theme.css'
import Footer from '../components/footer/Footer';
import ShopLandingPage from '../components/screens/shop/index'
import { ShopPageContainer } from './shop.page'

const Shop = () => {

  const viewSeriesClick = useCallback((url: string) => {
    window.open(url, '_blank');
  }, [])
  const shopPageActions: any = useMemo(() => {
    return {
      viewSeriesClick

    }
  }, [
    viewSeriesClick
  ])
  return (
    <>
      <ShopPageContainer>
        <ShopLandingPage actions={shopPageActions}></ShopLandingPage>
      </ShopPageContainer>
      <Footer />
    </>
  );
};

export default Shop;