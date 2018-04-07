import React from 'react';
import { Link } from 'react-router-dom';

const CustomersListItem = ({id, name, email}) => (
    <div>
        <h3><Link to={`edit/${id}`}>{name}</Link> - {email}</h3>    
    </div>
);

export default CustomersListItem;