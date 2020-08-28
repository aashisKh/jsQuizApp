
//Declaring the variables,arrays and objects...


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


let correctAnswerCounter = 0;
let wrongAnswerCounter = 0;
let score = 0;
// let scoreText = document.getElementById('score');
var panelText = document.getElementById('correctText');
let questionCounter = 0;
let solvedQuestionAnswerCounter = 0;
let question =  document.getElementById('questions');
let oldDate = new Date();
let odlMinute = oldDate.getMinutes();
var num = 61;


//End of Variable declarataion... 


// First Setup of document 
function start(){
   question.innerHTML =   questionArray[0];
   for( let i = 0; i <= 3; i++ )
{
   document.getElementById('choice'+(i+1)).innerHTML =  choiceObject[1][i];
}
}
start();

// End of document setup..

//Timer setup function

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
   document.getElementById('circle').style.backgroundColor = "green";
   time = setInterval(timer,1000);
}
runTimer();


// End of timer setup function ...

//function linking to new questions and choice..


document.getElementById('nextQuestion').addEventListener('click',function(){
   if(questionCounter == questionArray.length-1){
      displayScoreBoard("block","none","none","none","none");
      displayProgress();
      

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

  
});


 // End of function linking ...


//function to check if the choice is correct or not ...

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

}

// End of function...


//Execute this function if the choice is correct...


function alertRightText(){

    panelText.innerHTML = "The answer is correct..";

    score = score + 10;
   // scoreText.innerHTML = score;
  panel( "lightgreen","green","block");
  solvedQuestionAnswerCounter++;
  correctAnswerCounter++;


}

// End of function ..

// Execute this function if the choice is incorrect ...

function alertWrongText(){
    panelText.innerHTML = "The answer is incorrect..";

   score = score - 10;
   // scoreText.innerHTML = score;
   panel( "pink","red","block");
   solvedQuestionAnswerCounter++;
   wrongAnswerCounter++;
}

// End of function ..

// Function to display warning and success ..

function panel(color1,color2,displayBlock){
   var panelBox = document.getElementById('panel');
   panelBox.style.backgroundColor = color1;
   panelBox.style.color = color2;
   panelBox.style.display = displayBlock;
   // scoreText.innerHTML = score;

}

// End of the function ..

// Run function when the quiz is over ..

function questionAlert() {
   var panelText = document.getElementById('correctText').innerHTML = "The quiz is over";

   panel( "pink","red","block",score);

}

// End of the function ..

// Execute function when one choice button is clicked .. 

function disableButton (getBoolean)
{
   
   for( let i = 1; i<= 4; i++)
   {
     document.getElementById('choice'+(i)).disabled = getBoolean;
   }

}

// End of the function ..

// Execute funtion to display and hide the  elements to show score at last ..

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

// End of the function .. 

// Execute function when choice button is clicked ...


function disableNextButton(nextQuestion){
   document.getElementById('nextQuestion').style.display = nextQuestion;
}

// End of the function ..


// Execute function to show the progress ... 

function displayProgress(){
   document.getElementById("totalQuestion").innerHTML = '( '+questionArray.length +" )";
   document.getElementById("solvedQuestion").innerHTML = "( "+solvedQuestionAnswerCounter + " / "+ questionArray.length +" )";
   document.getElementById('correctAnswer').innerHTML = correctAnswerCounter;
   document.getElementById('wrongAnswer').innerHTML = wrongAnswerCounter;
   let finalScore = document.getElementById("finalScore");
   finalScore.innerHTML = "( "+score +" )";
   checkPercentage();

}

// End of the function .. 


// Execute the function when quiz restart button is clicked .. 

document.getElementById("restartQuiz").addEventListener('click',function(){
   location.reload();

});


// End of the function .. 


// Check the percentage 

function checkPercentage(){
   let showpercentage  = document.getElementById('showpercentage');
   let progress = document.getElementById('showProgress');
   let yourPercentage = document.getElementById('yourPercentage');
   let percentage = (correctAnswerCounter / questionArray.length) * 100;

   if(percentage < 40 ){
           progress.innerHTML = "Failed !! Study Hard..";
           yourPercentage.style.backgroundColor = "pink";
           yourPercentage.style.color = "red";
           showpercentage.innerHTML = "( " + percentage +"% )";
           showpercentage.style.color = "red";
           
   }
   else if (percentage > 40 && percentage < 80){
      progress.innerHTML = "Good !! Keep It Up";
      yourPercentage.style.backgroundColor = "blue";
      yourPercentage.style.color = "white";
      showpercentage.innerHTML = "( " + percentage +"% )";
      showpercentage.style.color = "white";
   }
   else  {
      progress.innerHTML = "Excellent ...";
      yourPercentage.style.backgroundColor = "lightgreen";
      yourPercentage.style.color = "green";
      showpercentage.innerHTML = "( " + percentage +"% )";
      showpercentage.style.color = "green";
   }
 

   
}


// End of the function ...





















