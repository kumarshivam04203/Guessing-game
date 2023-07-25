const max = prompt ("Enter the maximum number");

const random = Math.floor(Math.random() * max) +1;

let guess = prompt ("guess the number");

while(true){
    if(guess == "quit"){
        console.log("user quit");
        break;
    }
    if(guess == random){
        console.log("you are right! congrate!! random number was ", random);
        break;
    }else if(guess < random){
        guess = prompt("hint: ypur guess too small. Please try again");
    }else{
        guess = prompt("hint: your guess too large. Please try again ");
    }
}