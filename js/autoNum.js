//자동 생성 버튼
const autoBtn = document.querySelector('.auto-num-make')
//자동 생성 된 숫자가 들어가는 field
const autoBtnTextField = document.querySelector('.auto-text-field')
//자동 추첨 버튼 
const autoNumBtn = document.querySelector('.auto-result-btn')


// 랜덤 문자 배열 생성하기
function makeRandomNumber(){
    let randomNumber = [];

    for(let i = 0; i<6; i++){
        let r = String(Math.floor(Math.random()*44+1));
        randomNumber[i] = r;
    }
    let numbers = new Set(randomNumber)
    //중복 된 값이 있을 시 다시 추첨.
    if (randomNumber.length != numbers.size){
        randomNumber = makeRandomNumber()
    }
    return randomNumber;
}

// 자동 생성 버튼 눌렸을 시 랜덤 문자 생성하기.
autoBtn.addEventListener('click',()=>{
    console.log('autoBtn Clicked');
    randomNum = makeRandomNumber();
    
    autoBtnTextField.innerHTML =  randomNum;
})

// 자동 추첨 버튼 눌렀을 시 form태그 동적으로 만들어 post로 제출하기. 
autoNumBtn.addEventListener('click',()=>{
    // 자동 생성 문자열 담는 배열 autoNumList.
    const autoNumList = [];
    const randomNumberArray = autoBtnTextField.innerHTML;
    const randomNumbersSplit = randomNumberArray.split(',');
    console.log(randomNumbersSplit)
    for (let i of randomNumbersSplit){
        autoNumList.push(parseInt(i));
    }
    console.log(typeof(autoNumList))
    // create element (form) 
    let newForm = document.createElement('form');
    // set attribute (form) 
    newForm.name = 'randomNumbers'; 
    newForm.method = 'post'; 
    newForm.action = '/lotto'; 
    // target 속성은 폼 데이터(form data)를 서버로 제출한 후 받는 응답이 열릴 위치를 명시.
    // 서버로부터 받은 응답을 새로운 탭에서 보여줌.
    newForm.target = '_blank'; 
    //create element (input)
    let input1 = document.createElement('input');
    
    // set attribute (input) 
    input1.setAttribute("type", "hidden"); 
    input1.setAttribute("name", "autoNum"); 
    // 백에 전송할 value 를 autoNumList로. 
    input1.setAttribute("value", autoNumList); 
     // append input (to form) 
    newForm.appendChild(input1); 
    // append form (to body) 
    document.body.appendChild(newForm); 

    // submit form 
    newForm.submit();
    window.location.href = 'showRank.html';
})