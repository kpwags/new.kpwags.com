import { CurrentlyDoing } from '@models/currentlyDoing';

const current: CurrentlyDoing = {
    lastUpdate: 'November 2022',
    reading: [
        {
            title: 'The Data Detective: Ten Easy Rules to Make Sense of Statistics',
            author: 'Tim Harford',
            cover: 'datadetective.jpg',
            link: 'https://bookshop.org/books/the-data-detective-ten-easy-rules-to-make-sense-of-statistics/9780593084663',
            rating: null,
            thoughts: null,
            imageFolder: 'books',
        },
        {
            title: 'Chokepoint Capitalism',
            author: 'Rebecca Giblin & Cory Doctorow',
            cover: 'chokepoint_capitalism.jpg',
            link: 'https://bookshop.org/books/chokepoint-capitalism-how-big-tech-and-big-content-captured-creative-labor-markets-and-how-we-ll-win-them-back/9780807007068',
            rating: null,
            thoughts: null,
            imageFolder: 'books',
        },
    ],
    watching: [
        {
            title: 'Yellowstone',
            cover: 'yellowstone.jpg',
            imageFolder: 'tv',
            link: 'https://www.imdb.com/title/tt4236770/',
            rating: null,
            thoughts: null,
        },
        {
            title: "It's Always Sunny in Philadelphia",
            cover: 'always_sunny.jpg',
            rating: null,
            thoughts: null,
            link: 'https://www.imdb.com/title/tt0472954/',
            imageFolder: 'tv',
        },
        {
            title: 'Star Trek: Voyager',
            cover: 'voyager.jpg',
            rating: null,
            thoughts: null,
            link: 'https://www.imdb.com/title/tt0112178/',
            imageFolder: 'tv',
        },
    ],
    playing: [
        {
            title: 'WoW Classic',
            system: 'PC',
            cover: 'wow_classic.jpg',
            link: 'https://worldofwarcraft.com/en-us/wowclassic',
            imageFolder: 'games',
            rating: null,
            thoughts: null,
        },
        {
            title: 'Star Wars: Battlefront II',
            system: 'PS5',
            cover: 'battlefront2.jpg',
            link: 'https://www.ea.com/games/starwars/battlefront/star-wars-battlefront-2',
            imageFolder: 'games',
            rating: null,
            thoughts: null,
        },
        {
            title: 'Jedi: Fallen Order',
            system: 'Xbox',
            cover: 'jedifallenorder.jpg',
            link: 'https://www.ea.com/games/starwars/jedi/jedi-fallen-order',
            imageFolder: 'games',
            rating: null,
            thoughts: null,
        },
    ],
};

export default current;
