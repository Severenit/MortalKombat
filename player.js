import { createElement } from './utils.js';

class Player {
    constructor(props) {
        this.name = props.name;
        this.hp = props.hp;
        this.img = props.img;
        this.player = props.player;
        this.selector = `player${props.player}`;
        this.$player;
    }

    elHP = () => {
        return document.querySelector(`.${this.selector} .life`);
    }

    renderHP = () => {
        this.elHP().style.width = this.hp + '%';
    }

    changeHP = (randomNumber) => {
        this.hp -= randomNumber;

        if (this.hp <= 0) {
            this.hp = 0;
        }
    }

    createPlayer = () => {
        const $player = createElement('div', this.selector);
        const $progressbar = createElement('div', 'progressbar');
        const $character = createElement('div', 'character');
        const $life = createElement('div', 'life');
        const $name = createElement('div', 'name');
        const $img = createElement('img');

        $life.style.width = this.hp +'%';
        $name.innerText = this.name;
        $img.src = this.img;

        $progressbar.appendChild($name);
        $progressbar.appendChild($life);

        $character.appendChild($img);

        $player.appendChild($progressbar);
        $player.appendChild($character);

        this.$player = $player;
        return $player;
    }

    removePlayer = () => {
        this.$player.remove();
    }
}

export default Player;
