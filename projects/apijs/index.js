var city = "Bangalore"
$.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+ city +"&Units=Farenheit&appid=15a164f939d14b43ba047c83d2d818b6",
function(data){
    console.log(data);
    var icon = 
    "http://openweathermap.org/img/w/"+
     data.weather[0].icon + ".png"
    var temp = (data.main.temp)+" deg";
    var desc = data.weather[0].main;
    console.log(icon)
    $('.icon').attr("src",icon);
    $('.desc').append(desc);
    $('.temp').append(temp);


})

