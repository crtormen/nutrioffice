import React from 'react';
import CustomersList from './CustomersList';
import CustomersListFilters from './CustomersListFilters';
import CustomersSummary from './CustomersSummary';

export const DashboardPage = () => (
    <div>
        <CustomersSummary />
        <CustomersListFilters />
        <CustomersList />        
    </div>
);

export default DashboardPage;