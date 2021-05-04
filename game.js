let jumping = false;
let playing = true;

function jump() {
	let dinosaur = document.querySelector('#dinosaur');
	if (!jumping) {
		dinosaur.classList.add('jumping');
		jumping = true;

		setTimeout(() => {
			dinosaur.classList.remove('jumping');
		}, 700);

		setTimeout(() => {
			jumping = false;
		}, 1400);
	}
}

// setInterval(() => {
// 	let dinosaur = document.querySelector('#dinosaur');
// 	let dinoBounds = dinosaur.getBoundingClientRect();
// 	let cactus = document.querySelector('#cactus');
// 	let cactusBounds = cactus.getBoundingClientRect();

// 	let cactusCenteredUnderDino = (cactusBounds.left >= dinoBounds.left) && (cactusBounds.right <= dinoBounds.right);
// 	let dinoIsEyeLevelToCactus = dinoBounds.bottom > cactusBounds.top;

// 	if (cactusCenteredUnderDino && dinoIsEyeLevelToCactus) {
// 		playing = false;
// 		alert('Game over')
// 	}
// }, 10)

window.onload = () => {
	let gameScene = document.querySelector('#game');
	console.log(gameScene)
	let cactus = document.createElement('div');
	cactus.id = 'cactus';
	gameScene.appendChild(cactus);
};
