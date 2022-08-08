function darkSwordPage() {
	window.location='https://finalfantasy.fandom.com/wiki/Dark_Sword_(weapon)';
}
function shadowBlade() {
	window.location="https://finalfantasy.fandom.com/wiki/Shadowblade_(weapon)";
}
function deathBringer() {
	window.location="https://finalfantasy.fandom.com/wiki/Deathbringer";
}

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
	const form = document.getElementById('form');

	if (form.style.display === 'none') {
		form.style.display = 'block';
	} else {
		form.style.display = 'none';
	}
});