const { ipcRenderer } = require('electron');

function showWin() {
    ipcRenderer.send('showWin');
}

function hiddenWin() {
    ipcRenderer.send('hiddenWin');
}

module.exports = {
    showWin,
    hiddenWin
};