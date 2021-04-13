const $arenas = document.querySelector('.arenas');
const $formFight = document.querySelector('.control');

const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}

const ATTACK = ['head', 'body', 'foot'];

const player1 = {
    player: 1,
    name: 'SCORPION',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    elHP,
    changeHP,
    renderHP,
    attack: function() {
        console.log(this.name + ' ' + 'Fight...');
    },
}

const player2 = {
    player: 2,
    name: 'LIU KANG',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    elHP: elHP,
    changeHP: changeHP,
    renderHP: renderHP,
    attack: function() {
        console.log(this.name + ' ' + 'Fight...');
    },
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

function createReloadButton() {
    const $reloadButtonDiv = createElement('div', 'reloadWrap');
    const $reloadButton = createElement('button', 'button');
    $reloadButton.innerText = 'Reload';

    $reloadButton.addEventListener('click', function() {
        window.location.reload();
    });

    $reloadButtonDiv.appendChild($reloadButton);
    $arenas.appendChild($reloadButtonDiv);
}

function showResult() {
    if (player2.hp === 0 || player1.hp === 0) {
        const $randomButton = document.querySelector('.buttonWrap .button');
        $randomButton.disabled = true;
        createReloadButton();
    }

    if (player1.hp === 0 && player1.hp < player2.hp) {
        $arenas.appendChild(playerLose(player2.name));
    } else if (player2.hp === 0 && player2.hp < player1.hp) {
        $arenas.appendChild(playerLose(player1.name))
    } else if (player2.hp === 0 && player2.hp === 0) {
        $arenas.appendChild(playerLose())
    }
}

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

function playerAttack() {
    const hit = ATTACK[getRandom(3) - 1];
    const defence = ATTACK[getRandom(3) - 1];

    return {
        value: getRandom(HIT[hit]),
        hit: hit,
        defence: defence,
    };
}

$formFight.addEventListener('submit', function(event) {
    console.log('####: event', event);
    event.preventDefault();
    const input = document.forms[0].getElementsByTagName('input');

    const attack = {};

    for (let item of input) {
        if (item.checked && item.name === 'hit') {
            attack.value = getRandom(HIT[item.value]);
            attack.hit = item.value;
        }

        if (item.checked && item.name === 'defence') {
            attack.defence = item.value;
        }
        item.checked = false;
    }

    const enemyAttack = playerAttack();

    if (attack.defence !== enemyAttack.hit) {
        player1.changeHP(attack.value);
        player1.renderHP();
    }

    if (enemyAttack.defence !== attack.hit) {
        player2.changeHP(enemyAttack.value);
        player2.renderHP();
    }

    showResult();
});
