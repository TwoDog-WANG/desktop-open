const { contextBridge } = require('electron');
const fs = require('fs');
const path = require('path')

const filesNameList = fs.readdirSync(__dirname);
filesNameList.forEach((value) => {
    if(value !== 'preload.js' && value.endsWith('.js')) {
        let funObj = require(`./${value}`);
        for (const funName in funObj) {
            contextBridge.exposeInMainWorld(funName, funObj[funName])
        }
    }
})