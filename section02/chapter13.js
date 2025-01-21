// 13. Promise 객체

// const {
//   error
// } = require("console")

// 대기 (Pending) : 아직 작업이 완료되지 않은 상태
// 대기 -> 성공 : 해결 (resolve)
// 성공 (Fullfilled) : 비동기 작업이 성공적으로 마무리 된 상태
// 대기 -> 실패 : 거부 (reject)
// 실패 (Rejected) : 비동기 작업이 실패한 상태

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("hi")
//     // resolve("hello")
//     reject("왜 실패햇는지 이유 쓰기")
//   }, 2000)
// })

// setTimeout(() => {
//   console.log(promise)
// }, 3000)

// console.log(promise)

function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수
    // executor

    setTimeout(() => {
      // console.log('hi')
      if (typeof num === 'number') {
        resolve(num + 10)
      } else {
        reject('num이 숫자가 아닙니다')
      }
    }, 2000)
  })

  return promise
}

// then 메서드 (promise의 비동기 작업이 성공했을 때)
// -> 그 후에

// promise의 chaining 기능
// promise
//   .then((value) => {
//     console.log(value)
//   }).catch((error) => {
//     console.log(error)
//   })

add10(0)
  .then((result) => {
    console.log(result)
    return add10(result)
  })
  .then((result) => {
    console.log(result)
    return add10(undefined)
  })
  .then((result) => {
    console.log(result)
  })
  .catch((error) => {
    console.log(error)
  })
