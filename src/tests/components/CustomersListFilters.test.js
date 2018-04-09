import React from 'react';
import { shallow } from 'enzyme';
import { CustomersListFilters } from '../../components/CustomersListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByName, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByName = jest.fn();
    wrapper = shallow(
        <CustomersListFilters 
            filters={filters} 
            setTextFilter={setTextFilter}
            sortByName={sortByName}
        />
    );
});

test("should render CustomersListFilters correctly", () => {
    expect(wrapper).toMatchSnapshot();
});

test("should handle text change", () => {
    const value = "Bart";
    wrapper.find('input').simulate('change',{
        target: { value }
    });

    expect(setTextFilter).lastCalledWith(value);
});

// test('should sort by name', () => {
//     wrapper.setProps({
//         filters: altFilters
//     });
//     wrapper.find('select').simulate('change', {
//         target: { value: 'date' }
//     } )
//     expect(sortByDate).toBeCalled();
// });
