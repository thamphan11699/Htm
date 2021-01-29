import React, { Component } from 'react';
import Header from '../../Header/Header';
import Slides from '../../Slide/Slide';
import Intro from '../../Intro/Intro';
import PreviewPage from '../../PreviewPage/PreviewPage';
import Offer from '../../Offer/Offer';
import Map from '../../Maps/Map';
import Footer from '../../Footer/Footer';

class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Slides/>
                <Intro/>
                <PreviewPage/>
                <Offer/>
                <Map/>
                <Footer/>
            </div>
        );
    }
}

export default Home;