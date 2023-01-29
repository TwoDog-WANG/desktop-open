const { ipcRenderer } = require('electron');

async function getAppLink(res) {
    const link = await ipcRenderer.invoke('getLink', res);
    if(link) {
        return link
    }
    else {
        throw '没有点击'
    }
}
async function askIsFile() {
    const res = await ipcRenderer.invoke('askIsFile');
    return res
}

module.exports = {
    getAppLink,
    askIsFile
};