
// 수동 입력 input 태그에 사용자가 입력 시 input 안의 value를 가져옴.
// 수동 숫자 입력 된 부분
const manualNum = document.querySelector('.manual-num');
//수동 추첨 버튼
const manualNumBtn = document.querySelector('.manual-result-btn');
const warningSixNum = document.querySelector('.warning-sixnum');

// 사용자가 수동추첨 눌렀을 때
manualNumBtn.addEventListener('click', ()=>{
  console.log('manualNum writed');
  // input으로 받아오면 newManualNum이 string 타입.
  let newManualNum = manualNum.value;
  let manualNumList = [];
  //공백을 기준으로 입력 받은 숫자를 구분하여 manualNumList에 넣기
  manualNumList = newManualNum.split(" ")
  for (var i = 0; i < manualNumList.length; i++) {
    manualNumList[i] = parseInt(manualNumList[i])
  }

  // 입력 받은 수동 숫자가 6자리 일 시 백에 form 태그 생성하여 전송.
  // 입력받은 값이 숫자가 아니거나, 6자리가 아니거나, 6자리 수 중  중복되는 값이 있을 시 경고 출력

  // 입력받은 배열의 요소 중 숫자로 변환되지 않은 값이 있으면 False 반환
  const isNumber = (item) => !(Number.isNaN(item))

  // 입력받은 배열의 요소 중 중복되는 값이 있다면 False 반환
  const isDiffer = manualNumList.length == new Set(manualNumList).size

  // 입력받은 숫자 중 1~45의 범위 밖의 숫자가 있을 경우 False 반환
  const isInRange = (item) => item >= 1 && item <= 45

  // 앞서 적은 조건을 모두 만족할 시 데이터 전송
  if ((manualNumList.length == 6) && (manualNumList.every(isNumber)) && isDiffer && manualNumList.every(isInRange)) {
    console.log(manualNumList)
    sendNumListToBack(manualNumList)
  }
  else {
    warningSixNum.innerText = '1 ~ 45 중 서로 다른 6개의 숫자를 입력 해 주세요 ! ';
  }


})

//동적으로 form태그 생성 후 백에 post로 보내기.
const sendNumListToBack = (numList)=>{

    // 동적으로 생성한 form 태그 : newForm
    let newForm = document.createElement('form');
    // set attribute (form)
    newForm.name = 'manualNumList';
    newForm.method = 'post';
    newForm.action = '/lotto';
    // target 속성은 폼 데이터(form data)를 서버로 제출한 후 받는 응답이 열릴 위치를 명시.
    //create element (input)
    let input1 = document.createElement('input');

    // set attribute (input)
    input1.setAttribute("type", "hidden");
    input1.setAttribute("name", "manualNum");
    //input 태그의 value를 수동으로 받아 온 숫자 list로 채움.
    input1.setAttribute("value", numList);
     // append input (to form)
    newForm.appendChild(input1);
    // append form (to body)
    document.body.appendChild(newForm);

    // submit form
    newForm.submit();
    window.location.href = 'showResult.html';
}
