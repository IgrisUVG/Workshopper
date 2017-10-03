var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
var arr = str.split('\n');
var res = 0;
for (var i = 0; i < arr.length - 1; i++) {
    res++;
}
console.log(res);
