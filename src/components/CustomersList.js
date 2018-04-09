import React from 'react';
import { connect } from 'react-redux';
import selectCustomers from '../selectors/customers';
import CustomersListItem from './CustomersListItem';

export const CustomersList = (props) => (
    <div>
    <h2>Lista de Pacientes</h2>
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

const mapStateToProps = (state) => ({
    customers: selectCustomers(state.customers, state.filters)
});

//connect to store to receive and show always the most updated list of customers
export default connect(mapStateToProps)(CustomersList);