import React from 'react';
import notFound  from '../../../../images/not-found.jpg';
import './NotFound.css'
const NotFound = () => {
    return (
        <div className='design'>
            <h2 className='text-primary'>404 Not Found</h2>
            <img className='w-50 h-50' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;