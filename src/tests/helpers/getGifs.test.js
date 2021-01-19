/* eslint-disable no-undef */
import getGifs from '../../helpers/getGifs';

describe('Prubeas de getGifs Fetch', () => {
    test('Debe de traer 10 elementos', async () => {
        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBe(10);
    });

    test('Debe de trar 0 elementos', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    });
});
