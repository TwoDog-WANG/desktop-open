const { app } = require('electron');
const path = require('path');

const createWindow = require('./mainWindow/createWindow');
const setTray = require('./setTray.js');
const registerIpcMainListener = require(path.join(__dirname, 'registerIpcMainListener.js'));
const registerGlobalShortcut = require(path.join(__dirname, 'registerGlobalShortcut.js'));

registerIpcMainListener();
let mainWin = null;
app.on('ready', () => {
    mainWin = createWindow();
    
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})

app.whenReady().then(() => {
    setTray(app, mainWin);
    registerGlobalShortcut();
})
.catch((err) => {
    console.log(err)
})