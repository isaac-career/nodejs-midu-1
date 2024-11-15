// .js por default utiliza CommonJS (cjs)
// .mjs para utilizar ES Modules
// .cjs para utilizar CommonJS


import {sum} from './sum.mjs'
import {sub} from './sum.mjs'



console.log(sum(1, 3))
console.log('resta = ' + sub(4,1))