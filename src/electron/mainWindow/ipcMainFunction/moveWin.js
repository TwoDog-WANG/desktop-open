const { BrowserWindow } = require('electron')


function showWin() {
    const win = BrowserWindow.getAllWindows()[0];
    win.setPosition(-6, 40);
    win.setSize(450, 550);
    // let t = 0;
    // let time = setInterval(() => {
    //     t++;
    //     let x = parseInt(-590 + t * 590 / 50);
    //     win.setPosition(x, 40);
    //     win.setSize(600, 800);
    //     if(t >= 50) {
    //         clearInterval(time);
    //     }
    // }, 10);
}

function hiddenWin() {
    const win = BrowserWindow.getAllWindows()[0];
    win.setPosition(-444, 40);
    win.setSize(450, 550);
    
    // let time = null;
    // let t = 0
    // time = setInterval(() => {
    //     t++;
    //     let x = parseInt(0 - t * 590 / 50);
    //     win.setPosition(x, 40);
    //     win.setSize(600, 800);
    //     if(t >= 50) {
    //         clearInterval(time);
    //     }
    // }, 10);
}

module.exports = {
    on_showWin: showWin,
    on_hiddenWin: hiddenWin
}