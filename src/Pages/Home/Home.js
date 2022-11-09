import React from 'react';
import Banner from '../Banner/Banner';
import Home1Section from './Home1Section';
import Home2Section from './Home2Section';
import Services from './Services/Services';


const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Services></Services>
            <Home1Section></Home1Section>
            <Home2Section></Home2Section>

        </div>
    );
};

export default Home;