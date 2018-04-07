const customerReducerDefaultState = [];

export default (state = customerReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_CUSTOMER':
            return [...state, action.customer];
        case 'EDIT_CUSTOMER':
            return state.map((customer) => {
                if (customer.id === action.id) {
                    return {
                        ...customer,
                        ...action.updates //create new object based ond the previous, with updates and concatenations
                    }
                }
                return customer; //do nothing if not found
            });
        case 'REMOVE_CUSTOMER':
            return state.filter(({ id }) => id !== action.id ); ////return all in a new array, except that one where filter not match 
        case 'SET_CUSTOMERS':
            return action.customers;
        default: 
            return state;
    };
};