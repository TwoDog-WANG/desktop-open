const { BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
    const win = new BrowserWindow({
      width: 450,
      height: 550,
      frame: false,
      transparent:true,
      webPreferences: {
        preload: path.join(__dirname, './preload/preload.js'),
      },
    })
    // win.webContents.openDevTools();
    win.setPosition(-5,40);
    win.setAlwaysOnTop(true);
    win.setSkipTaskbar(true);
    win.loadFile('./src/vue_dist/main.html');
    // win.loadURL('http://localhost:8080/main.html');
    // win.loadFile('./src/111.html');
    return win
}

module.exports = createWindow;