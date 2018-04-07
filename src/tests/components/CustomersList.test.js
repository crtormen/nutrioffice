import React from 'react';
import { shallow } from 'enzyme';
import { CustomersList } from '../../components/CustomersList';
import { customers } from '../fixtures/customers';

test("should render CustomersList with customers", () => {
    const wrapper = shallow(<CustomersList customers={customers} />);
    expect(wrapper).toMatchSnapshot();
});

test("should render CustomersList with empty customer", () => {
    const wrapper = shallow(<CustomersList customers={[]} />);
    expect(wrapper).toMatchSnapshot();
})