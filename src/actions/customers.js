import database from '../firebase/firebase';

//Action generator ADD_CUSTOMER
export const addCustomer = (customer) => ({
    type: 'ADD_CUSTOMER',
    customer
});

//Pass a function instead of a object  
export const startAddCustomer = (customerData = {}) => {
    return (dispatch, getState) => { 
        const uid = getState().auth.uid;
        const { //default values
            name = '', 
            email = '',
            phone = '', 
            born = '',              
            occupation = '', 
            instagram = ''
        } = customerData;
        const customer = { name, email, phone, born, occupation, instagram };

        return database.ref(`users/${uid}/customers`).push(customer).then((ref) => { 
            dispatch(addCustomer({
                id: ref.key,
                ...customer
            }));
        });
    };
};

//Action generator for EDIT_CUSTOMER
export const editCustomer = (id, updates) => ({
    type: 'EDIT_CUSTOMER',
    id,
    updates
});

export const startEditCustomer = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/customers/${id}`).update(updates).then(() => {
            dispatch(editCustomer(id, updates));
        })
    };
};

//Action generator for REMOVE_CUSTOMER
export const removeCustomer = ({ id } = {}) => ({
    type: 'REMOVE_CUSTOMER',
    id
});

 export const startRemoveCustomer = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/customers/${id}`).remove().then(() => {
            dispatch(removeCustomer({ id }));
        });
    };
};


//Action generator for SET_CUSTOMERS
export const setCustomers = (customers) => ({
    type: 'SET_CUSTOMERS',
    customers
});

//Action Generator START_SET_CUSTOMERS
export const startSetCustomers = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        //returns a promises, so that when using startSetCustomers, we can use "then"
        return database.ref(`users/${uid}/customers`).once('value').then((snapshot) => {
            let customers = [];
            snapshot.forEach((childSnapshot) => {
                customers.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            });

            dispatch(setCustomers(customers));
        });        
    };
};
