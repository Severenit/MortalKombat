import Game from './game.js';

const game = new Game({
    player1: {
        player: 1,
        name: 'SCORPION',
        hp: 100,
        img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    },
    player2: {
        player: 2,
        name: 'LIU KANG',
        hp: 100,
        img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    }
});

game.start();



