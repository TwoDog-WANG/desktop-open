const {app} = require('electron');

function returnAppDir() {
    return app.getAppPath();
}

module.exports = {
    handle_returnAppDir: returnAppDir
}