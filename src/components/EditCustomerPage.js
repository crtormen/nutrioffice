import React from 'react';
import { connect } from 'react-redux';
import { startEditCustomer, startRemoveCustomer } from '../actions/customers';
import CustomerForm from './CustomerForm';

export class EditCustomerPage extends React.Component {

    onSubmit = (customer) => {
        //startEditExpense
        this.props.startEditCustomer(this.props.customer.id, customer);
        this.props.history.push('/dashboard');
    }

    onRemove = () => {
        //startRemoveExpense
        this.props.startRemoveCustomer({id: this.props.customer.id});
        this.props.history.push('/dashboard');
    }

    render() {
        return (
            <div>
                <h2>Editar Paciente</h2>
                <CustomerForm 
                    customer={this.props.customer}
                    onSubmit={this.onSubmit} 
                />
                <button onClick={this.onRemove}>Excluir Paciente</button>                
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    customer: state.customers.find((customer) => customer.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    startEditCustomer: (id, customer) => dispatch(startEditCustomer(id, customer)),
    startRemoveCustomer: (id) => dispatch(startRemoveCustomer(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditCustomerPage);