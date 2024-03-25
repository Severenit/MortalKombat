export const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}

export const ATTACK = ['head', 'body', 'foot'];
export const LOGS = {
    start: 'Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.',
    end: [
        'Результат удара [playerWins]: [playerLose] - труп',
        '[playerLose] погиб от удара бойца [playerWins]',
        'Результат боя: [playerLose] - жертва, [playerWins] - убийца',
    ],
    hit: [
        '[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.',
        '[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.',
        '[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.',
        '[playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.',
        '[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.',
        '[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.',
        '[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.',
        '[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.',
        '[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.',
        '[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.',
        '[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.',
        '[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.',
        '[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.',
        '[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.',
        '[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.',
        '[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.',
        '[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.',
        '[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага.',
    ],
    defence: [
        '[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.',
        '[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.',
        '[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.',
        '[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.',
        '[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.',
        '[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.'
    ],
    draw: 'Ничья - это тоже победа!'
};

[
  {
    "id": 1,
    "name": "RAIN",
    "img": "http://reactmarathon-api.herokuapp.com/assets/mk/fightingStance/rain.gif",
    "hp": 100,
    "avatar": "http://reactmarathon-api.herokuapp.com/assets/mk/avatar/1.png"
  },
  {
    "id": 2,
    "name": "REPTILE",
    "img": "http://reactmarathon-api.herokuapp.com/assets/mk/fightingStance/reptile.gif",
    "hp": 100,
    "avatar": "http://reactmarathon-api.herokuapp.com/assets/mk/avatar/2.png"
  },
  {
    "id": 3,
    "name": "STRYKER",
    "img": "http://reactmarathon-api.herokuapp.com/assets/mk/fightingStance/stryker.gif",
    "hp": 100,
    "avatar": "http://reactmarathon-api.herokuapp.com/assets/mk/avatar/3.png"
  },
  {
    "id": 4,
    "name": "JAX",
    "img": "http://reactmarathon-api.herokuapp.com/assets/mk/fightingStance/jax.gif",
    "hp": 100,
    "avatar": "http://reactmarathon-api.herokuapp.com/assets/mk/avatar/4.png"
  },
  {
    "id": 5,
    "name": "NIGHT WOLF",
    "img": "http://reactmarathon-api.herokuapp.com/assets/mk/fightingStance/nightwolf.gif",
    "hp": 100,
    "avatar": "http://reactmarathon-api.herokuapp.com/assets/mk/avatar/5.png"
  },
  {
    "id": 6,
    "name": "JADE",
    "img": "http://reactmarathon-api.herokuapp.com/assets/mk/fightingStance/jade.gif",
    "hp": 100,
    "avatar": "http://reactmarathon-api.herokuapp.com/assets/mk/avatar/6.png"
  },
  {
    "id": 7,
    "name": "NOOB SAIBOT",
    "img": "http://reactmarathon-api.herokuapp.com/assets/mk/fightingStance/noobsaibot.gif",
    "hp": 100,
    "avatar": "http://reactmarathon-api.herokuapp.com/assets/mk/avatar/7.png"
  },
  {
    "id": 8,
    "name": "SONYA",
    "img": "http://reactmarathon-api.herokuapp.com/assets/mk/fightingStance/sonya.gif",
    "hp": 100,
    "avatar": "http://reactmarathon-api.herokuapp.com/assets/mk/avatar/8.png"
  },
  {
    "id": 9,
    "name": "KANO",
    "img": "http://reactmarathon-api.herokuapp.com/assets/mk/fightingStance/kano.gif",
    "hp": 100,
    "avatar": "http://reactmarathon-api.herokuapp.com/assets/mk/avatar/9.png"
  },
  {
    "id": 10,
    "name": "MILEENA",
    "img": "http://reactmarathon-api.herokuapp.com/assets/mk/fightingStance/mileena.gif",
    "hp": 100,
    "avatar": "http://reactmarathon-api.herokuapp.com/assets/mk/avatar/10.png"
  },
  {
    "id": 12,
    "name": "SUB-ZERO",
    "img": "http://reactmarathon-api.herokuapp.com/assets/mk/fightingStance/subzero1.gif",
    "hp": 100,
    "avatar": "http://reactmarathon-api.herokuapp.com/assets/mk/avatar/12.png"
  },
  {
    "id": 13,
    "name": "SUB-ZERO",
    "img": "http://reactmarathon-api.herokuapp.com/assets/mk/fightingStance/subzero.gif",
    "hp": 100,
    "avatar": "http://reactmarathon-api.herokuapp.com/assets/mk/avatar/13.png"
  },
  {
    "id": 14,
    "name": "KUNG LAO",
    "img": "http://reactmarathon-api.herokuapp.com/assets/mk/fightingStance/kunglao.gif",
    "hp": 100,
    "avatar": "http://reactmarathon-api.herokuapp.com/assets/mk/avatar/14.png"
  },
  {
    "id": 15,
    "name": "SEKTOR",
    "img": "http://reactmarathon-api.herokuapp.com/assets/mk/fightingStance/sektor.gif",
    "hp": 100,
    "avatar": "http://reactmarathon-api.herokuapp.com/assets/mk/avatar/15.png"
  },
  {
    "id": 16,
    "name": "KITANA",
    "hp": 100,
    "img": "http://reactmarathon-api.herokuapp.com/assets/mk/fightingStance/kitana.gif",
    "avatar": "http://reactmarathon-api.herokuapp.com/assets/mk/avatar/16.png"
  },
  {
    "id": 17,
    "name": "ERMAC",
    "img": "http://reactmarathon-api.herokuapp.com/assets/mk/fightingStance/ermac.gif",
    "hp": 100,
    "avatar": "http://reactmarathon-api.herokuapp.com/assets/mk/avatar/17.png"
  },
  {
    "id": 18,
    "name": "SCORPION",
    "hp": 100,
    "img": "http://reactmarathon-api.herokuapp.com/assets/mk/fightingStance/scorpion.gif",
    "avatar": "http://reactmarathon-api.herokuapp.com/assets/mk/avatar/18.png"
  },
  {
    "id": 19,
    "name": "CYRAX",
    "img": "http://reactmarathon-api.herokuapp.com/assets/mk/fightingStance/cyrax.gif",
    "hp": 100,
    "avatar": "http://reactmarathon-api.herokuapp.com/assets/mk/avatar/19.png"
  },
  {
    "id": 20,
    "name": "KABAL",
    "img": "http://reactmarathon-api.herokuapp.com/assets/mk/fightingStance/kabal.gif",
    "hp": 100,
    "avatar": "http://reactmarathon-api.herokuapp.com/assets/mk/avatar/20.png"
  },
  {
    "id": 21,
    "name": "SINDEL",
    "img": "http://reactmarathon-api.herokuapp.com/assets/mk/fightingStance/sindel.gif",
    "hp": 100,
    "avatar": "http://reactmarathon-api.herokuapp.com/assets/mk/avatar/21.png"
  },
  {
    "id": 22,
    "name": "SMOKE",
    "img": "http://reactmarathon-api.herokuapp.com/assets/mk/fightingStance/smoke.gif",
    "hp": 100,
    "avatar": "http://reactmarathon-api.herokuapp.com/assets/mk/avatar/22.png"
  },
  {
    "id": 23,
    "name": "LIU KANG",
    "img": "http://reactmarathon-api.herokuapp.com/assets/mk/fightingStance/liukang.gif",
    "hp": 100,
    "avatar": "http://reactmarathon-api.herokuapp.com/assets/mk/avatar/23.png"
  },
  {
    "id": 24,
    "name": "SHANG TSUNG",
    "img": "http://reactmarathon-api.herokuapp.com/assets/mk/fightingStance/shangtsung.gif",
    "hp": 100,
    "avatar": "http://reactmarathon-api.herokuapp.com/assets/mk/avatar/24.png"
  }
]