// 1. Spread 연산자
// -> Spread : 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3]
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let arr2 = [4, ...arr1, 5, 6]

let obj1 = {
  a: 1,
  b: 2,
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function funcA(p1, p2, p3) {
  // console.log(p1, p2, p3)
}

funcA(...arr1)

// 2. Rest 매개변수
// -> Rest는 나머지 , 나머지 매개변수
// rest 매개변수는 항상 맨 마지막에!

// 이러면 1은 one 저장 되었고, 나머지는 rest에다가!
function funcB(one, ...rest) {
  console.log(rest)
}

funcB(...arr1)
