import { addCustomer, editCustomer, removeCustomer, setCustomers } from '../../actions/customers';
import { customers } from '../fixtures/customers';

test("should setup add customer action object", () => {
    const action = addCustomer(customers[0]);
    expect(action).toEqual({
        type: 'ADD_CUSTOMER',
        customer: customers[0]
    });
});

test("should setup edit customer action object", () => {
    const action = editCustomer('123abc', {
        email: 'contato@servidor.com',
        phone: '9999-9999'
    });
    expect(action).toEqual({
        type: 'EDIT_CUSTOMER',
        id: '123abc',
        updates: {
            email: 'contato@servidor.com',
            phone: '9999-9999'            
        }
    });
});

test("should setup remove customer action object", () => {
    const action = removeCustomer({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_CUSTOMER',
        id: '123abc'
    });
});

test("should setup set customers action object with data", () => {
    const action = setCustomers(customers);
    expect(action).toEqual({
        type: 'SET_CUSTOMERS',
        customers        
    });
});