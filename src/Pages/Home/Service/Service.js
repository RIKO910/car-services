import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({service}) => {
    const {id,name,img,description,price} =service
    const navigate =useNavigate();
    const navigateToServiceDetail =id =>{
        navigate(`/service/${id}`)
    }
    return (
        <div  className='service'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h3><small>{description}</small></h3>
            <h3>{price}</h3>
            <button onClick={()=>navigateToServiceDetail(id)} className='btn btn-primary'>book:{name}</button>
        </div>
    );
};

export default Service;