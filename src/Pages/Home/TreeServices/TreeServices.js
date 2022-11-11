import React, { useEffect, useState } from 'react';
import useTitle from '../../../hooks/useTitle';
import TreeServicesCard from './TreeServicesCard';

const TreeServices = () => {

    useTitle('Services');

    const [services, setServices] = useState([]);

    useEffect(() => {

        fetch('https://doctor-server-side.vercel.app/treeServices')
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
                                    services.map(service => <TreeServicesCard
                                        key={service._id}
                                        service={service}
                                    ></TreeServicesCard>)
                                }
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default TreeServices;