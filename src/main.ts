import { ATTACK, HIT, LOGS } from './constants'
import Player from './Player'
import { getRandom, createElement, getTime } from './utils/index'
import mkPlayer from './constants/mkPlayer.json'
import { GameController } from './controller'

const $arenas = document.querySelector('.arenas')
const $formFight = document.querySelector('.control') as HTMLFormElement

if (!$formFight) {
  throw new Error('Form not found')
}

const $chat = document.querySelector('.chat')

const game = new GameController();
game.init();

let player1: Player
let player2: Player

class Game {
  getPlayers = async () => {
    return mkPlayer
  }

  start = async () => {
    const players = await this.getPlayers()
    let p1 = players[getRandom(players.length) - 1]

    if (localStorage.getItem('player1')) {
      p1 = JSON.parse(localStorage.getItem('player1') as string)
      localStorage.removeItem('player1')
    }

    const p2 = players[getRandom(players.length) - 1]
    console.log(p1, p2)
    player1 = new Player({
      ...p1,
      player: 1,
      rootSelector: 'arenas',
    })
    player2 = new Player({
      ...p2,
      player: 2,
      rootSelector: 'arenas',
    })
    player1.createPlayer()
    player2.createPlayer()

    generateLogs('start', player1, player2)
  }
}

// const game = new Game()
// game.start()

function playerLose(name?: string) {
  const $loseTitle = createElement('div', 'loseTitle')

  if (name) {
    $loseTitle.innerText = name + ' wins'
  } else {
    $loseTitle.innerText = 'draw'
  }

  return $loseTitle
}

function createReloadButton() {
  if (!$arenas) {
    throw new Error('Arena not found')
  }

  const $reloadButtonDiv = createElement('div', 'reloadWrap')
  const $reloadButton = createElement('button', 'button')
  $reloadButton.innerText = 'Reload'

  $reloadButton.addEventListener('click', function () {
    window.location.reload()
  })

  $reloadButtonDiv.appendChild($reloadButton)
  $arenas.appendChild($reloadButtonDiv)
}

function enemyAttack() {
  const hit = ATTACK[getRandom(3) - 1]
  const defence = ATTACK[getRandom(3) - 1]

  return {
    value: getRandom(HIT[hit as keyof typeof HIT]),
    hit,
    defence,
  }
}

function playerAttack() {
  if (!$formFight) {
    throw new Error('Form not found')
  }

  const attack = {
    value: 0,
    hit: '',
    defence: '',
  }

  for (let item of $formFight as unknown as HTMLInputElement[]) {
    if (item.checked && item.name === 'hit') {
      attack.value = getRandom(HIT[item.value as keyof typeof HIT])
      attack.hit = item.value
    }

    if (item.checked && item.name === 'defence') {
      attack.defence = item.value
    }

    item.checked = false
  }

  return attack
}

function showResult() {
  if (!$arenas) {
    throw new Error('Arena not found')
  }
  if (player2.hp === 0 || player1.hp === 0) {
    createReloadButton()
  }

  if (player1.hp === 0 && player1.hp < player2.hp) {
    $arenas.appendChild(playerLose(player2.name))
    generateLogs('end', player2, player1)
  } else if (player2.hp === 0 && player2.hp < player1.hp) {
    $arenas.appendChild(playerLose(player1.name))
    generateLogs('end', player1, player2)
  } else if (player2.hp === 0 && player2.hp === 0) {
    $arenas.appendChild(playerLose())
    generateLogs('draw', player1, player2)
  }
}

function getTextLog(
  type: 'start' | 'hit' | 'defence' | 'end' | 'draw',
  playerName1: string,
  playerName2: string
) {
  switch (type) {
    case 'start':
      return LOGS[type]
        .replace('[player1]', playerName1)
        .replace('[player2]', playerName2)
        .replace('[time]', getTime())
      break
    case 'hit':
      return LOGS[type][getRandom(LOGS[type].length - 1) - 1]
        .replace('[playerKick]', playerName1)
        .replace('[playerDefence]', playerName2)
      break
    case 'defence':
      return LOGS[type][getRandom(LOGS[type].length - 1) - 1]
        .replace('[playerKick]', playerName1)
        .replace('[playerDefence]', playerName2)
      break
    case 'end':
      return LOGS[type][getRandom(LOGS[type].length - 1) - 1]
        .replace('[playerWins]', playerName1)
        .replace('[playerLose]', playerName2)
      break
    case 'draw':
      return LOGS[type]
      break
  }
}

function generateLogs(
  type: 'start' | 'hit' | 'defence' | 'end' | 'draw',
  { name }: Player,
  { name: playerName2, hp }: Player,
  valueAttack?: number
) {
  if (!$chat) {
    throw new Error('Chat not found')
  }

  let text = getTextLog(type, name, playerName2)

  switch (type) {
    case 'hit':
      text = `${getTime()} ${text} -${valueAttack} [${hp}/100]`
      break
    case 'defence':
    case 'end':
    case 'draw':
      text = `${getTime()} ${text}`
      break
  }

  const el = `<p>${text}</p>`
  $chat.insertAdjacentHTML('afterbegin', el)
}

$formFight.addEventListener('submit', function (e) {
  e.preventDefault()
  const {
    hit: hitEnemy,
    defence: defenceEnemy,
    value: valueEnemy,
  } = enemyAttack()
  const { hit, defence, value } = playerAttack()

  if (defence !== hitEnemy) {
    player1.changeHP(valueEnemy)
    player1.renderHP()
    generateLogs('hit', player2, player1, valueEnemy)
  } else {
    generateLogs('defence', player2, player1)
  }

  if (defenceEnemy !== hit) {
    player2.changeHP(value)
    player2.renderHP()
    generateLogs('hit', player1, player2, value)
  } else {
    generateLogs('defence', player1, player2)
  }

  showResult()
})
