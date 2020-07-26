const questionNumber = document.querySelector('.question-number')
const questionText = document.querySelector('.question-text')
const questionOption = document.querySelector('.question-option')
let questionCounter =0;
let currentQuestion;
let availableQuestion = [];

function setAvailableQuestion (){
    const totalQuesions = questions.length;
    for( let i=0 ; i< totalQuesions ; i++){
        availableQuestion.push(questions[i]);
    }
    
}
function getResult (optionElement){
    if(optionElement.id == currentQuestion.answer){
        optionElement.classList.add('success')
    }
    else{
        optionElement.classList.add('error')
    }
}
function getNewQuestion () {
    questionNumber.innerHTML = 'Question  ' + (questionCounter +1) + '  of  ' + questions.length;
    currentQuestion = questions[questionCounter]
    questionText.innerHTML = currentQuestion.q
    const optionLength = currentQuestion.options.length
    questionOption.innerHTML =''
    let animationDelay =0.2
    for(let i=0 ; i< optionLength ; i++){
        const option = document.createElement('div');
        option.id = i
        option.innerHTML = questions[questionCounter].options[i]
        option.className ='option'
        option.style.animationDelay = animationDelay + 's';
        animationDelay +=0.2
        option.setAttribute('onclick',"getResult(this)")
        questionOption.appendChild(option)
    }
    questionCounter++;
}
function nextQuestion () {
    if(currentQuestion === questions.length){
        console.log("Game over");
    }
    else{
        getNewQuestion();
    }
    
}
window.onload = () =>{
    setAvailableQuestion()
    getNewQuestion()
}

