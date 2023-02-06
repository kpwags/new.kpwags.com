/* eslint-disable max-len */
import { VideoGames } from '@models/VideoGames';

const games: VideoGames = {
    lastUpdate: 'December 2022',
    current: [
        {
            title: 'Horizon Zero Dawn',
            system: 'PS5',
            cover: 'horizonzerodawn.jpg',
            link: 'https://www.playstation.com/en-us/games/horizon-zero-dawn/',
            imageFolder: 'games',
            rating: null,
            thoughts: null,
            finished: 'n/a',
        },
    ],
    played: [
        {
            title: 'Pokemon: Violet',
            system: 'Nintendo Switch',
            cover: 'pokemonviolet.jpg',
            link: 'https://scarletviolet.pokemon.com/en-us/',
            imageFolder: 'games',
            rating: null,
            thoughts: 'Just lost interest.',
            finished: 'no',
        },
        {
            title: 'Jedi: Fallen Order',
            system: 'Xbox',
            cover: 'jedifallenorder.jpg',
            link: 'https://www.ea.com/games/starwars/jedi/jedi-fallen-order',
            imageFolder: 'games',
            rating: 4,
            thoughts: 'I had given up on this a while back, but I came back and am glad I did. The game was fun and had a good story. I wish it was more Jedi Knight than Dark Souls, but alas I guess those days are past.',
            finished: 'yes',
        },
        {
            title: 'WoW Classic',
            system: 'PC',
            cover: 'wow_classic.jpg',
            link: 'https://worldofwarcraft.com/en-us/wowclassic',
            imageFolder: 'games',
            rating: 4,
            thoughts: "I spent so much time on this in my mid 20s, and now in my late 30s, I'm definitely enjoying it again",
            finished: 'n/a',
        },
        {
            title: 'Star Wars: Battlefront II',
            system: 'PS5',
            cover: 'battlefront2.jpg',
            link: 'https://www.ea.com/games/starwars/battlefront/star-wars-battlefront-2',
            imageFolder: 'games',
            rating: 4,
            thoughts: "I still come back to this from time to time. It's a fun multiplayer game.",
            finished: 'n/a',
        },
        {
            title: 'Elden Ring',
            system: 'PS5',
            cover: 'eldenring.jpg',
            link: 'https://en.bandainamcoent.eu/elden-ring/elden-ring',
            imageFolder: 'games',
            rating: null,
            thoughts: "I'm not sure I was the targeted audience for this game. I didn't enjoy this game at all.",
            finished: 'no',
        },
        {
            title: 'Halo Infinite',
            system: 'Xbox',
            cover: 'halo-infinite.jpg',
            link: 'https://www.halowaypoint.com/halo-infinite',
            imageFolder: 'games',
            rating: 3,
            thoughts: 'This game had a lot of promise. I enjoyed it, but the story seemed a little convoluted and while fun, the battles got a little repetetive. The lack of local co-op sucks.',
            finished: 'yes',
        },
        {
            title: 'Halo 5',
            system: 'Xbox',
            cover: 'halo5.jpg',
            link: 'https://www.xbox.com/en-us/games/store/Halo-5-Guardians/BRRC2BP0G9P0',
            imageFolder: 'games',
            rating: 3,
            thoughts: 'The story for this one was a little confusing and overly-complicated. The battles were definitely Halo though. The lack of local co-op sucks.',
            finished: 'yes',
        },
        {
            title: 'Halo 4',
            system: 'Xbox',
            cover: 'halo4.jpg',
            link: 'https://www.xbox.com/en-us/games/store/Halo-4/9P8CFXZH93CK',
            imageFolder: 'games',
            rating: 4,
            thoughts: 'This was definitely the best 343 Halo game. The story was well done and was a good sequel to the Bungie trilogy.',
            finished: 'yes',
        },
        {
            title: 'Halo 3: ODST',
            system: 'Xbox',
            cover: 'odst.jpg',
            link: 'https://www.xbox.com/en-US/games/store/halo-3-odst/9P6VZCRGXFMX/0010',
            imageFolder: 'games',
            rating: 4,
            thoughts: 'I never finished this game when it came out. I entded up finally beating it for my pre-Infinite playthrough and definitely enjoyed it. The move away from Master Chief was an alternate view.',
            finished: 'yes',
        },
        {
            title: 'Halo 3',
            system: 'Xbox',
            cover: 'halo3.jpg',
            link: 'https://www.xbox.com/en-us/games/store/Halo-3/BSXZVK24CMR3',
            imageFolder: 'games',
            rating: 5,
            thoughts: 'I spent so much time with the multiplayer, it made me forget how good the story was in finishing up the trilogy.',
            finished: 'yes',
        },
        {
            title: 'Halo 2',
            system: 'Xbox',
            cover: 'halo2.jpg',
            link: 'https://www.xbox.com/en-us/games/store/Halo-2-Anniversary/9P5739G419LD',
            imageFolder: 'games',
            rating: 5,
            thoughts: 'I may or may not have stayed up for the midnight launch of this...A great follow-up to the original Halo and my first Xbox Live experience with a fantastic multiplayer.',
            finished: 'yes',
        },
        {
            title: 'Halo',
            system: 'Xbox',
            cover: 'halo.jpg',
            link: 'https://www.xbox.com/en-US/games/store/halo-combat-evolved-anniversary/9NWQMVSB63N4/0010/9VQ86FXHGZHX',
            imageFolder: 'games',
            rating: 5,
            thoughts: 'This game was fantastic. I enjoyed the story and the multiplayer was top-notch.',
            finished: 'yes',
        },
        {
            title: 'Halo Reach',
            system: 'Xbox',
            cover: 'halo-reach.jpg',
            link: 'https://www.xbox.com/en-us/games/store/Halo-REACH/9NLGW5MXWKJ6',
            imageFolder: 'games',
            rating: 5,
            thoughts: 'The final Bungie Halo game was phenomenal. Brought back a lot of the magic of the first Halo game.',
            finished: 'yes',
        },
        {
            title: 'The Last of Us',
            system: 'PS4',
            cover: 'lastofus.jpg',
            link: 'https://www.playstation.com/en-us/games/the-last-of-us-remastered/',
            imageFolder: 'games',
            rating: null,
            thoughts: "I just couldn't get into this.",
            finished: 'no',
        },
        {
            title: 'Uncharted: The Lost Legacy',
            system: 'PS4',
            cover: 'uncharted_lostlegacy.jpg',
            link: 'https://www.playstation.com/en-us/games/uncharted-the-lost-legacy/',
            imageFolder: 'games',
            rating: 4,
            thoughts: 'Another good Uncharted game focused on some of the side characters from the first four games.',
            finished: 'yes',
        },
        {
            title: "Uncharted 4: Thieve's End",
            system: 'PS4',
            cover: 'uncharted4.jpg',
            link: 'https://www.playstation.com/en-us/games/uncharted-4-a-thiefs-end/',
            imageFolder: 'games',
            rating: 5,
            thoughts: 'A good end to the series and story. Only negative was that the story seemed to be a little drawn out.',
            finished: 'yes',
        },
        {
            title: "Uncharted 3: Drake's Deception",
            system: 'PS4',
            cover: 'uncharted3.jpg',
            link: 'https://www.playstation.com/en-us/games/uncharted-the-nathan-drake-collection/',
            imageFolder: 'games',
            rating: 5,
            thoughts: 'Another fantastic Uncharted game. Not much else to say.',
            finished: 'yes',
        },
        {
            title: 'Uncharted 2: Among Thieves',
            system: 'PS4',
            cover: 'uncharted2.jpg',
            link: 'https://www.playstation.com/en-us/games/uncharted-the-nathan-drake-collection/',
            imageFolder: 'games',
            rating: 5,
            thoughts: 'Another fantastic Uncharted game, this one without the quick time events.',
            finished: 'yes',
        },
        {
            title: "Uncharted: Drake's Fortune",
            system: 'PS4',
            cover: 'uncharted.jpg',
            link: 'https://www.playstation.com/en-us/games/uncharted-the-nathan-drake-collection/',
            imageFolder: 'games',
            rating: 5,
            thoughts: 'I love this series. The gameplay was fun and fantastic with a great story.',
            finished: 'yes',
        },
        {
            title: 'Dragon Age: Origins',
            system: 'PC',
            cover: 'dragonageorigins.jpg',
            link: 'https://www.ea.com/games/dragon-age/dragon-age-origins',
            imageFolder: 'games',
            rating: null,
            thoughts: 'I need to get back to this. I kept getting stuck in parts of the game and got overly frustrated by it.',
            finished: 'no',
        },
        {
            title: 'Borderlands 3',
            system: 'Xbox',
            cover: 'borderlands3.jpg',
            link: 'https://borderlands.com/en-US/welcome/',
            imageFolder: 'games',
            rating: 3,
            thoughts: "The game had some fun parts, but didn't seem to have the same magic as Borderlands 1 or 2.",
            finished: 'no',
        },
        {
            title: 'Skyrim',
            system: 'PC',
            cover: 'skyrim.jpg',
            link: 'https://elderscrolls.bethesda.net/en/skyrim/',
            imageFolder: 'games',
            rating: 5,
            thoughts: "I've never gotten a chance to finish this (sooooo many side quests) despite pouring hundreds of hours into it. Love the game.",
            finished: 'no',
        },
    ],
};

export default games;
