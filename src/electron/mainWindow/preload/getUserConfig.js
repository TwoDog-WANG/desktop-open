const { ipcRenderer } = require('electron');
const fs = require('fs');
const path = require('path');

async function getLinkList() {
    const appDir = await ipcRenderer.invoke('returnAppDir');
    let linkList = null;
    try {
        linkList = await fs.promises.readFile(path.join(appDir, '/userData/linkList.json'), 'utf-8');
    } catch (error) {
        try {
            await fs.promises.rmdir(path.join(appDir, '/userData'));
        } catch (error) {
            
        }
        try {
            await fs.promises.mkdir(path.join(appDir, '/userData'));
            linkList = JSON.stringify({}, null, '\t');
            await fs.promises.writeFile(path.join(appDir, '/userData/linkList.json'), linkList)
        } catch (error) {
            
        }
    }
    return JSON.parse(linkList);
}

async function changeLinkList(linkList) {
    const appDir = await ipcRenderer.invoke('returnAppDir');
    await fs.promises.writeFile(path.join(appDir, '/userData/linkList.json'), linkList);
}

module.exports = {
    getLinkList,
    changeLinkList
};