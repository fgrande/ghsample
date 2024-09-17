const shell = require('shelljs');

function exitHook(errCode = 0, errMsg = '') {

    if (errCode != 0) {
        console.log('                       ______');
        console.log('                    .-"      "-.');
        console.log('                   /            \\');
        console.log('       _          |              |          _');
        console.log('      ( \\         |,  .-.  .-.  ,|         / )');
        console.log('       > "=._     | )(__/  \\__)( |     _.=" <');
        console.log('      (_/"=._"=._ |/     /\\     \\| _.="_.="\\_)');
        console.log('             "=._ (_     ^^     _)"_.="');
        console.log('                 "=\\__|IIIIII|__/="');
        console.log('                _.="| \\IIIIII/ |"=._');
        console.log('      _     _.="_.="\\          /"=._"=._     _');
        console.log('     ( \\_.="_.="     `--------`     "=._"=._/ )');
        console.log('      > _.="                            "=._ <');
        console.log('     (_/                                    \\_)');
        console.log('');

        if (errMsg) {
            console.log('');
            console.log('I GOT YOU !!! You have to pay for your sins: ' + errMsg);
            console.log('');
        }
    }

    process.exit(errCode);
}


function _exec(cmd, options) {
    console.log("Running Command " + cmd);
}



exports.exitHook = exitHook;