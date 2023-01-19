import React from "react";
import useFetch from '../utils/methods';
import ServiceAccordion from "./ServiceAccordion";
import './Services.css';

const Services = () => {
    const { data, loading } = useFetch({ endpoint: '/services' });


    return (
        <div>
            <h2>Select a Service</h2>
            <div className="serviceList">
                {loading && <div>Loading...</div>}
                {!loading && data.map((service) => (
                    <ServiceAccordion serviceName={service.serviceName} serviceId={service.id} key={service.id} />
                ))}
            </div>
        </div>
    )
}

export default Services;