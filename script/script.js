
const actual = Math.floor((Math.random() * 100) + 1);
const submitted = document.querySelector("button");
let chancenum = 0;
let olddiff;
const guessstring = "You have so far guessed with: ";
const chancestring = "This is your ";
let bare = " ";
let yarbay = [];
for (i=0; i<=100; i++) {
    yarbay.push(".");
}
yarbay[0] =0;
yarbay[100] = 100;

 
function begin (){
document.getElementById("mainbody").innerHTML = `<h1>Lets Play a "Guess Sooner" Game</h1> <p>This game has random number generated for you to guess. Each time you make a guess clue section will indicate if your current guess is higher or lower from the number to be guessed. You have total ten chances to make the guess</p>
<p> Enter your guess value  </p>
    <input name="currentguess" type="number" id="inputid" />
    <input type="button" onclick="submit()" value="Submit form" />
<p> </p><h3 id="hthree">  </h3>      
    <b id="chancecount"> </b>              
<p id="stat"> </p>
<div id="bar"></div>
`;

document.getElementById("inputid").focus();
}


function submit () { 
    if (chancenum >= 10) {
        reset();
    }
    else {
    
    chancenum +=1;
    if (chancenum == 1) {
        chancewor = chancestring + "1 st chance";
        document.getElementById("hthree").innerHTML += guessstring;
    }
    else if (chancenum == 2) {
        chancewor = chancestring + "2 nd chance"
    }
    else if (chancenum == 3) {
        chancewor = chancestring + "3 rd chance"
    }
    else if (chancenum == 10) {
        chancewor =  "Sorry. But this was your FINAL chance. Game Over"
    }
    else {
        chancewor = chancestring + chancenum + " th chance"
    }
    document.getElementById("chancecount").innerHTML = chancewor;
    let inputValue = document.getElementById("inputid").value;


    if (inputValue === '') {
           return  alert("Please Enter some value first");
    }
    else {

        document.getElementById("hthree").innerHTML +=" " + inputValue;
        let guessdiff = inputValue - actual;

       
        if (guessdiff < 0) { document.querySelector("#stat").textContent = `Your Guess ${inputValue} is lower than value to be guessed`;
       barer(inputValue*(-(1)));
    }
        if (guessdiff > 0) {  document.querySelector("#stat").textContent = `Your Guess ${inputValue} is  Higher than value to be guessed`;
        barer(inputValue);
    }
         
        if (guessdiff == 0) {
             document.querySelector("#stat").textContent = "You made the right guess!";
             chancenum = 10;
             document.getElementById("chancecount").innerHTML = "";
             yarbay[Math.abs(inputValue)] = "$";
        document.querySelector("#bar").textContent = "[" + yarbay.join("") +"]";
            return  document.querySelector("#stat").style.color = "Green";
        }
        
      
    }
}

}


function reset (){
    location.reload( true );
}

function barer (value) {
   
    if (value < 0) {
       
        for ( i=0; i<= Math.abs(value); i++) {
           
            if (yarbay[i]== ".") {
                yarbay[i] = "|";
            }
     
        }
        yarbay[Math.abs(value)] = Math.abs(value);
        document.querySelector("#bar").textContent = "[" + yarbay.join("") +"]";
        
    }
    else if (value > 0) {
        
        
        for ( i= value; i<= 100; i++) {
            
            if (yarbay[i]== ".") {
                yarbay[i] = "|";
        }
    
    }
    yarbay[Math.abs(value)] = Math.abs(value);
        document.querySelector("#bar").textContent = "[" + yarbay.join("") +"]";
       
    }
}

