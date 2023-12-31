const os = require('os'); //nodejs built-in module

/*
console.log(os);
{
  arch: [Function: arch] { [Symbol(Symbol.toPrimitive)]: [Function] },
  cpus: [Function: cpus],
  endianness: [Function: endianness] { [Symbol(Symbol.toPrimitive)]: [Function] 
},
  freemem: [Function: getFreeMem] { [Symbol(Symbol.toPrimitive)]: [Function] }, 
  getPriority: [Function: getPriority],
  homedir: [Function: hidden] { [Symbol(Symbol.toPrimitive)]: [Function] },     
  hostname: [Function: hidden] { [Symbol(Symbol.toPrimitive)]: [Function] },    
  loadavg: [Function: loadavg],
  networkInterfaces: [Function: networkInterfaces],
  platform: [Function: platform] { [Symbol(Symbol.toPrimitive)]: [Function] },  
  release: [Function: getOSRelease] { [Symbol(Symbol.toPrimitive)]: [Function] },
  setPriority: [Function: setPriority],
  tmpdir: [Function: tmpdir] { [Symbol(Symbol.toPrimitive)]: [Function] },      
  totalmem: [Function: getTotalMem] { [Symbol(Symbol.toPrimitive)]: [Function] },
  type: [Function: getOSType] { [Symbol(Symbol.toPrimitive)]: [Function] },     
  version: [Function: getOSVersion] { [Symbol(Symbol.toPrimitive)]: [Function] },
  userInfo: [Function: userInfo],
  uptime: [Function: getUptime] { [Symbol(Symbol.toPrimitive)]: [Function] },   
  tmpDir: [Function: deprecated],
  constants: [Object: null prototype] {
    UV_UDP_REUSEADDR: 4,
    dlopen: [Object: null prototype] {
      RTLD_LAZY: 1,
      RTLD_NOW: 2,
      RTLD_GLOBAL: 256,
      RTLD_LOCAL: 0,
      RTLD_DEEPBIND: 8
    },
    errno: [Object: null prototype] {
      E2BIG: 7,
      EACCES: 13,
      EADDRINUSE: 98,
      EADDRNOTAVAIL: 99,
      EAFNOSUPPORT: 97,
      EAGAIN: 11,
      EALREADY: 114,
      EBADF: 9,
      EBADMSG: 74,
      EBUSY: 16,
      ECANCELED: 125,
      ECHILD: 10,
      ECONNABORTED: 103,
      ECONNREFUSED: 111,
      ECONNRESET: 104,
      EDEADLK: 35,
      EDESTADDRREQ: 89,
      EDOM: 33,
      EDQUOT: 122,
      EEXIST: 17,
      EFAULT: 14,
      EFBIG: 27,
      EHOSTUNREACH: 113,
      EIDRM: 43,
      EILSEQ: 84,
      EINPROGRESS: 115,
      EINTR: 4,
      EINVAL: 22,
      EIO: 5,
      EISCONN: 106,
      EISDIR: 21,
      ELOOP: 40,
      EMFILE: 24,
      EMLINK: 31,
      EMSGSIZE: 90,
      EMULTIHOP: 72,
      ENAMETOOLONG: 36,
      ENETDOWN: 100,
      ENETRESET: 102,
      ENETUNREACH: 101,
      ENFILE: 23,
      ENOBUFS: 105,
      ENODATA: 61,
      ENODEV: 19,
      ENOENT: 2,
      ENOEXEC: 8,
      ENOLCK: 37,
      ENOLINK: 67,
      ENOMEM: 12,
      ENOMSG: 42,
      ENOPROTOOPT: 92,
      ENOSPC: 28,
      ENOSR: 63,
      ENOSTR: 60,
      ENOSYS: 38,
      ENOTCONN: 107,
      ENOTDIR: 20,
      ENOTEMPTY: 39,
      ENOTSOCK: 88,
      ENOTSUP: 95,
      ENOTTY: 25,
      ENXIO: 6,
      EOPNOTSUPP: 95,
      EOVERFLOW: 75,
      EPERM: 1,
      EPIPE: 32,
      EPROTO: 71,
      EPROTONOSUPPORT: 93,
      EPROTOTYPE: 91,
      ERANGE: 34,
      EROFS: 30,
      ESPIPE: 29,
      ESRCH: 3,
      ESTALE: 116,
      ETIME: 62,
      ETIMEDOUT: 110,
      ETXTBSY: 26,
      EWOULDBLOCK: 11,
      EXDEV: 18
    },
    signals: [Object: null prototype] {
      SIGHUP: 1,
      SIGINT: 2,
      SIGQUIT: 3,
      SIGILL: 4,
      SIGTRAP: 5,
      SIGABRT: 6,
      SIGIOT: 6,
      SIGBUS: 7,
      SIGFPE: 8,
      SIGKILL: 9,
      SIGUSR1: 10,
      SIGSEGV: 11,
      SIGUSR2: 12,
      SIGPIPE: 13,
      SIGALRM: 14,
      SIGTERM: 15,
      SIGCHLD: 17,
      SIGSTKFLT: 16,
      SIGCONT: 18,
      SIGSTOP: 19,
      SIGTSTP: 20,
      SIGTTIN: 21,
      SIGTTOU: 22,
      SIGURG: 23,
      SIGXCPU: 24,
      SIGXFSZ: 25,
      SIGVTALRM: 26,
      SIGPROF: 27,
      SIGWINCH: 28,
      SIGIO: 29,
      SIGPOLL: 29,
      SIGPWR: 30,
      SIGSYS: 31
    },
    priority: [Object: null prototype] {
      PRIORITY_LOW: 19,
      PRIORITY_BELOW_NORMAL: 10,
      PRIORITY_NORMAL: 0,
      PRIORITY_ABOVE_NORMAL: -7,
      PRIORITY_HIGH: -14,
      PRIORITY_HIGHEST: -20
    }
  },
  EOL: '\n'
}
*/
// console.log(os.platform(), os.homedir());
//outputs linux /home/rohi when run in wsl terminal

//this method is asynchronous(non-blocking)
const fs = require('fs'); //fs stands for file system

//reading files
//it takes some time to read files and do stuff. In the meanwhile,
//javascript executes the remaining lines of code
// fs.readFile('./Text/Hello.txt', (err, data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());

// })

// console.log(`last line`);


//the writefile takes three arguments:
//The relative path to the file with respect to the current directory
//The stuff we want to write
//A callback function


// fs.writeFile('./Text/Hello.txt', "Hello, world!", ()=>{
//   console.log(`file was written`);
// })

// //If we specify a file that doesn't exist, the method will create that file
// fs.writeFile('./Text/Hello2.txt', "Hello, Rohi!", ()=>{
//   console.log(`file was written in Hello2`);
// })


//directories

//create or remove a directory in the current working directory
//Again this is an asynchronous method,and we want a callback function
//to fire when it gets its work done.

//before we proceed to create/remove a directory, we make sure it doesn't/does already
//exist with the help of existsSync function which is blocking(synchronous)
//function.Although the function is synchronous, it is pretty quick.

// if(!fs.existsSync('./assets')){
//   fs.mkdir('./assets', (err)=>{
//     if(err){
//       console.log(err);
//     }
//     console.log("directory created");
//     });
// }
// else {
//   fs.rmdir('./assets', (err)=>{
//     if(err){
//       console.log(err);
//     }
//     else{
//       console.log('folder deleted');
//     }

//   })
// }

/* If we again try to execute the mkdir fucntion , it throws
an error object to the console */


//deleting files
if(fs.existsSync('./Text/deleteme.txt')){
  fs.unlink('./Text/deleteme.txt', (err)=>{
    if(err){
      console.log(err)
    }
    console.log('file deleted');
  })
}
