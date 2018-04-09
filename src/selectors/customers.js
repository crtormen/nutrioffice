// export default (customers) => {
//     return customers;
// }



//Get visible customers, filtering by text, and allows to sort by name
export default (customers, { text, sortBy }) => { 
    return customers.filter((customer) => {
        const textMatch = customer.name.toLowerCase().includes(text.toLowerCase());
        return textMatch;
    }).sort((a, b) => {  //highest first
        if (sortBy === 'name')
            return a.name.localeCompare(b.name, "pt-BR");
    });
};
