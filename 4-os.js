// os module
const os = require('os');

//info about current user
const user = os.userInfo();
console.log(user);
//system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} in seconds`);

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMemory:os.totalmem(),
    freeMemory:os.freemem()
}

console.log(currentOS);