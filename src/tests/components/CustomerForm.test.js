import React from 'react';
import { shallow } from 'enzyme';
import CustomerForm from '../../components/CustomerForm';
import { customers } from '../fixtures/customers';

test('should render CustomerForm correctly', () => {
    const wrapper = shallow(<CustomerForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render CustomerForm with customer data', () => {
    const wrapper = shallow(<CustomerForm customer={customers[0]} />)
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
    const wrapper = shallow(<CustomerForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test("should set name on input change", () => {
    const value = "New name";
    const wrapper = shallow(<CustomerForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('name')).toBe(value);
});

test("should set born on input change", () => {
    const value = "10/10/10";
    const wrapper = shallow(<CustomerForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('born')).toBe(value);
});

test("should set email on valid input", () => {
    const value = "Newemail@email.com";
    const wrapper = shallow(<CustomerForm />);
    wrapper.find('input').at(2).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('email')).toBe(value);
});

// test("should set email on invalid input", () => {
//     const value = "Newemail.email.com";
//     const wrapper = shallow(<CustomerForm />);
//     wrapper.find('input').at(2).simulate('change', {
//         target: { value }
//     });
//     expect(wrapper.state('email')).toBe('');
// });

test("should set phone on input change", () => {
    const value = "8888888";
    const wrapper = shallow(<CustomerForm />);
    wrapper.find('input').at(3).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('phone')).toBe(value);
});

test("should set occupation on input change", () => {
    const value = "New name";
    const wrapper = shallow(<CustomerForm />);
    wrapper.find('input').at(4).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('occupation')).toBe(value);
});

test("should set instagram on input change", () => {
    const value = "New name";
    const wrapper = shallow(<CustomerForm />);
    wrapper.find('input').at(5).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('instagram')).toBe(value);
});