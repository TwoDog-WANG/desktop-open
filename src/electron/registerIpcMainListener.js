const fs = require('fs');
const path = require('path');
const { ipcMain } = require('electron')

module.exports = function() {
    const files = fs.readdirSync(path.join(__dirname));
    files.forEach((fileName) => {
        if(fileName.endsWith('Window')) {
            const funs = fs.readdirSync(path.join(__dirname, fileName, 'ipcMainFunction'));
            funs.forEach((funName) => {
                const funObj = require(path.join(__dirname, fileName, 'ipcMainFunction', funName))
                for (const funName in funObj) {
                    if(funName.startsWith('handleOnce')) {
                        ipcMain.handleOnce(funName.slice(11), funObj[funName]);
                    }
                    else if(funName.startsWith('handle')) {
                        ipcMain.handle(funName.slice(7), funObj[funName]);
                    }
                    else if(funName.startsWith('on')) {
                        ipcMain.on(funName.slice(3), funObj[funName]);
                    }
                }
            })
        }
    })
}