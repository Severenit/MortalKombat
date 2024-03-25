import { UIComponent } from "../component";
import { PlayerModel } from "../model";
import { APIService } from "../service";
import { PlayerController } from "./PlayerController";

export class GameController {
    private player1: PlayerModel | null;
    private player2: PlayerModel | null;
    constructor() {
        this.player1 = null;
        this.player2 = null;
    }

    async init() {
        const playersData = await APIService.fetchPlayers();
        
        // Создание моделей игроков
        this.player1 = new PlayerModel(playersData[0]);
        this.player2 = new PlayerModel(playersData[1]);

        // Создание контроллеров игроков
        const player1Controller = new PlayerController(this.player1, new UIComponent());
        const player2Controller = new PlayerController(this.player2, new UIComponent());

        // Инициализация игры (можно добавить логику построения UI)
        player1Controller.createPlayer();
        player2Controller.createPlayer();

        this.listenToPlayerActions(player1Controller, player2Controller);
    }

    listenToPlayerActions(player1Controller: PlayerController, player2Controller: PlayerController) {
        // Обработка действий игрока (атака, защита)
        // Можно использовать event listeners для слушания действий пользователя
        // Пример:
        (document.querySelector('.attackButton') as HTMLButtonElement).addEventListener('click', () => {
            const damage = this.calculateDamage();
            player2Controller.changeHP(damage);

            if (this.checkGameOver()) {
                this.endGame();
            }
        });

        // Аналогично для player2Controller
    }

    calculateDamage() {
        // Простая логика расчета урона
        return Math.floor(Math.random() * 20);
    }

    checkGameOver() {
        if (!this.player1 || !this.player2) {
            return false;
        }
        // Проверка условий завершения игры
        return this.player1.hp <= 0 || this.player2.hp <= 0;
    }

    endGame() {
        if (!this.player1 || !this.player2) {
            return false;
        }
        // Логика завершения игры
        if (this.player1.hp <= 0 && this.player2.hp > 0) {
            alert(this.player2.name + ' wins!');
        } else if (this.player2.hp <= 0 && this.player1.hp > 0) {
            alert(this.player1.name + ' wins!');
        } else {
            alert('Draw!');
        }
    }
}