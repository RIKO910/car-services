import React from 'react';
import { useParams ,Link} from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceID}=useParams()
    return (
        <div>
            <h2>Welcome to detail:{serviceID}</h2>
            <div className='mx-center'>
            <Link to='/checkout'>
                <button className='btn btn-primary'>Proceed Checkout</button>
            </Link>
            </div>
        </div>
        
    );
};

export default ServiceDetail;