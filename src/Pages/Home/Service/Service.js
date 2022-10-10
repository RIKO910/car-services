import React from 'react';
import './Service.css'
const Service = ({service}) => {
    const {name,img,description,price} =service
    return (
        <div  className='service'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h3><small>{description}</small></h3>
            <h3>{price}</h3>
            <button className='btn btn-primary'>book:{name}</button>
        </div>
    );
};

export default Service;