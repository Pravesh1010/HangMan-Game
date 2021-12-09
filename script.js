var div = document.createElement('div');
div.setAttribute('class', 'getWord');
var button = document.createElement("button");
button.innerText = 'Play';
button.setAttribute("class", "btn btn-dark");
button.onclick = function(){generateWord()};
document.body.appendChild(div);
div.appendChild(button);
const words = ["CHENNAI", "NEWYORK", "LOSVEGAS", "BANGALORE", "MUMBAI", "TEXAS", "SEATTLE", "DAYTON", "DELHI"];
var guess = words[Math.floor(Math.random() * words.length)];
function generateWord(){

        // const words = ["CHENNAI", "NEWYORK", "LOSVEGAS", "BANGALORE", "MUMBAI", "TEXAS", "SEATTLE", "DAYTON", "DELHI"];
        // var guess = words[Math.floor(Math.random() * words.length)];
        document.getElementById("guess").innerText = "HINT:CITY NAME";
        var myDiv = document.createElement('div');
        document.body.appendChild(myDiv);
        myDiv.setAttribute('id', 'flex-container');
        for(var i=0; i<guess.length; i++){
                var flexDiv = document.createElement('div');
                flexDiv.setAttribute('id', i);
                myDiv.append(flexDiv);
        }
        console.log(guess);
        // for(var i=0; i<guess.length; i++){
        //         var h3 = document.createElement('h3');
        //         var a = document.getElementById("discription");
        //         a.appendChild(h3);
        //         //h3.innerText = letter;
        // }
        //console.log(guess);
}
var chances = 6;
function yourClick(myChoice){
        if(myChoice.innerText == guess[0]){
                document.getElementById("0").innerHTML = guess[0];
        }
        if(myChoice.innerText == guess[1]){
                document.getElementById("1").innerHTML = guess[1];
        }
        if(myChoice.innerText == guess[2]){
                document.getElementById("2").innerHTML = guess[2];
        }
        if(myChoice.innerText == guess[3]){
                document.getElementById("3").innerHTML = guess[3];
        }
        if(myChoice.innerText == guess[4]){
                document.getElementById("4").innerHTML = guess[4];
        }
        if(myChoice.innerText == guess[5]){
                document.getElementById("5").innerHTML = guess[5];
        }
        if(myChoice.innerText == guess[6]){
                document.getElementById("6").innerHTML = guess[6];
        }
        if(myChoice.innerText == guess[7]){
                document.getElementById("7").innerHTML = guess[7];
        }
        if(myChoice.innerText == guess[8]){
                document.getElementById("8").innerHTML = guess[8];
        }
        // console.log(myChoice.innerText);
        

}

