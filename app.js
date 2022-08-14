function darkSwordPage() {
	window.location='https://finalfantasy.fandom.com/wiki/Dark_Sword_(weapon)';
}
function shadowBlade() {
	window.location="https://finalfantasy.fandom.com/wiki/Shadowblade_(weapon)";
}
function deathBringer() {
	window.location="https://finalfantasy.fandom.com/wiki/Deathbringer";
}

const message = "Cecil is a Beast! Can't wait to keep playing!";
x = message.toUpperCase();
x = message.toLowerCase();
x = message;
alert(x);

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
	const form = document.getElementById('form');

	if (form.style.display === 'none') {
		form.style.display = 'block';
		alert('Are you ready for your new destiny?');
	} else {
		form.style.display = 'none';
	}
});
