import React from 'react';
import covid from '../../Photo/covid.png';
import dengue from '../../Photo/dengue.jpg';
import Accordion from 'react-bootstrap/Accordion';

const Home1Section = () => {
    return (
        <Accordion defaultActiveKey="0" className='m-5 p-5'>
            <Accordion.Item eventKey="0">
                <Accordion.Header className='text-center'>Covid Information</Accordion.Header>
                <Accordion.Body className='text-center'>
                    <img
                        width="auto"
                        height="300"
                        className='text-center'
                        src={covid} alt="" />
                    <p className='text-start'>Everyone is talking about coronavirus disease (COVID-19), and everywhere you look there’s information on the virus and how to protect yourself from it. Knowing the facts is key to being properly prepared and protecting yourself and your loved ones.Be sure to get your facts from reliable sources, like UNICEF and the World Health Organization. UNICEF is working with global health experts around the clock to provide accurate information. Information you can trust is grounded in the latest scientific evidence. We’ll continue to provide the latest updates, explainers for parents and teachers, and resources for media as new information becomes available, so check back to stay informed of the best ways to protect yourself and your family.Please share this information with your family, friends and colleagues to help ensure people have the facts about COVID-19 and can protect their health</p>
                </Accordion.Body >
            </Accordion.Item >
            <Accordion.Item eventKey="1">
                <Accordion.Header className='text-center'>Dengue Information</Accordion.Header>
                <Accordion.Body className='text-center'>
                    <img
                        width="auto"
                        height="300"
                        className='text-center'
                        src={dengue} alt="" />
                    <p className='text-start'>Dengue is a mosquito-borne viral disease that has rapidly spread to all regions of WHO in recent years. Dengue virus is transmitted by female mosquitoes mainly of the species Aedes aegypti and, to a lesser extent, Ae. albopictus. These mosquitoes are also vectors of chikungunya, yellow fever and Zika viruses. Dengue is widespread throughout the tropics, with local variations in risk influenced by climate parameters as well as social and environmental factors.Dengue has distinct epidemiological patterns, associated with the four serotypes of the virus. These can co-circulate within a region, and indeed many countries are hyper-endemic for all four serotypes. Dengue has an alarming impact on both human health and the global and national economies. DENV is frequently transported from one place to another by infected travellers; when susceptible vectors are present in these new areas, there is the potential for local transmission to be established.</p>
                </Accordion.Body >
            </Accordion.Item >

        </Accordion >
    );
};

export default Home1Section;