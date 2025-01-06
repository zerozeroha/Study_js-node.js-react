// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 배열의 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3]

// eslint-disable-next-line @typescript-eslint/no-unused-vars
arr1.forEach(function (item, idx, arr) {
  // console.log(idx, item * 2)
})

// 매개변수
// item : 현재 요소의 값.
// idx : 현재 반복 카운트.(배열 index)
// arr : 전체 배열의 값.

let doubledArr = []

arr1.forEach((item) => {
  doubledArr.push(item * 2)
})

// console.log(doubledArr)

// 탐색 관련 메서드
// 2. includes
// 배열에 특정 요소가 있는지 확인하는 그런 메서드
let arr2 = [1, 2, 3]
let isInclude = arr2.includes(10)

// console.log(isInclude) -> false (10은 없으니까)

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [2, 2, 2]
let index = arr3.indexOf(2)
// -> 0 (:2가 여러 개일 때 맨 앞에 인덱스 반환 )
// let index = arr3.indexOf(20)
// -> -1 (: 20은 배열에 없어서 )



// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족(콜백함수가 참을 반환)하는 그런
// 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1, 2, 3]
const findedIndex = arr4.findIndex(
  (item) => item === 999
)

console.log(findedIndex)

// console.log(index)

// let objectArr = [
//   { name: "이정환" },
//   { name: "홍길동" },
// ]

// indexOf : 얕은 비교 -> -1 (못찾음)
// 객체값들은 참조값 기준으로 비교가 이루어짐. 프로퍼티 기준으로 비교 안됨.

// console.log(
//   objectArr.indexOf({ name: "이정환" })
// );

// console.log(
//   objectArr.findIndex(
//     (item) => item.name === "이정환"
//   )
// );


// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환

let arr5 = [{
    name: '이정환',
  },
  {
    name: '홍길동',
  },
]

const finded = arr5.find(
  (item) => item.name === "이정환"
)

console.log(finded)
