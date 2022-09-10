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