import React from 'react';
import { connect } from 'react-redux';
import { editCustomer, removeCustomer } from '../actions/customers';
import CustomerForm from './CustomerForm';

export class EditCustomerPage extends React.Component {

    onSubmit = (customer) => {
        //startEditExpense
        this.props.editCustomer(this.props.customer.id, customer);
        this.props.history.push('/dashboard');
    }

    onRemove = () => {
        //startRemoveExpense
        this.props.removeCustomer({id: this.props.customer.id});
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
    editCustomer: (id, customer) => dispatch(editCustomer(id, customer)),
    removeCustomer: (id) => dispatch(removeCustomer(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditCustomerPage);