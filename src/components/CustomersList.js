import React from 'react';
import { connect } from 'react-redux';
import selectCustomers from '../selectors/customers';
import CustomersListItem from './CustomersListItem';

export const CustomersList = (props) => (
    <div>
    <h2>Customers List</h2>
    {
        props.customers.length === 0 ? (
            <p>Nenhum paciente encontrado.</p>
        ) : (
            props.customers.map((customer) => {
                return (
                    <CustomersListItem 
                        key={customer.id}
                        {...customer}
                    />
                )
            })
        )
    }
    </div>
);

const mapStateToProps = (state, props) => ({
    customers: selectCustomers(state.customers)
});

//connect to store to receive and show always the most updated list of customers
export default connect(mapStateToProps)(CustomersList);