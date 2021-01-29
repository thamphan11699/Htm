import React, { Component } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

class Accommodation extends Component {

    componentWillMount() {
        
        
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <Header/>
                {/* <Footer/> */}
            </div>
        );
    }
}

export default Accommodation;