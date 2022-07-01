import { CurrentlyDoing } from '@models/currentlyDoing';

const current: CurrentlyDoing = {
    lastUpdate: 'April 2022',
    reading: [
        {
            title: 'The End of Everything (Astrophysically Speaking)',
            author: 'Katie Mack',
            cover: 'endofeverything.jpg',
            link: 'https://bookshop.org/books/the-end-of-everything-astrophysically-speaking/9781982103552',
            rating: null,
            thoughts: null,
            imageFolder: 'books',
        },
        {
            title: 'Unit Testing Principles, Practices, and Patterns',
            author: 'Vladimir Khorikov',
            cover: 'unittesting.jpg',
            link: 'https://www.manning.com/books/unit-testing',
            rating: null,
            thoughts: null,
            imageFolder: 'books',
        },
    ],
    watching: [
        {
            title: 'Star Trek: Strange New Worlds',
            cover: 'strangenewworlds.jpg',
            imageFolder: 'tv',
            rating: null,
            thoughts: null,
        },
        {
            title: 'Designated Survivor',
            cover: 'designatedsurvivor.jpg',
            imageFolder: 'tv',
            rating: null,
            thoughts: null,
        },
        {
            title: 'Yellowstone',
            cover: 'yellowstone.jpg',
            imageFolder: 'tv',
            rating: null,
            thoughts: null,
        },
        {
            title: 'Challenger: Final Flight',
            cover: 'challengerfinalflight.jpg',
            imageFolder: 'tv',
            rating: null,
            thoughts: null,
        },
    ],
    playing: [
        {
            title: 'Destiny 2',
            system: 'Xbox',
            cover: 'destiny2.jpg',
            link: 'https://www.bungie.net/7/en/Destiny/WitchQueen',
            imageFolder: 'games',
            rating: null,
            thoughts: null,
        },
        {
            title: 'Lego Star Wars: The Skywalker Saga',
            system: 'PS5',
            cover: 'legostarwars.jpg',
            link: 'https://www.playstation.com/en-us/games/lego-star-wars-the-skywalker-saga/',
            imageFolder: 'games',
            rating: null,
            thoughts: null,
        },
        {
            title: 'Super Mario Odyssey',
            system: 'Nintendo Switch',
            cover: 'marioodyssey.jpg',
            link: 'https://www.nintendo.com/store/products/super-mario-odyssey-switch/',
            imageFolder: 'games',
            rating: null,
            thoughts: null,
        },
    ],
};

export default current;
