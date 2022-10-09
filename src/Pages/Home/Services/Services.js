import React, { useEffect, useState } from 'react';
import '../../../images/okk.jpg'


const Services = () => {
    const [services,setServices] =useState([]);
    useEffect( ()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <h2><section>services:{services.length}</section></h2>
        </div>
    );
};

export default Services;