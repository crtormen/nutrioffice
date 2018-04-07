import React from 'react';
import { shallow } from 'enzyme';
import CustomersListItem from '../../components/CustomersListItem';
import { customers } from '../fixtures/customers';


test("should render CustomersListItem component", () => {
    const wrapper = shallow(<CustomersListItem {...customers[0]} />);
    expect(wrapper).toMatchSnapshot();
});
