// 10. Date 객체와 날짜

// 1. Date 객체를 생성하는 방법
let date1 = new Date() // 생성자
// console.log(date1)

let date2 = new Date(1997, 1, 7, 23, 59, 59)
// console.log(date2)

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"로 부터 몇 ms가 지났는지를 의미하는 숫자값
// UTC : 세계시간 시작 시간.
let ts1 = date1.getTime()
// getTime() : 시간 계산해서 보여주는 메서드
let date4 = new Date(ts1)
// console.log(ts1)
// console.log(date1, date4)

// 3. 시간 요소들을 추출하는 방법 ( 년, 월, 일, 시, 분, 초 )
let year = date1.getFullYear()
let month = date1.getMonth() + 1
let date = date1.getDate()

let hour = date1.getHours()
let minute = date1.getMinutes()
let seconds = date1.getSeconds()

// console.log(year, month, date, hour, minute, seconds)
// 1월 : 0, 2월 :1, 3월:2 ...그래서 월에는 1을 더해야 함.

// 4. 시간 수정하기
date1.setFullYear(2023)
date1.setMonth(2)
date1.setDate(30)
date1.setHours(23)
date1.setMinutes(59)
date1.setSeconds(59)

// console.log(date1)

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString()) // 문자열
console.log(date1.toLocaleString()) // 현지화된 문자열
