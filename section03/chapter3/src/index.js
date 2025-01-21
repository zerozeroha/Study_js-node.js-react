// console.log('안녕 Node.js')

import mul, {
  add,
  sub,
} from './math.js'

// import mul from './math.js'

console.log(add(1, 2))
console.log(sub(1, 2))
console.log(mul(1, 2))

// eslint-disable-next-line import/order
import randomcolor from 'randomcolor'

const color = randomcolor()
console.log(color)
