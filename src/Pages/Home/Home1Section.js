import React from 'react';
import Card from 'react-bootstrap/Card';
import covid from '../../Photo/covid.png';

const Home1Section = () => {
    return (
        <>
            <Card>
                <Card.Img variant="top"
                    src={covid}
                    className='p-5 m-2'
                    width="50"
                    height="300"

                />
                <Card.Body>
                    <Card.Text>
                        Everyone is talking about coronavirus disease (COVID-19), and everywhere you look there’s information on the virus and how to protect yourself from it. Knowing the facts is key to being properly prepared and protecting yourself and your loved ones.

                        Be sure to get your facts from reliable sources, like UNICEF and the World Health Organization. UNICEF is working with global health experts around the clock to provide accurate information. Information you can trust is grounded in the latest scientific evidence. We’ll continue to provide the latest updates, explainers for parents and teachers, and resources for media as new information becomes available, so check back to stay informed of the best ways to protect yourself and your family.

                        Please share this information with your family, friends and colleagues to help ensure people have the facts about COVID-19 and can protect their health
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
};

export default Home1Section;