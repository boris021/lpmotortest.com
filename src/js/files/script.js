// Подключение функционала "Чертогов Фрилансера"
import {
	isMobile
} from "./functions.js";
// Подключение списка активных модулей
import {
	flsModules
} from "./modules.js";

let fields = document.querySelectorAll('.field__file');
Array.prototype.forEach.call(fields, function (input) {
	let label = input.nextElementSibling,
		labelVal = label.querySelector('.field__file-fake').innerText;

	input.addEventListener('change', function (e) {
		let countFiles = '';
		if (this.files && this.files.length >= 1)
			countFiles = this.files.length;

		if (countFiles)
			label.querySelector('.field__file-fake').innerText = 'Selected files: ' + countFiles;
		else
			label.querySelector('.field__file-fake').innerText = labelVal;
	});
});

// хуки
function setCookie(name, value, days) {
	let expires = "";
	if (days) {
		let date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		expires = "; expires=" + date.toUTCString();
	}
	document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
	let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}


function checkCookies() {
	let cookieNote = document.getElementById('cookie_note');
	let cookieBtnAccept = cookieNote.querySelector('.cookie_accept');

	// Если куки cookies_policy нет или она просрочена, то показываем уведомление
	if (!getCookie('cookies_policy')) {
		cookieNote.classList.add('show');
	}

	// При клике на кнопку устанавливаем куку cookies_policy на один год
	cookieBtnAccept.addEventListener('click', function () {
		setCookie('cookies_policy', 'true', 365);
		cookieNote.classList.remove('show');
	});
}

checkCookies();