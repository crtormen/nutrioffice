import React from 'react';
import { shallow } from 'enzyme';
import { AddCustomerPage } from '../../components/AddCustomerPage';
import { customers } from '../fixtures/customers';

let wrapper, history, startAddCustomer;

beforeEach(() => {
    startAddCustomer = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddCustomerPage startAddCustomer={startAddCustomer} history={history}/>);
});

test("should render AddCustomerPage correctly", () => {
    expect(wrapper).toMatchSnapshot();
});

test("should handle onSubmit", () => {
    wrapper.find('CustomerForm').prop('onSubmit')(customers[1]);
    expect(history.push).lastCalledWith('/dashboard');
    expect(startAddCustomer).lastCalledWith(customers[1]);
});