const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const player1 = {
    player: 1,
    name: 'SCORPION',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    elHP: elHP,
    changeHP: changeHP,
    renderHP: renderHP,
    attack: attack,
}

const player2 = {
    player: 2,
    name: 'LIU KANG',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    elHP: elHP,
    changeHP: changeHP,
    renderHP: renderHP,
    attack: attack,
}

function attack() {
    console.log(this.name + ' ' + 'Fight...');
}

function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }

    return $tag;
}

function createPlayer(playerObj) {
    const $player = createElement('div', 'player'+playerObj.player);
    const $progressbar = createElement('div', 'progressbar');
    const $character = createElement('div', 'character');
    const $life = createElement('div', 'life');
    const $name = createElement('div', 'name');
    const $img = createElement('img');

    $life.style.width = playerObj.hp +'%';
    $name.innerText = playerObj.name;
    $img.src = playerObj.img;

    $progressbar.appendChild($name);
    $progressbar.appendChild($life);

    $character.appendChild($img);

    $player.appendChild($progressbar);
    $player.appendChild($character);

    return $player;
}

function elHP() {
    return document.querySelector('.player'+this.player+' .life');
}

function changeHP(randomNumber) {
    this.hp -= randomNumber;

    if (this.hp <= 0) {
        this.hp = 0;
    }
}

function renderHP() {
    this.elHP().style.width = this.hp + '%';
}

function playerLose(name) {
    const $loseTitle = createElement('div', 'loseTitle');
    if (name) {
        $loseTitle.innerText = name + ' wins';
    } else {
        $loseTitle.innerText = 'draw';
    }

    return $loseTitle;
}

function getRandom(num) {
    return Math.ceil(Math.random() * num);
}

$randomButton.addEventListener('click', function() {
    player1.changeHP(getRandom(20));
    player1.renderHP();

    player2.changeHP(getRandom(20));
    player2.renderHP();

    if (player2.hp === 0 || player1.hp === 0) {
        $randomButton.disabled = true;
    }

    if (player1.hp === 0 && player1.hp < player2.hp) {
        $arenas.appendChild(playerLose(player2.name));
    } else if (player2.hp === 0 && player2.hp < player1.hp) {
        $arenas.appendChild(playerLose(player1.name))
    } else if (player2.hp === 0 && player2.hp === 0) {
        $arenas.appendChild(playerLose())
    }
})

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
