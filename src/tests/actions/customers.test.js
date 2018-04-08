import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { 
    addCustomer, 
    startAddCustomer,
    editCustomer, 
    startEditCustomer, 
    removeCustomer, 
    startRemoveCustomer,
    setCustomers,
    startSetCustomers } from '../../actions/customers';
import { customers } from '../fixtures/customers';
import database from '../../firebase/firebase';

const uid = "testeuid";
const defaultAuthState = { auth: { uid }};
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const customersData = {};
    customers.forEach(({ id, name, email, phone, born, occupation, instagram }) => {
        customersData[id] = {name, email, phone, born, occupation, instagram};
    });
     //set dummy data on firebase
    database.ref(`users/${uid}/customers`).set(customersData).then(() => done()).catch(done);
});

test("should setup add customer action object", () => {
    const action = addCustomer(customers[0]);
    expect(action).toEqual({
        type: 'ADD_CUSTOMER',
        customer: customers[0]
    });
});


test("should add a customer to firebase", (done) => {
    const store = createMockStore(defaultAuthState);
    const customerData = {
        name: 'Bart',
        email: 'bart@salsicha.delicia',
        phone: '1928382',
        born: '91238',
        occupation: 'salsicha',
        instagram: 'bartsalsicha'
    };
    store.dispatch(startAddCustomer(customerData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_CUSTOMER',
            customer: {
                id: expect.any(String),
                ...customerData
            }
        });

        return database.ref(`users/${uid}/customers/${actions[0].customer.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(customerData);
        done();
    }).catch(done);
});

test("should setup add customer action object with default values", (done) => {
    const store = createMockStore(defaultAuthState);
    const defaultCustomer = {
        name: '',
        email: '',
        phone: '',
        born: '',
        occupation: '',
        instagram: ''
    };

    store.dispatch(startAddCustomer(defaultCustomer)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_CUSTOMER',
            customer: {
                id: expect.any(String),
                ...defaultCustomer
            }
        });
        return database.ref(`users/${uid}/customers/${actions[0].customer.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(defaultCustomer);
        done();
    }).catch(done);
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

test("should edit a customer from firebase", (done) => {
    const store = createMockStore(defaultAuthState);
    const id = customers[0].id;
    const updates = { 
        name: 'Tinhão',
        phone: '919191'
    };
    store.dispatch(startEditCustomer(id, updates)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'EDIT_CUSTOMER',
            id,
            updates
        });

        return database.ref(`users/${uid}/customers/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val().name).toBe(updates.name);
        expect(snapshot.val().phone).toBe(updates.phone);
        done();
    }).catch(done);
})

test("should setup remove customer action object", () => {
    const action = removeCustomer({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_CUSTOMER',
        id: '123abc'
    });
});

test("should remove a customer from firebase", (done) => {
    const store = createMockStore(defaultAuthState);
    const id = customers[1].id;
    store.dispatch(startRemoveCustomer({ id: id })).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_CUSTOMER',
            id
        });

        return database.ref(`users/${uid}/customers/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        done();
    }).catch(done);
});

test("should setup set customers action object with data", () => {
    const action = setCustomers(customers);
    expect(action).toEqual({
        type: 'SET_CUSTOMERS',
        customers        
    });
});

test("should fetch customers from firebase", (done) => {
    const store = createMockStore(defaultAuthState);
    store.dispatch(startSetCustomers()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_CUSTOMERS',
            customers
        });
        done();
    }).catch(done);
});