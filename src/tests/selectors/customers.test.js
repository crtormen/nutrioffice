import selectCustomers from '../../selectors/customers';
import { customers } from '../fixtures/customers';


test("should filter by text", () => {
    const filters = { 
        text: 'e',
        sortBy: 'name'
    }

    const result = selectCustomers(customers, filters);
    expect(result).toEqual([customers[1]]);
});

//sortByName
test("should sort by name", () => {
    const filters = {
        text: '',
        sortBy: 'name'
    };

    const result = selectCustomers(customers, filters);
    expect(result).toEqual([customers[2], customers[1], customers[0]]);
});