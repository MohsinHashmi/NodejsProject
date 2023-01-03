const os=require('os');

console.log(os.arch());
console.log(os.freemem()/(1024*1024*1024));
console.log(os.totalmem()/(1024*1024*1024));
console.log(os.getPriority());
console.log(os.tmpdir());
console.log(os.platform());
console.log(os.cpus());
console.log(os.loadavg());
console.log(os.endianness);
console.log(os.loadavg);
console.log(os.networkInterfaces());
console.log(os.hostname());
console.log(os.release())
console.log(os.uptime()/(60*60*60));
console.log(os.userInfo());
console.log(os.version())
console.log(os.type())