//escolha do usuario
var playerChoice = prompt("rock, paper or scissors?");


//escolha do computador
var randChoice  = function (){
    var rand = Math.floor(Math.random() * 9 + 1);
        if (rand <= 3){
            return ("rock");
            } else {
                if (rand <=6){
                    return ("paper");
                    } else {
                        return ("scissors");
                        }
                }
            
    };
var pcChoice = (randChoice());


//comparando e determinando vencedor
var compare = function (player, pc){
    if (player === pc){
        return ("even");
    }
        else {
        if (player === "rock"){
            if (pc === "paper"){
                return ("Pc Wins!");
                } else {
                    return ("Player wins");
                    }
            }
        if (player === "paper"){
            if (pc === "scissors"){
                return ("Pc Wins");
            
                } else {
                    return ("Player Wins!");
                    }
            }
        if (player === "scissors"){
            if (pc === "rock"){
            return ("Pc Wins");
            
            } else {
                 return ("Player Wins!");
            }
            }
        } 
    
      
    };
    

//mostrando resultados
console.log ("Usuario escolheu " + playerChoice);
console.log ("Computador escolheu " + pcChoice);
console.log (compare (playerChoice, pcChoice));