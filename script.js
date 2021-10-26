var request = new XMLHttpRequest();
request.open('GET','https://restcountries.com/v2/all', true);
request.send();
request.onload=function(){
    var data = JSON.parse(request.response);
    console.log(data);
    //all code return here
    for(i=0; i<data.length; i++){
        if (data[i].population < 100000){

    
        console.log(data[i]);
        }
    }
}

//step01 : create an XHR object
//request has to be in whole program

//step02: create a connection
//true:optional

//step03:send a request
//push for the api to send request
//step04:once data successfully received from server
//conversion from string to array of objects

