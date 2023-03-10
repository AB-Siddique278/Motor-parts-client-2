import React, { useEffect, useState } from 'react';
import ServicesCard from '../ProductsServices/ServicesCard';

const Tools = () => {
    const [services, setServices] = useState([])
    useEffect(() => {

        fetch('https://server2-sigma.vercel.app/service')
            .then(response => response.json())
            .then(data => setServices(data))

    }, [])

    let shotservices = services.slice(0, 6)
    

    return (
        <div>
            <div>
                <h1 className='my-5 text-center font-mono font-bold text-primary text-5xl '>Our Products</h1>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10'>
                    {
                        shotservices.map(service => <ServicesCard
                            key={service._id}
                            service={service}

                        ></ServicesCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Tools;