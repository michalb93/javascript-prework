

const buttonKamien = document.getElementById('kamien'),
      buttonPapier = document.getElementById('papier'),
	  buttonNozyce = document.getElementById('nozyce');

function buttonClicked(argButtonName) {
         clearMessages();
         console.log(argButtonName + ' został kliknięty');
		 playerMove = argButtonName;
		 console.log('ruch gracza to: ' + playerMove);
		 randomNumber = Math.floor(Math.random() * 3 + 1);
		 console.log('wylosowana liczba to: ' + randomNumber);
		 computerMove = getMoveName(randomNumber);
		 console.log('ruch komputera to: ' + computerMove);
		 displayResult(playerMove, computerMove);
		 }

function getMoveName(argMoveId) {
		 console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
if 		(argMoveId == 1) {
		 return 'kamien';
		 } else if (argMoveId == 2) {
		 return 'papier';
		 } else if (argMoveId == 3) {
		 return 'nozyce';
		 } else {
		 printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamien".');
		 return 'kamien';
		}
	} 


function displayResult(argPlayerMove, argComputerMove) {
		 console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
if 		(argPlayerMove == 'papier' && argComputerMove == 'kamien') {
		 printMessage('Wygrywasz!');
		 } else if (argPlayerMove == 'kamien' && argComputerMove == 'nozyce') {
		 printMessage('Wygrywasz!');
		 } else if (argPlayerMove == 'nozyce' && argComputerMove == 'papier') {
		 printMessage('Wygrywasz!');
		 } else if (argPlayerMove == argComputerMove) {
		 printMessage('Remis');
		 } else {
		 printMessage('Przegrywasz :(');
	}
		 printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
	}


		 buttonKamien.addEventListener('click', function(){ buttonClicked('kamien'); });
		 buttonPapier.addEventListener('click', function(){ buttonClicked('papier'); });
		 buttonNozyce.addEventListener('click', function(){ buttonClicked('nozyce'); });