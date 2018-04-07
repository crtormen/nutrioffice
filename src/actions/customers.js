import database from '../firebase/firebase';

//Action generator ADD_CUSTOMER
export const addCustomer = (customer) => ({
    type: 'ADD_CUSTOMER',
    customer
});

//Pass a function instead of a object  
// export const startAddCustomer = (customerData = {}) => {
//     return (dispatch, getState) => { 
//         const uid = getState().auth.uid;
//         const { //default values
//             name = '', 
//             email = '',
//             phone = '', 
//             born = '',              
//             occupation = '', 
//             instagram = ''
//         } = customerData;
//         const customer = { name, email, phone, born, occupation, instagram };

//         return database.ref(`users/${uid}/customers`).push(customer).then((ref) => { 
//             dispatch(addCustomer({
//                 id: ref.key,
//                 ...customer
//             }));
//         });
//     };
// };

//Action generator for EDIT_CUSTOMER
export const editCustomer = (id, updates) => ({
    type: 'EDIT_CUSTOMER',
    id,
    updates
});

// export const startEditExpense = (id, updates) => {
//     return (dispatch, getState) => {
//         const uid = getState().auth.uid;
//         return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
//             dispatch(editExpense(id, updates));
//         })
//     };
// };

//Action generator for REMOVE_CUSTOMER
export const removeCustomer = ({ id } = {}) => ({
    type: 'REMOVE_CUSTOMER',
    id
});

// export const startRemoveExpense = ({ id } = {}) => {
//     return (dispatch, getState) => {
//         const uid = getState().auth.uid;
//         return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
//             dispatch(removeExpense({ id }));
//         });
//     };
// };


//Action generator for SET_CUSTOMERS
export const setCustomers = (customers) => ({
    type: 'SET_CUSTOMERS',
    customers
});

//Action Generator START_SET_EXPENSES
// export const startSetExpenses = () => {
//     return (dispatch, getState) => {
//         const uid = getState().auth.uid;
//         //returns a promises, so that when using startSetExpenses, we can use "then"
//         return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
//             let expenses = [];
//             snapshot.forEach((childSnapshot) => {
//                 expenses.push({
//                     id: childSnapshot.key,
//                     ...childSnapshot.val()
//                 })
//             });

//             dispatch(setExpenses(expenses));
//         });        
//     };
// };
