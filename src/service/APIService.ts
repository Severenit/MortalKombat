import mkPlayers from '../constants/mkPlayer.json';

export class APIService {
    static async fetchPlayers() {
        // const response = await fetch('https://reactmarathon-api.herokuapp.com/api/mk/players');
        // return await response.json();
        return mkPlayers;
    }
}