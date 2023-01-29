const childProcess = require('child_process');

function openLink(dir) {
    const com = `start " " "${dir}"`;
    childProcess.exec(com, (err, stdout, stdin) => {
        console.log(err,stdout,stdin);
    })
}

module.exports = {
    openLink,
};