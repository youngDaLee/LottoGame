
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
  
  // 입력 받은 수동 숫자가 6자리 일 시 백에 form 태그 생성하여 전송. 
  if (manualNumList.length == 6) {
    console.log(manualNumList)
    sendNumListToBack(manualNumList)
  }
  else{
    warningSixNum.innerText = '6자리 숫자를 입력 해 주세요 ! ';
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

