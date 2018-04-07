import customersReducer from '../../reducers/customers';
import { customers, customer } from '../fixtures/customers';

 // DEFAULT
 test("should set default state", () => {
    const state = customersReducer(undefined, '@@INIT');
    expect(state).toEqual([]);
});

//REMOVE_CUSTOMER
test("should remove a customer from state by id value", () => {
    const action = {
        type: 'REMOVE_CUSTOMER',
        id: customers[1].id
    };
    const state = customersReducer(customers, action);
    expect(state).toEqual([customers[0], customers[2]]);
 });

test("should not remove an customer if id not found", () => {
    const action = {
        type: 'REMOVE_CUSTOMER',
        id: '-1'
    };
    const state = customersReducer(customers, action);
    expect(state).toEqual(customers);
 });

//ADD_EXPENSE
test("should add a customer", () => {
    const action = {
        type: 'ADD_CUSTOMER',
        customer
    };

    const state = customersReducer(customers, action);
    expect(state).toEqual([...customers, customer]);
});

//EDIT_CUSTOMER
test("should edit an existing customer", () => {
    const action = {
        type: 'EDIT_CUSTOMER',
        id: customers[0].id,
        updates: customer
    };

    const state = customersReducer(customers, action);
    expect(state[0]).toEqual({...customer, id: customers[0].id});
});


// EDIT CUSTOMER ID NOT FOUND
test("should NOT edit an inexistent customer", () => {
    const action = {
        type: 'EDIT_CUSTOMER',
        id: '-1',
        updates: customer
    };

    const state = customersReducer(customers, action);
    expect(state).toEqual(customers);
});

test("should set customers", () => {
    const action = {
        type: 'SET_CUSTOMERS',
        customers: [customers[1]]
    };
    const state = customersReducer(customers, action);
    expect(state).toEqual([customers[1]]);
});

