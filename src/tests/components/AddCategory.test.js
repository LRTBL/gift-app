/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */

import React from 'react';

// AYUDA PARA METODOS JEST
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Pruebas en <AddCategory/>', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        input.simulate('change', { target: { value: 'Hola mundo' } });
    });

    test('No debe de postear la información con submit', () => {
        const form = wrapper.find('form');
        form.simulate('submit', { preventDefault() {} });
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('Debe de postear la información con submit y limpiar el input', () => {
        wrapper.find('input').simulate('change', { target: { value: 'Hola mundo' } });
        const form = wrapper.find('form');
        form.simulate('submit', { preventDefault() {} });

        expect(setCategories).toHaveBeenCalled();
        // expect(setCategories).toHaveBeenCalledTimes(2);
        // expect(setCategories).toHaveBeenCalledWidth(expect.any(Function));

        const input = wrapper.find('input');
        expect(input.prop('value')).toBe('');
    });
});
