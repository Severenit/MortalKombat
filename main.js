const player1 = {
    name: 'SCORPION',
    hp: 50,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    attack: function(name) {
        console.log(name + ' ' + 'Fight...');
    },
}
const player2 = {
    name: 'LIU KANG',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    attack: function(name) {
        console.log(name + ' ' + 'Fight...');
    },
}

function createPlayer(classPlayer, playerObj) {
    const $arenas = document.querySelector('.arenas');
    const $player = document.createElement('div');
    const $progressbar = document.createElement('div');
    const $character = document.createElement('div');
    const $life = document.createElement('div');
    const $name = document.createElement('div');
    const $img = document.createElement('img');

    $player.classList.add(classPlayer);
    $progressbar.classList.add('progressbar');
    $character.classList.add('character');
    $life.classList.add('life');
    $name.classList.add('name');

    $life.style.width = playerObj.hp +'%';
    $name.innerText = playerObj.name;
    $img.src = playerObj.img;

    $progressbar.appendChild($name);
    $progressbar.appendChild($life);

    $character.appendChild($img);

    $player.appendChild($progressbar);
    $player.appendChild($character);

    $arenas.appendChild($player);
}

createPlayer('player1',player1);
createPlayer('player2',player2);
