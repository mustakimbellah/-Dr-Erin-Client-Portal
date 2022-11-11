import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Banner from '../Banner/Banner';
import Home1Section from './Home1Section';
import Home2Section from './Home2Section';
import TreeServices from './TreeServices/TreeServices';
//import Services from './Services/Services';


const Home = () => {

    useTitle('Home')

    return (
        <div>

            <Banner></Banner>
            {/* <Services></Services> */}
            <TreeServices></TreeServices>
            <Link to={'/services'}>
                <button className='text-center m-5'>See All Services</button>
            </Link>
            <Home1Section></Home1Section>
            <Home2Section></Home2Section>

        </div>
    );
};

export default Home;