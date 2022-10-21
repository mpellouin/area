import { useEffect, useState } from "react";
import './index.scss';

import Header from "../../components/Header";
import Card from "../../components/Card";

const buttons = [
    {
        name: "SERVICES",
        path: "/services",
        isButton: false
    },
    {
        name: "AREA",
        path: "/areas",
        isButton: false
    },
    {
        name: "LOG OUT",
        path: "/",
        isButton: true
    }
]

function Services() {
    const [services, setServices] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:3000/services')
    //     .then(response => response.json())
    //     .then(json => setServices(json))

    // }, [])

    return (
        <>
            <Header buttons={buttons}/>
            <div className="page">
                <div className="services">
                    <div className="grid">
                        {services.map((service : any) => (
                        <Card name={service.name} image={service.image} description={service.description} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Services;