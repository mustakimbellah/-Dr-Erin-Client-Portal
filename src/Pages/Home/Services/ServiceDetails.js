import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import useTitle from '../../../hooks/useTitle';

const ServiceDetails = () => {

    useTitle('Services')

    const { img, description, title, price, rating } = useLoaderData();
    return (
        <div className='text-center'>
            <h1>Services Details Information</h1>
            <h2>Service Name: {title}</h2>





            <img className='w-50 h-50' src={img} alt="" />


            <h5>Details: {description}</h5>
            <h6>Price : $ {price}</h6>
            <h6>Rating : {rating}</h6>




        </div>
    );
};

export default ServiceDetails;