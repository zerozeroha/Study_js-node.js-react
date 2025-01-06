// 6가지의 요소 조작 메서드

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3]
arr1.push(4)
// console.log(arr1)

arr1.push(4, 5, 6, 7)
// console.log(arr1)

const newLength = arr1.push(4, 5, 6, 7)
// console.log(newLength)
// console.log(arr1)

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고, 반환
let arr2 = [1, 2, 3]
const poppedItem = arr2.pop()
// console.log(poppedItem)
// console.log(arr2)

// 3. shift
// 배열의 맨 앞에 있는 요소를 제거, 반환
let arr3 = [1, 2, 3]
// arr3.shift()

const shiftedItem = arr3.shift()
// console.log(shiftedItem)
// console.log(arr3)

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [1, 2, 3]
// arr4.unshift(0)
// console.log(arr4)

const newLength2 = arr4.unshift(0)
console.log(newLength2, arr4)

// 5. slice
// 마치 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 반환
// slice(시작인덱스, 끝인덱스+1)
let arr5 = [1, 2, 3, 4, 5]
let sliced = arr5.slice(2, 5)
// console.log(sliced)
// console.log(arr5)
// 원본 배열은 안 바뀜

let sliced2 = arr5.slice(2)
// 끝까지 자를 거면 끝배열 생략가능
// console.log(sliced2)

let sliced3 = arr5.slice(-3)
// 뒤에서부터 3개 잘라라
// console.log(sliced3)

// 6. concat
// 두개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환
let arr6 = [1, 2, 5]
let arr7 = [3, 4]

let concatedArr = arr6.concat(arr7)
// console.log(concatedArr)
