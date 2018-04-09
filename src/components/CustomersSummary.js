import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectCustomers from '../selectors/customers';

export const CustomersSummary = ({ customerCount }) => {
    const customerWord = customerCount === 1 ? 'paciente' : 'pacientes';
    return (
        <div>
            <div>
                <h2>Mostrando <span>{ customerCount }</span> {customerWord} </h2>
                <div>
                    <Link to="/create">+ Novo Paciente</Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleCustomers = selectCustomers(state.customers, state.filters);
    return {
        customerCount: visibleCustomers.length
    }
}

export default connect(mapStateToProps)(CustomersSummary);