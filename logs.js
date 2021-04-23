import { LOGS } from './constants.js';
import { getRandom, getTime } from './utils.js';

class Logs {
    constructor(props) {
        this.$chat = document.querySelector(`.${props.selector}`);
    }

    emptyLogs = () => {
        this.$chat.innerHTML = '';
    }

    getTextLog = (type, playerName1, playerName2) => {
        switch (type) {
            case 'start':
                return LOGS[type]
                    .replace('[player1]', playerName1)
                    .replace('[player2]', playerName2)
                    .replace('[time]', getTime());
                break;
            case 'hit':
                return LOGS[type][getRandom(LOGS[type].length - 1) - 1]
                    .replace('[playerKick]', playerName1)
                    .replace('[playerDefence]', playerName2)
                break;
            case 'defence':
                return LOGS[type][getRandom(LOGS[type].length - 1) - 1]
                    .replace('[playerKick]', playerName1)
                    .replace('[playerDefence]', playerName2)
                break;
            case 'end':
                return LOGS[type][getRandom(LOGS[type].length - 1) - 1]
                    .replace('[playerWins]', playerName1)
                    .replace('[playerLose]', playerName2)
                break;
            case 'draw':
                return LOGS[type];
                break;
        }
    }

    generateLogs = (type, { name } = {}, { name: playerName2, hp } = {}, valueAttack) => {
        let text = this.getTextLog(type, name, playerName2);
        switch (type) {
            case 'hit':
                text = `${getTime()} ${text} -${valueAttack} [${hp}/100]`;
                break;
            case 'defence':
            case 'end':
            case 'draw':
                text = `${getTime()} ${text}`;
                break;
        }

        const el = `<p>${text}</p>`;
        this.$chat.insertAdjacentHTML('afterbegin', el);
    }
}

export default Logs;
