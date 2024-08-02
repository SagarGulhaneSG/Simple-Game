let randomEl = document.getElementById("randomNo");
let user1 = document.getElementById("userOne");
let user2 = document.getElementById("userTwo");
let user3 = document.getElementById("userThree");
let text = document.getElementById("textWin")
let fpoints = document.getElementById("firstPoints");
let spoints = document.getElementById("secondPoints");
let tpoints = document.getElementById("thirdPoints");



let counter1 = 500; 
let counter2 = 500; 
let counter3 = 500; 


function check(){
    let a = Math.ceil(Math.random() * 10);
    let u1 = user1.value;
    let u2 = user2.value;
    let u3 = user3.value;

    randomEl.value = a;

    if(u1 == a){
        text.textContent = "1st Guess is correct";
        counter1 = counter1 + 100;
        fpoints.textContent = counter1 + " Rs";
    }
    else{
        counter1 = counter1 - 100;
        fpoints.textContent = counter1 + " Rs";
    }
    
    if(u2 == a){
        text.textContent = "2nd Guess is correct";
        counter2 = counter2 + 100;
        spoints.textContent = counter2 + " Rs";
        
    }
    else{
        counter2 = counter2 - 100;
        spoints.textContent = counter2 + " Rs";
    }

    if(u3 == a){
        text.textContent = "3rd Guess is correct";
        counter3 = counter3 + 100;
        tpoints.textContent = counter3 + " Rs";
    }
    else{
        counter3 = counter3 - 100;
        tpoints.textContent = counter3 + " Rs";
    }
}

function reset(){
    randomEl.value = "";
    user1.value = "";
    user2.value = "";
    user3.value = "";
    text.textContent = "";
    fpoints.textContent = 500 + " Rs";
    spoints.textContent = 500 + " Rs";
    tpoints.textContent = 500 + " Rs";
    
}
