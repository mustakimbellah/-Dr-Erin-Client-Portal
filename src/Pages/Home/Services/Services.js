import React, { useEffect, useState } from 'react';
import useTitle from '../../../hooks/useTitle';
import Review from '../../Review/Review';
import ServiceCard from './ServiceCard';

const Services = () => {

    useTitle('Services')

    const [services, setServices] = useState([]);

    useEffect(() => {

        fetch('https://doctor-server-side.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))

    }, []);


    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="">
                    <h1 className='text-center text-success mt-3 mb-3'>Services</h1>
                    <div className='text-success'>
                        <div className="container ">
                            <div className="row d-flex gap-3 text-center">

                                {
                                    services.map(service => <ServiceCard
                                        key={service._id}
                                        service={service}
                                    ></ServiceCard>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
                {/* 
            {
                services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                ></ServiceCard>)
            } */}


            </div>


            <Review></Review>

        </div>
    );
};

export default Services;

//col-7 col-md-8 col-lg-9