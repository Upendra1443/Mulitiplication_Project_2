const num1 = Math.ceil(Math.random()*20)
const num2 = Math.ceil(Math.random()*20)

const questionEl = document.getElementById('question');

const formEl = document.getElementById('form');

const inputEl = document.getElementById('input');
const scoreEl = document.getElementById('score')
let result = document.getElementById('result')


let score =JSON.parse(localStorage.getItem('score'));

if(!score){
    score = 0;
}

if(score >= 10){
    alert('Congratulation you are pass this test !')
    score = 0;
    result.innerText= 'Pass the test';
    result.style.color = 'green';
}

scoreEl.innerText =  `Score: ${score}`

questionEl.innerText =`What is ${num1} Multiply by ${num2}?`;

const currectAnswer = num1 * num2;

formEl.addEventListener('submit', () => {
    const userAns = +inputEl.value;
    // console.log(userAns, typeof userAns)
    if(userAns === currectAnswer){
        score++
        // console.log(score)
        updateLocalStorage()
    }else{
        score--
        // console.log(score)
        updateLocalStorage()
    }
})

function updateLocalStorage(){
    localStorage.setItem('score',JSON.stringify(score))
}
