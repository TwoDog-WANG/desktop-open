const { Menu, Tray } = require('electron');
const path = require('path');

function setTray(app, mainWin) {
    let tray = new Tray(path.join(__dirname, './aaa.png'));
    
    const contextMenu = Menu.buildFromTemplate([
        {
          // 点击退出菜单退出程序
          label: '退出', click: function () {
            mainWin.destroy();
            app.quit();
          }
        }
    ])

    tray.setToolTip('konomusic');
    tray.setContextMenu(contextMenu);

    tray.on('click', () => {
        mainWin.show();
        mainWin.setSkipTaskbar(true);
    })
}

module.exports = setTray