/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import GifGrid from '../../pages/gift-expert/components/GifGrid';
import useFetchGifs from '../../pages/gift-expert/hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

const { shallow } = require('enzyme');

describe('Pruebas de <GifGrid/>', () => {
    const category = 'One Punch';

    test('Debe de mostrar el componente correctamente', () => {
        const gifs = [
            {
                id: 'ABC',
                url: 'hhtp',
                title: 'Cualquier cosa',
            },
        ];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });

        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar items cuando se cargar imágenes con useFetchGifs', () => {
        const gifs = [
            {
                id: 'ABC',
                url: 'hhtp',
                title: 'Cualquier cosa',
            },
            {
                id: '123',
                url: 'hhtp',
                title: 'Cualquier cosa',
            },
        ];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });
        const wrapper = shallow(<GifGrid category={category} />);
        // expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });
});
