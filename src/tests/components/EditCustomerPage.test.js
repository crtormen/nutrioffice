import React from 'react';
import { shallow } from 'enzyme';
import { EditCustomerPage } from '../../components/EditCustomerPage';
import { customers } from '../fixtures/customers';

let wrapper, history, editCustomer, removeCustomer;

beforeEach(() => {
    history = { push: jest.fn() };
    editCustomer = jest.fn();
    removeCustomer = jest.fn();
    wrapper = shallow(
        <EditCustomerPage 
            editCustomer={editCustomer} 
            removeCustomer={removeCustomer}
            history={history}
            customer={customers[2]}
        />
    );
});

test("should render EditCustomerPage correctly", () => {
    expect(wrapper).toMatchSnapshot();
});

test("should handle editCustomer", () => {
    wrapper.find('CustomerForm').prop('onSubmit')(customers[2]);
    expect(history.push).lastCalledWith('/dashboard');
    expect(editCustomer).lastCalledWith(customers[2].id, customers[2]);
});

test("should handle removeCustomer", () => {
    wrapper.find('button').simulate('click');
    expect(history.push).lastCalledWith('/dashboard');
    expect(removeCustomer).lastCalledWith({ id: customers[2].id });
});