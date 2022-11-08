import React from 'react';
import Card from 'react-bootstrap/Card';
import covid from '../../Photo/covid.png';

const Home1Section = () => {
    return (
        <>
            <Card>
                <Card.Img variant="top"
                    src={covid}
                    className=''
                    width="50"
                    height="300"

                />
                <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
};

export default Home1Section;