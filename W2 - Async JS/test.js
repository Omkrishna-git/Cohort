const fs = require("fs");

const contents = fs.readFileSync("a.txt", "utf-8");
console.log(contents);

const contents2 = fs.readFileSync("b.txt", "utf-8");
console.log(contents2);

console.log("HI");



// let ans = 0;
// for (let i = 1; i <= 1000000; i++) {
// 	ans = ans + i
// }
// console.log(ans);	


function read(err,data){
    console.log(data);
}

const contest = fs.readFile("a.txt","utf-8",read);
const contest2 = fs.readFile("b.txt","utf-8",read);
console.log("HI");