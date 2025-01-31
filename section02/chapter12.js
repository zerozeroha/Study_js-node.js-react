// 12. 비동기 작업 처리하기 1. 콜백 함수

function task() {
  setTimeout(
    console.log('hello'), 3000
  )
}

// task()

function add(a, b, callback) {
  setTimeout(() => {
    const sum = a + b
    callback(sum)
  }, 3000)
}

// add(1, 2, (value) => {
//   console.log(value)
// })

// 음식을 주문하는 상황
function orderFood(callback) {
  setTimeout(() => {
    const food = "떡볶이"
    callback(food)
  }, 3000)
}

// orderFood 바깥에서도 이용하려면 ?
// 매개변수로 콜백함수를 받아서 이 함수를 setTimeout함수에서 호출하고,
// 비동기 작업의 결과값을 전달해주면 된다.

orderFood((food) => {
  console.log(food)
})

function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`
    callback(cooldownedFood)
  }, 2000)
}

function freezeFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`
    callback(freezedFood)
  }, 1500)
}

orderFood((food) => {
  console.log(food)

  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood)

    freezeFood(cooldownedFood, (freezedFood) => {
      console.log(freezedFood)
    })
  })
})
