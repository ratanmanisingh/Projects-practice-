const cards = document.querySelectorAll('.language-card');
const output = document.getElementById('language-content');

function showLanguage(panelId) {
	const panel = document.getElementById(panelId);
	if (panel) {
		output.innerHTML = panel.innerHTML;
	}
}

function showC() {
	showLanguage('c-panel');
}

function showCpp() {
	showLanguage('cpp-panel');
}

function showPython() {
	showLanguage('python-panel');
}

function showJava() {
	showLanguage('java-panel');
}

function showJavaScript() {
	showLanguage('javascript-panel');
}

function showR() {
	showLanguage('r-panel');
}

function showReactJS() {
	showLanguage('react-panel');
}

function showNodeJS() {
	showLanguage('node-panel');
}

function showSQL() {
	showLanguage('sql-panel');
}

cards.forEach((card) => {
	card.addEventListener('click', function () {
		if (card.dataset.language === 'C') {
			showC();
		} else if (card.dataset.language === 'C++') {
			showCpp();
		} else if (card.dataset.language === 'Python') {
			showPython();
		} else if (card.dataset.language === 'Java') {
			showJava();
		} else if (card.dataset.language === 'JavaScript') {
			showJavaScript();
		} else if (card.dataset.language === 'R') {
			showR();
		} else if (card.dataset.language === 'ReactJS') {
			showReactJS();
		} else if (card.dataset.language === 'NodeJS') {
			showNodeJS();
		} else if (card.dataset.language === 'SQL') {
			showSQL();
		}
	});

	card.addEventListener('keydown', function (event) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			if (card.dataset.language === 'C') {
				showC();
			} else if (card.dataset.language === 'C++') {
				showCpp();
			} else if (card.dataset.language === 'Python') {
				showPython();
			} else if (card.dataset.language === 'Java') {
				showJava();
			} else if (card.dataset.language === 'JavaScript') {
				showJavaScript();
			} else if (card.dataset.language === 'R') {
				showR();
			} else if (card.dataset.language === 'ReactJS') {
				showReactJS();
			} else if (card.dataset.language === 'NodeJS') {
				showNodeJS();
			} else if (card.dataset.language === 'SQL') {
				showSQL();
			}
		}
	});
});

