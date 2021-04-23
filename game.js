import Player from './player.js';
import Logs from './logs.js';
import { createElement, getRandom } from './utils.js';
import { ATTACK, HIT } from './constants.js';

class Game {

    constructor(props) {
        this.props = props;
        this.player1 = new Player(props.player1);
        this.player2 = new Player(props.player2);

        this.$arenas = document.querySelector('.arenas');
        this.$formFight = document.querySelector('.control');

        this.$loseTitle;
        this.$reloadButtonDiv;
        this.$reloadButton;

        this.logs = new Logs({
            selector: 'chat',
        });
    }

    enemyAttack = () => {
        const hit = ATTACK[getRandom(3) - 1];
        const defence = ATTACK[getRandom(3) - 1];

        return {
            value: getRandom(HIT[hit]),
            hit,
            defence,
        }
    }

    playerAttack = () => {
        const attack = {};

        for (let item of this.$formFight) {
            if (item.checked && item.name === 'hit') {
                attack.value = getRandom(HIT[item.value]);
                attack.hit = item.value;
            }

            if (item.checked && item.name === 'defence') {
                attack.defence = item.value;
            }

            item.checked = false;
        }

        return attack;
    }

    onReloadClick = () => {
        this.restart();
    }

    createReloadButton = () => {
        const $reloadButtonDiv = createElement('div', 'reloadWrap');
        const $reloadButton = createElement('button', 'button');
        $reloadButton.innerText = 'Reload';

        $reloadButton.addEventListener('click', this.onReloadClick);

        $reloadButtonDiv.appendChild($reloadButton);
        this.$reloadButtonDiv = $reloadButtonDiv;
        this.$reloadButton = $reloadButton;
        this.$arenas.appendChild($reloadButtonDiv);
    }

    showResult = () => {
        if (this.player2.hp === 0 || this.player1.hp === 0) {
            this.createReloadButton();
        }

        if (this.player1.hp === 0 && this.player1.hp < this.player2.hp) {
            this.$arenas.appendChild(this.showResultText(this.player2.name));
            this.logs.generateLogs('end', this.player2, this.player1);
        } else if (this.player2.hp === 0 && this.player2.hp < this.player1.hp) {
            this.$arenas.appendChild(this.showResultText(this.player1.name));
            this.logs.generateLogs('end', this.player1, this.player2);
        } else if (this.player2.hp === 0 && this.player2.hp === 0) {
            this.$arenas.appendChild(this.showResultText())
            this.logs.generateLogs('draw');
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        const {hit: hitEnemy, defence: defenceEnemy, value: valueEnemy} = this.enemyAttack();
        const {hit, defence, value} = this.playerAttack();

        if (defence !== hitEnemy) {
            this.player1.changeHP(valueEnemy);
            this.player1.renderHP();
            this.logs.generateLogs('hit', this.player2, this.player1, valueEnemy);
        } else {
            this.logs.generateLogs('defence', this.player2, this.player1);
        }

        if (defenceEnemy !== hit) {
            this.player2.changeHP(value);
            this.player2.renderHP();
            this.logs.generateLogs('hit', this.player1, this.player2, value);
        } else {
            this.logs.generateLogs('defence', this.player1, this.player2);
        }

        this.showResult();
    }

    restart = () => {
        this.player1.removePlayer();
        this.player2.removePlayer();
        this.logs.emptyLogs();
        this.$loseTitle.remove();
        this.$reloadButton.removeEventListener('click', this.onReloadClick);
        this.$reloadButtonDiv.remove();

        if (this.player1.name === this.props.player1.name) {
            this.player1 = new Player({
                ...this.props.player2,
                player: 1,
            });
            this.player2 = new Player({
                ...this.props.player1,
                player: 2,
            });
        } else {
            this.player1 = new Player({
                ...this.props.player1,
                player: 1,
            });
            this.player2 = new Player({
                ...this.props.player2,
                player: 2,
            });
        }




        this.start();
    }

    showResultText = (name) => {
        const $loseTitle = createElement('div', 'loseTitle');
        if (name) {
            $loseTitle.innerText = name + ' wins';
        } else {
            $loseTitle.innerText = 'draw';
        }

        this.$loseTitle = $loseTitle;
        return $loseTitle;
    }

    start = () => {
        this.$arenas.appendChild(this.player1.createPlayer());
        this.$arenas.appendChild(this.player2.createPlayer());

        this.logs.generateLogs('start', this.player1, this.player2);

        this.$formFight.addEventListener('submit', this.onSubmit)
    }
}

export default Game;
