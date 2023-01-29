const fs = require('fs');
const path = require('path');
const { globalShortcut } = require('electron')

module.exports = function() {
    const files = fs.readdirSync(path.join(__dirname));
    files.forEach((fileName) => {
        if(fileName.endsWith('Window')) {
            const funs = fs.readdirSync(path.join(__dirname, fileName, 'globalShortcutFunction'));
            funs.forEach((funName) => {
                const funObj = require(path.join(__dirname, fileName, 'globalShortcutFunction', funName))
                for (const funName in funObj) {
                    let strFunName = funName.split('_').join('+');
                    let isRegister = globalShortcut.register(strFunName, funObj[funName]);
                    console.log(`${strFunName} is ${isRegister ? 'ok' : 'faults'}`);
                }
            })
        }
    })
}