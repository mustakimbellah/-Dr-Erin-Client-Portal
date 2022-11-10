import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaDollarSign, FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TreeServicesCard = ({ service }) => {
    const { _id, img, price, title, description, rating } = service;
    return (
        <div>
            <Card className='border border-primary' style={{ width: '18rem' }}>
                <Card.Title className='bg-secondary text-light'>{title}</Card.Title>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    {/* <Card.Text className='text-start text-dark'>{description}</Card.Text> */}
                    {
                        description.length > 100 ?
                            <Card.Text className='text-start text-dark'>{description.slice(0, 100) + '...'}</Card.Text>
                            :
                            <Card.Text className='text-start text-dark'>{description}</Card.Text>

                    }
                    <div className='d-flex justify-content-between'>
                        <Card.Text className='text-start text-success'><FaDollarSign></FaDollarSign> {price}</Card.Text>
                        <Card.Text className='text-start text-success'><FaEye></FaEye> {rating}</Card.Text>
                    </div>
                    <Link to={`/sericedetails/${_id}`}>
                        <Button variant="primary">View Details</Button>
                    </Link>
                </Card.Body>
            </Card>

        </div>
    );
};

export default TreeServicesCard;