const $player1 = document.createElement('div');
$player1.classList.add('player1');

const $p = document.createElement('p');
$p.innerText = 'Scorpion';

const $img = document.createElement('img');
$img.src = 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif';

$player1.appendChild($p);
$player1.appendChild($img);

const $root = document.querySelector('.root');
$root.appendChild($player1);
