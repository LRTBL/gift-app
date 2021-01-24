import heroes from '../data/heroes';

const getHeroesBySuperHero = (superHero) => {
    if (superHero.trim().length < 1) return [];
    const superHeroName = superHero.toLowerCase();
    return heroes.filter((hero) => hero.superhero.toLowerCase().startsWith(superHeroName));
};

export default getHeroesBySuperHero;
