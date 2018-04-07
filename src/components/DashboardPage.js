import React from 'react';
import CustomersList from './CustomersList';
import { Link } from 'react-router-dom';

export const DashboardPage = () => (
    <div>
        <p><Link to="/create">+ Novo Paciente</Link></p>
        <CustomersList />        
    </div>
);

export default DashboardPage;