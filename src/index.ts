import {add} from './add'

let arr = process.argv.slice(2).map(x => parseInt(x))
let sum = 0
for(const x of arr){
  sum += x
}
console.log(sum)
console.log("wow")