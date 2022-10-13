import { useEffect, useState } from "react";
import Card from "../../components/Card";
import './index.scss';

function Services() {
    const [services, setServices] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:3000/services')
    //     .then(response => response.json())
    //     .then(json => setServices(json))

    // }, [])

    return (
        <div className="page">
            <div className="services">
                <div className="grid">
                    {services.map((service : any) => (
                    <Card name={service.name} image={service.image} description={service.description} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Services;