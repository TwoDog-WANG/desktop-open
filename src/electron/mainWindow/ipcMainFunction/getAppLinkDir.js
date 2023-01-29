const { dialog,app,BrowserWindow } = require('electron');

async function askIsFile() {
    const win = BrowserWindow.getAllWindows()[0];
    win.setAlwaysOnTop(false);
    const res = await dialog.showMessageBox({
        message: '文件夹还是快捷方式？？？',
        buttons: ['等等不选了', '文件夹', '快捷方式']
    })
    win.setAlwaysOnTop(true);
    return res
}

async function getLink(e, res) {
    const win = BrowserWindow.getAllWindows()[0];
    win.setAlwaysOnTop(false);
    let option;
    if(res === 1) {
        option = 'openDirectory'
    }
    else if(res === 2) {
        option = 'openFile'
    }
    const dir = await dialog.showOpenDialog({
        title: '快选',
        properties: [ option,'showHiddenFiles'
        ]
    })
    win.setAlwaysOnTop(true);
    if(dir.filePaths.length > 0) {
       const icon = await app.getFileIcon(dir.filePaths[0], {size: 'large'});
       const iconDir = icon.toDataURL();
       return {
        dir: dir.filePaths[0],
        linkName: dir.filePaths[0].split('\\').at(-1),
        iconDir,
       }
    }
    else {
        return undefined
    }
}

module.exports = {
    handle_getLink: getLink,
    handle_askIsFile: askIsFile,
}