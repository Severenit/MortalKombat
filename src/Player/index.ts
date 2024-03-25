import { createElement } from '../utils/index.js';

interface PlayerProps {
    name: string;
    hp: number;
    img: string;
    player: number;
    rootSelector: string;
}

class Player {
    public name: string;
    public hp: number;
    public img: string;
    public player: number;
    public selector: string;
    public rootSelector: string;
    constructor(props: PlayerProps) {
        this.name = props.name;
        this.hp = props.hp;
        this.img = props.img;
        this.player = props.player;
        this.selector = `player${this.player}`;
        this.rootSelector = props.rootSelector;
    }

    elHP = (): HTMLElement => {
        return document.querySelector(`.${this.selector} .life`) as HTMLElement;
    }

    changeHP = (randomNumber: number) => {
        this.hp -= randomNumber;

        if (this.hp <= 0) {
            this.hp = 0;
        }
    }

    renderHP = () => {
        this.elHP().style.width = this.hp + '%';
    }

    createPlayer = () => {
        const $player = createElement('div', this.selector);
        const $progressbar = createElement('div', 'progressbar');
        const $character = createElement('div', 'character');
        const $life = createElement('div', 'life');
        const $name = createElement('div', 'name');
        const $img = createElement('img') as HTMLImageElement;

        $life.style.width = this.hp +'%';
        $name.innerText = this.name;
        $img.src = this.img;

        $progressbar.appendChild($name);
        $progressbar.appendChild($life);

        $character.appendChild($img);

        $player.appendChild($progressbar);
        $player.appendChild($character);

        const $root = document.querySelector(`.${this.rootSelector}`);
        if (!$root) {
            throw new Error('Root not found');
        }
        
        $root.appendChild($player);

        return $player;
    }

}

export default Player;
