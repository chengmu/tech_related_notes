var Writable = require('stream').Writable;
var ws = Writable({
  decodeStrings : false,
  encoding : 'utf8'
});
ws._write = function (chunk, enc, next) {
    console.log("Writable stream write");
    console.dir(chunk.toString());
    next();
};
ws._end =function() {
    console.log("Writable stream end");
}

process.stdin.pipe(ws);
