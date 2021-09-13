var readlineSync=require("readline-sync");
const chalk = require('chalk');
const error = chalk.bold.red;
const correct = chalk.bold.green;
const ask = chalk.yellow;
const bgGreen = chalk.bgGreen;
const bgYellow = chalk.bgYellow;

var score=0;
function play(question,answer,options,correctOption){
  var response=readlineSync.question(ask(question));
  var help=false;
  var chance=false;
  if(response===""){
    chance=true;
    help=readlineSync.keyInYN(chalk.blue("Need help? "));
  }
  if(help){
    index = readlineSync.keyInSelect(options, chalk.blue('Which option? '));
    if(index+1===0){
      score--;
      console.log(bgGreen("The correct answer is: "+answer));
    }
    else if((index+1)===correctOption){
      score++;
      console.log(correct("correct !!"))
    }else{
      score--;
      console.log(error("incorrect.."))
      console.log(bgGreen("The correct answer is: "+answer));
    }
  }else{

    if(chance)
      var response=readlineSync.question(chalk.bgRed("Please enter the answer: "));
  if(response.toLowerCase()===answer.toLowerCase()){
    score++;
    console.log(correct("correct !!"))
  }else{
      score--;
      if(response!=="")
        console.log(error("incorrect.."))
      console.log(bgGreen("The correct answer is: "+answer));
    }
  }
}


function askQuestions(questions){
  for(var i=0;i<questions.length;i++){
  play(`${i+1}. `+questions[i].question,questions[i].answer,questions[i] .options,questions[i].correctOption);
  }
}

var levevl_1_questions=[
  {
    question:"What is the name of the person who is making all these wonderful things happen? ",
    answer:"Tanay Pratap",
    options:['Raghunadh','Surya Pratap','Tanay Pratap','Hari priya'],
    correctOption:3
  },
  {
    question:"What is the camp started by Tanay pratap? ",
    answer:"neog",
    options:['neog','bootcamp','udemy camp','web dev camp'],
    correctOption:1
  },
  {
    question:"Where does he work? ",
    answer:"Microsoft",
    options:['Amazon','Microsoft','Google','Oracle'],
    correctOption:2
  },
  {
    question:"Is the camp DSA focused or Project focused? ",
    answer:"Project",
    options:['DSA','Project'],
    correctOption:2
  },
  {
    question:"What does he teach? ",
    answer:"Web development",
    options:["ML","AI","Web development","DSA"],
    correctOption:3
  }
];

var level_2_questions=[
  {
    question:"What is the extension for html files? ",
    answer:".html",
    options:['.html','.txt','.png','.js'],
    correctOption:1
  },
  {
    question:"What is the extension for css files? ",
    answer:".css",
    options:['.neog','.html','.js','.css'],
    correctOption:4
  },
  {
    question:"What is the extension for js files? ",
    answer:".js",
    options:['.js','.html','.css','.htm'],
    correctOption:1
  },
  {
    question:"Everyone must do ML and AI leaving web development.True/False? ",
    answer:"false",
    options:['true','false'],
    correctOption:1
  },
  {
    question:"Who is the father of web development? ",
    answer:"tanay pratap",
    options:["tanay pratap"],
    correctOption:1
  }
];

var highScores=[
  {
    name:"raghu",
    score:7
  },{
    name:"Hari priya",
    score:6
  }
]


console.log(bgYellow("Welcome to the bootcamp quiz show !!!"));

let name=readlineSync.question("Please enter your name:");
console.log(correct("Warm welcome "+name+"!"));


console.log(chalk.cyan("1. The game consists of 5 questions\n2. Notice that the case of the answer you type doesn't matter(lower case or upper case or mixed)\n3. For every correct answer you will get 1 point and -1 for the wrong answer\n4. Incase you need help, simply press enter without typing anything\n5. There are two levels in this game: Level-1 and Level-2\n6. Minimum score to pass each level is 3"));


var interest=readlineSync.keyInYN(chalk.magenta("Ready? "));




if(interest){
  console.log("===========================")
  console.log(chalk.magenta("*** Level-1 ***"));
  console.log("===========================")

  askQuestions(levevl_1_questions);

  console.log(chalk.blue("Your score in level-1: "+score+"/"+"5"));
  

  if(score>=3){
      console.log(chalk.blue("*** Congratulations, you made it to level 2 ***"));
    
      var interest=readlineSync.keyInYN(chalk.magenta("Ready? "));
      if(interest){
        console.log("===========================")
        console.log(chalk.magenta("*** Level-2 ***"));
        console.log("===========================")
        var score1=score;
        score=0;
        askQuestions(level_2_questions);
        if(score>=3){
          console.log(bgGreen("*** Congratulations you've successfully completed the game! ***"))
        }else{
          console.log(ask("You can perform well next time :-)"))
        }

        console.log(chalk.blue("Your score in level-2: "+score+"/"+"5"));
        var combinedScore=score+score1;
        console.log(correct("Your combined score:"+combinedScore))
        if(combinedScore===10){
          console.log("*************************")
          console.log(chalk.magenta("Flawless..."))  
          console.log("*************************")
        }else {
          var max=true;
          for(var i=0;i<highScores.length;i++){
            if(combinedScore<highScores.score){
              max=false;
            }
          }
          if(max){
            console.log("===========================")
            console.log(chalk.magenta("High scorer so far..."))
            console.log("===========================")
          }
        }
        console.log(ask("Thanks for playing it!! Hope you enjoyed :-)"))
      }else{
        console.log(chalk.bgRed("Exiting.."))
      }
  }

}else{
  console.log(chalk.bgRed("Exiting.."))
}


////////////////////////0909

