import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { addCustomer } from '../actions/customers';
import CustomerForm from './CustomerForm';

export class AddCustomerPage extends React.Component {

    onSubmit = (customer) => {
        //TODO: props.startAddCustomer
        this.props.addCustomer({
            id: uuid(),
            ...customer
        });
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
    addCustomer: (customer) => dispatch(addCustomer(customer))
});

export default connect(undefined, mapDispatchToProps)(AddCustomerPage);
