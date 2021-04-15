const logs = {
    start: 'Часы показывали [date] [time], когда [player1] и [player2] бросили вызов друг другу.',
    end: function(playerWins, playerLose) {
        return `Результат удара ${playerWins}: ${playerLose} - труп`;
    },
    fight: [
        '[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.',
        '[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.'
    ],
    defence: [
        '[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.'
    ]
}
