import React from 'react';
import { shallow } from 'enzyme';
import { EditCustomerPage } from '../../components/EditCustomerPage';
import { customers } from '../fixtures/customers';

let wrapper, history, startEditCustomer, startRemoveCustomer;

beforeEach(() => {
    history = { push: jest.fn() };
    startEditCustomer = jest.fn();
    startRemoveCustomer = jest.fn();
    wrapper = shallow(
        <EditCustomerPage 
            startEditCustomer={startEditCustomer} 
            startRemoveCustomer={startRemoveCustomer}
            history={history}
            customer={customers[2]}
        />
    );
});

test("should render EditCustomerPage correctly", () => {
    expect(wrapper).toMatchSnapshot();
});

test("should handle startEditCustomer", () => {
    wrapper.find('CustomerForm').prop('onSubmit')(customers[2]);
    expect(history.push).lastCalledWith('/dashboard');
    expect(startEditCustomer).lastCalledWith(customers[2].id, customers[2]);
});

test("should handle startRemoveCustomer", () => {
    wrapper.find('button').simulate('click');
    expect(history.push).lastCalledWith('/dashboard');
    expect(startRemoveCustomer).lastCalledWith({ id: customers[2].id });
});