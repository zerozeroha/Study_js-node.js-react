// react란 ?

// Meta(facebook)이 개발한 오픈소스 Javascript 라이브러리
// 대규모 웹 서비스의 UI를 더 편하게 개발하기 위해 만들어진 기술

//  특징

// 1. 컴포넌트를 기반으로 UI를 표현한다.

// * 컴포넌트란 ?
// : 우리말로 "구성요소"라는 뜻
// - 화면을 구성하는 요소, UI를 구성하는 요소

// * 마크업(Mark Up):UI 구현이라고 생각하면 됨.

// 2. 화면 업데이트 구현이 쉽다.

// * 업데이트란 ?
// : 사용자의 행동(클릭, 드래그)에 따라 웹 페이지가 스스로 모습을 바꿔 상호작용하는 것.

// React.js에서는 화면 업데이트를 구현하기 쉽다.
// 왜냐? 선언형 프로그래밍이라서

// * 선언형 프로그래밍이란 ? - 목적만 깔끔하게 명시 , 코드가 깔끔함 ex) react
// : 과정은 생략하고 목적만 간결히 명시하는 방법
// ex) 마치 우리가 식당에서 주문하는 것과 유사함 : "토마토 파스타 하나 주세요."

// * 명령형 프로그래밍이란 ? (선언형 프로그래밍의 반대) - 모든 과정을 하나하나 설명, 코드가 길고 복잡함 ex) javascript
// : 목적을 이루기 위한 모든 일련의 과정을 하나하나 다 설명하는 방식
// ex) 마치 진상(?)인 손님처럼 주문하는 방식 : "주방으로 가서 면을 100g 꺼내세요. 그리고 뜨거운 물에다가 넣고~ 토마토 소스를 넣고~ 저에게 가져와 주세요."

// (컴포넌트 안에 있는)state 변수의 값에 따라 렌더링 결과가 달라짐 (설정에 따라 컴포넌트 안의 state 값만 바꿔서 렌더링)

// * 렌더링(Rendering) : UI요소를 화면에 그려내는 것을 말함.

// 결론 : 선언형 프로그래밍 - 업데이트를 위한 복잡한 동작을 직접 정의할 필요 없이
//       특정 변수의 값을 바꾸는 것 만으로도 화면을 업데이트 시킬 수 있다.

// 3. 화면 업데이트가 빠르게 처리된다.

// react : 화면 업데이트를 쉽게 구현할 수 있으면서 동시에 빠르게도 처리해 줌... 어떻게 ?

// 브라우저의 렌더링 과정 (Critical Rendering Path)

// HTML -> DOM(:요소들의 위치, 배치, 모양에관한 모든 정보)

// javascript   RENDER TREE(:웹 페이지의 청사진) -> LAYOUT(:요소들의 배치를 잡는 작업) -> PAINTING(:실제로 화면에 그려내는 과정)
// (|->DOM을 수정 : DOM이 수정되면 업데이트가 일어남.)   <Reflow>:layout 다시 진행          <Repainting>:painting 다시 진행

// CSS -> CSSOM(:요소들의 스타일과 관련된 모든 정보)

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function onClick() {
  const $ul = document.getElementById('ul')
  for (let i = 0; i < 3000; i++) {
    $ul.innerHTML += `<li>${i}</li>`
  }
}

// 3000번 dom을 수정 (과도한 수정 -> 성능악화)

function onClick() {
  const $ul = document.getElementById('ul')
  let list = ''

  for (let i = 0; i < 3000; i++) {
    list += `<li>${i}</li>`
  }

  $ul.innerHTML = list
}

// dom은 딱 한번만 수정함. (성능 좋아짐)

// 다양한 업데이트 -> 동시에 발생한 업데이트를 모음 -> 다 모였다면 한 번에 수정 -> DOM
// 서비스의 규모가 커질수록 점점 힘들어짐.
// react는 이 과정을 자동으로 해줌 (feat. Virtual DOM)

// Virtual DOM이란 ?
// : DOM을 자바스크립트 객체로 흉내낸 것으로 일종의 복제판이라고 생각하면 된다.
// - react는 업데이트가 발생하면 실제 DOM을 수정하기 전에 이 가상의 복제판 DOM에 먼저 반영해본다.
// - 연습 스윙 같은 느낌.(Actual DOM -> Virtual DOM)
