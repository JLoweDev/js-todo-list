function addListeners() {
    const newProjectBtn = document.getElementById('addProject');
    newProjectBtn.addEventListener('click', consoleMessage);
}

function consoleMessage() {
    console.log('Console Message');
}

function init() {
    addListeners();
}

init();