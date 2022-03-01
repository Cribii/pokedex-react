import React from 'react';
import SEO from '../organisms/SEO';
import Header from '../organisms/Header';
import Navigation from '../organisms/Navigation';
import MainContainer from '../organisms/MainContainer';
import Footer from '../organisms/Footer';

/**
 * Default layout for site.
 * @returns {JSX.Element}
 */
export const DefaultLayout = (props) => (
    <>
     <SEO />
     <header />
     <Navigation />
     <MainContainer />
     <footer />
    </>

);

export default DefaultLayout;