const questionNumber = document.querySelector('.question-number')
const questionText = document.querySelector('.question-text')
const questionOption = document.querySelector('.question-option')
const layoutQuestion = document.querySelector('.question')
const layoutEnd = document.querySelector('.end')
const layoutHome = document.querySelector('.home')
const btnPlay = document.querySelector('.btn-play')
let questionCounter =0;
let currentQuestion;
let availableQuestion = [];
const player = new Audio();
btnPlay.addEventListener('click' , () =>{
    layoutHome.classList.add('hide')
    layoutQuestion.classList.remove('hide')
    player.src ='/assest/img/loading.ogg'
    player.play()
})
function setAvailableQuestion (){
    const totalQuesions = questions.length;
    for( let i=0 ; i< totalQuesions ; i++){
        availableQuestion.push(questions[i]);
    }
    
}
function getResult (optionElement){
    if(optionElement.id == currentQuestion.answer){
        optionElement.classList.add('success')
        player.src ='/assest/img/success.ogg'
        player.play()
    }
    else{
        optionElement.classList.add('error')
        player.src ='/assest/img/error.ogg'
        player.play()
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
        option.className ='option wow animate__backInUp'
        option.style.animationDelay = animationDelay + 's';
        animationDelay +=0.2
        option.setAttribute('onclick',"getResult(this)")
        questionOption.appendChild(option)
    }
    questionCounter++;
}
function nextQuestion () {
    if(questionCounter === questions.length){
        layoutQuestion.classList.add('hide')
        layoutEnd.classList.add('visity')
        
    }
    else{
        player.src ='/assest/img/loading.ogg'
        player.play()
        getNewQuestion()
    }
    
}
window.onload = () =>{
    setAvailableQuestion()
    getNewQuestion()
}

