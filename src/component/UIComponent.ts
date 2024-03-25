import { PlayerModel } from "../model";

export class UIComponent {
    public createElement(tag: string, className: string) {
        const element = document.createElement(tag);
        if (className) element.classList.add(className);
        return element;
    }

    public renderHP(hp: number | string) {
        const hpElement = document.querySelector('.life') as HTMLElement;
        hpElement.style.width = hp + '%';
    }

    public createPlayer(playerModel: PlayerModel) {
        // Реализация метода создания элемента игрока на странице
    }
}