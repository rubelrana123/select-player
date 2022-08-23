const playerList = getTheElement('playerList');
const buttons = document.getElementsByClassName('select-btn');

for (const button of buttons) {
	button.addEventListener('click', function (event) {
    let count = playerList.childNodes.length-1;
		if (playerList.childNodes.length > 5) {
			alert("You can't add more than 5 player!");
			return;
		}
		button.setAttribute('disabled', true);
		const playerName = event.target.parentNode.childNodes[1].innerText;
		const li = document.createElement('li');
		li.innerText = count+1 +  " " + playerName;
		playerList.appendChild(li);
	});
}

