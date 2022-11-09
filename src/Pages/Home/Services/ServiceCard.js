import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaDollarSign, FaEye } from 'react-icons/fa';

const ServiceCard = ({ service }) => {

    const { img, price, title, description, rating } = service;

    return (
        <Card className='border border-primary' style={{ width: '18rem' }}>
            <Card.Title className='bg-secondary text-light'>{title}</Card.Title>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Text className='text-start text-dark'>{description}</Card.Text>
                <div className='d-flex justify-content-between'>
                    <Card.Text className='text-start text-success'><FaDollarSign></FaDollarSign> {price}</Card.Text>
                    <Card.Text className='text-start text-success'><FaEye></FaEye> {rating}</Card.Text>
                </div>
                <Button variant="primary">View Details</Button>
            </Card.Body>
        </Card>
    );
};

export default ServiceCard;