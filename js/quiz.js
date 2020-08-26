

let questionArray = [
   "1. What is the height of mount everest ?",
   "2. Where does mount everest lies ?",
   "3. Who is the first lady to climb mount everest ?",
   "4. Which is the National animal of Nepal ?",
   "5. What is the largest country in the world?",
  
];

let choiceObject = {

   1 : [ 8829 +" .M" , 8767 +" .M" ,9878 +" .M", 8848 +" .M"],
   2 : ["NEPAL" , "INDIA", "CHINA", "BHUTAN"],
   3 : ["SITA" , "PASANG LHAMU SHERPA", "GITA","POOJA"],
   4 : ["RAT" , "DOG", "COW","GOAT"],
   5 : ["NEPAL" , "CANADA", "RUSSIA","CHINA"]
   
}


let correctAnswerList = [
                      8848 +" .M",
                      "NEPAL",
                     "PASANG LHAMU SHERPA",
                     "COW",
                     "RUSSIA"
]; 



let score = 0;
// let scoreText = document.getElementById('score');
var panelText = document.getElementById('correctText');
let questionCounter = 0;
let correctAnswerCounter = 0;
let question =  document.getElementById('questions');
let oldDate = new Date();
let odlMinute = oldDate.getMinutes();

function start(){
   question.innerHTML =   questionArray[0];
   for( let i = 0; i <= 3; i++ )
{
   document.getElementById('choice'+(i+1)).innerHTML =  choiceObject[1][i];
}
}
start();
var num = 61;
function timer (){
   let timerText = document.getElementById('timer');
   let circle = document.getElementById('circle');
    if(num <= 20)
    {
      circle.style.backgroundColor = "orange";
      if(num <=10 )
      {
         circle.style.backgroundColor = "red";
      }
    }
        num = num-1; 
      //   if(num <= 20)
      //   {

      //   }
  	if(num == 0)
  	{
       
      panel( "pink","red","block");
      
      clearInterval(time);
      displayScoreBoard("block","none","none","none","none");
      displayProgress();
  	}
  	timerText.innerHTML = num;
}
var time;
function runTimer(){
   num = 61;
   time = setInterval(timer,1000);
}
runTimer();





document.getElementById('nextQuestion').addEventListener('click',function(){
   if(questionCounter == questionArray.length-1){
      displayScoreBoard("block","none","none","none","none");
      displayProgress();
      
      // questionAlert();
      // document.getElementById('nextQuestion').disabled = true;
      // disableButton (true);
   }
   else {

         question.innerHTML =   questionArray[questionCounter+1];
      
      
      for( let i = 0; i<=3; i++)
      {
         document.getElementById('choice'+(i+1)).innerHTML =  choiceObject[questionCounter+2][i];
      }
     
      var panelBox = document.getElementById('panel').style.display = "none";
      questionCounter++;

   }
   
   setInterval(runTimer());
   
   disableNextButton("none");
   disableButton (false);
   // for( let i = 1; i<= 4; i++)
   // {
   //   document.getElementById('choice'+(i)).disabled = false;
   // }
  
});


function checkCorrectAnswer(value,ids){
   clearInterval(time);
   document.getElementById('scorePanel').style.display = "block";


       let que = question.innerHTML;
      //  console.log(que);
       let index = questionArray.indexOf(que);
      //  console.log(index);

       if(value ===  correctAnswerList[index]){
         alertRightText();
        
     

       }
       else {
         alertWrongText();
       }
       
       disableNextButton("block");
       disableButton (true);
      //  for( let i = 1; i<= 4; i++)
      //  {
      //    document.getElementById('choice'+(i)).disabled = true;
      //  }
      
      // console.log(value);
}



function alertRightText(){

    panelText.innerHTML = "The answer is correct..";
   // var panelBox = document.getElementById('panel');
   
   // panelBox.style.backgroundColor = "lightgreen";
   // panelBox.style.color = "green";
   // panelBox.style.display = "block";
    score = score + 10;
   // scoreText.innerHTML = score;
  panel( "lightgreen","green","block");
  correctAnswerCounter++;


}


function alertWrongText(){
    panelText.innerHTML = "The answer is incorrect..";
   // var panelBox = document.getElementById('panel');
   // panelBox.style.backgroundColor = "pink";
   // panelBox.style.color = "red";
   // panelBox.style.display = "block";
   score = score - 10;
   // scoreText.innerHTML = score;
   panel( "pink","red","block");
   correctAnswerCounter++;
}

function panel(color1,color2,displayBlock){
   var panelBox = document.getElementById('panel');
   panelBox.style.backgroundColor = color1;
   panelBox.style.color = color2;
   panelBox.style.display = displayBlock;
   // scoreText.innerHTML = score;

}

function questionAlert() {
   var panelText = document.getElementById('correctText').innerHTML = "The quiz is over";
   // var panelBox = document.getElementById('panel');
   // panelBox.style.backgroundColor = "pink";
   // panelBox.style.color = "red";
   // panelBox.style.display = "block";
   panel( "pink","red","block",score);

}


function disableButton (getBoolean)
{
   
   for( let i = 1; i<= 4; i++)
   {
     document.getElementById('choice'+(i)).disabled = getBoolean;
   }

}

function displayScoreBoard(block,none,none,none,none){
   let newDate = new Date();
   let newMinute = newDate.getMinutes();
   let timeDifference = newMinute-odlMinute;
   // console.log(timeDifference);
   document.getElementById('mainDiv').style.backgroundColor = "white";
   document.getElementById('scoreBoard').style.display = block;
   document.getElementById("scorePanel").style.display = none;
   document.getElementById("questionDiv").style.display = none;
   document.getElementById('circle').style.display = none;
   for ( let i = 1; i <= 4; i++){
      document.getElementById("choice"+(i)).style.display = none;
   }
   document.getElementById("getminutes").innerHTML = timeDifference;



   

}


function disableNextButton(nextQuestion){
   document.getElementById('nextQuestion').style.display = nextQuestion;
}


function displayProgress(){
   document.getElementById("totalQuestion").innerHTML = '( '+questionArray.length +" )";
   document.getElementById("solvedQuestion").innerHTML = "( "+correctAnswerCounter + " / "+ questionArray.length +" )";
   let finalScore = document.getElementById("finalScore");
   finalScore.innerHTML = "( "+score +" )";
}

document.getElementById("restartQuiz").addEventListener('click',function(){
   location.reload();
   // displayScoreBoard("none","block","block","block","block");
   // start();
});



























