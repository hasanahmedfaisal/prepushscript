const execSync = require('child_process').execSync;

const insertPath = '.git/hooks/pre-push';
const insertPrePushFile = `touch ${insertPath}`;

const prePushCheckScripts = `echo '#!/bin/bash''\n'npm run pre-push'\n'RESULT='$?''\n''[' '$RESULT' -ne 0 ']' '&&' exit 1'\n'exit 0 > ${insertPath}`;
const setExecutableScript = `chmod +x ${insertPath}`;

const commands = [insertPrePushFile,prePushCheckScripts,setExecutableScript];

commands.forEach(execSync);