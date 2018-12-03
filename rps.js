const express = require('express');
const app = express();
const arrOptions = ['rock', 'paper', 'scissors']


app.get('/:choice', (req, res) => {
  let userChoice = req.params.choice;
  let ai = arrOptions[Math.floor(Math.random() * arrOptions.length)]
  let result;
  if(userChoice === ai){
    result = "Issa tie!"
  }else if(userChoice === "scissors" && ai === "paper"){
    result = "User wins!"
  }else if(userChoice === "scissors" && ai === "rock"){
    result = "Computer wins!"
  }else if(userChoice === "rock" && ai === "paper"){
    result = "Computer wins!"
  }else if(userChoice === "rock" && ai === "scissors"){
    result = "User wins!"
  }else if(userChoice === "paper" && ai === "rock"){
    result = "User wins!"
  }else if(userChoice === "paper" && ai === "scissors"){
    result = "Computer wins!"
  }

  res.send({user: userChoice, ai: ai, result: result})
})

app.listen(8000, () => {
  console.log("You are listening to port 8000")
})
