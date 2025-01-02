// chapter05 : 원시 타입 vs 객체 타입

// 객체 타입 주의 사항 1. 의도치 않게 수정될 수 있다.

// 원시타입 : Number, Boolean 등...
// 값 자체로써 변수에 저장되고 복사된다.
// -> 불변값이다. (메모리 값 수정 x)

// 객체 타입 : Object, Array, Function 등...
// 참조값을 통해 변수에 저장되고 복사된다.
// -> 가변값이다. (메모리 값 수정 o)

// 얕은 복사 : 객체의 참조값을 복사함. - 원본 객체가 수정될 수 있어 위험함.
let o1 = {
  name: '하영잉',
}
let o2 = o1

// 깊은 복사 : 새로운 객체를 생성하면서 프로퍼티만 따로 복사함. - 원본 객체가 수정될 일이 없어서 안전함.
let o3 = {
  name: '하영',
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let o4 = {
  ...o3,
}

// 객체 타입 주의 사항 2. 객체간의 비교는 기본적으로 참조값을 기준으로 이루어진다.

// 얕은 비교
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
o1 === o2
// 참조값을 기준으로 비교

// 깊은 비교
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
JSON.stringify(o1) === JSON.stringify(o2)
// 객체를 문자열로 변환하여 비교
// JSON.stringify 등의 내장 함수를 이용해야 함.
// JSON.stringify() : 자바스크립트 내장 함수 객체를 문자열로 변환하는 기능

// 객체 타입 주의 사항 3. 배열과 함수도 사실 객체이다.
// 추가적인 프로퍼티나 메서드를 가질 수 있다.

// 객체 (object) -> 추가된 기능 : 호출, 선언 ... -> 함수(Function)
// 객체 (object) -> 추가된 기능 : 순차 저장, 순회 ... -> 배열(Array)

// chapter 06. 반복문으로 배열과 객체 순회하기

// 1. 배열 순회
let arr = [1, 2, 3]

// 1.1 배열 인덱스
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}

let arr2 = [4, 5, 6, 7, 8]
for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i])
}

// 1.2 for of 반복문 ( 배열에만 적용되는 반복문 )
for (let item of arr) {
  console.log(item)
}
// of 뒤에 있는 걸 of 앞에 있는 곳에 넣어줌.

// 2. 객체 순회
let person = {
  name: '이정환',
  age: 27,
  hobby: '테니스',
}

// 2.1 Object.keys 사용
// -> 객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person)
console.log(keys)

for (let i = 0; i < keys.length; i++) {
  console.log(keys[i])
}

for (let key of keys) {
  console.log(key, person(key))
}
// . ( 점 두개로 이어진 건 여기서 발전시킨 코드라는 거 )
// .
for (let key of keys) {
  const value = person[key]
  console.log(key, value)
}

// 2.2 Object.values
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person)
console.log(values)

for (let value of values) {
  console.log(value)
}

// 2.3 for in ( 객체만을 위해 존재하는 반복문 )
for (let key in person) {
  const value = person[key]
  console.log(key, value)
}
