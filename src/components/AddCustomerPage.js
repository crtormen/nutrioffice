import React from 'react';
import { connect } from 'react-redux';
import { startAddCustomer } from '../actions/customers';
import CustomerForm from './CustomerForm';

export class AddCustomerPage extends React.Component {

    onSubmit = (customer) => {
        this.props.startAddCustomer(customer);
        this.props.history.push('/dashboard');
    }

    render() {
        return (
            <div>
                <h2>Novo Paciente</h2>
                <CustomerForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    startAddCustomer: (customer) => dispatch(startAddCustomer(customer))
});

export default connect(undefined, mapDispatchToProps)(AddCustomerPage);
