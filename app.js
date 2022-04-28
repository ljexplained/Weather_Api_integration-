var button= document.querySelector('.btn1');
var inputValue= document.querySelector('.inputValue');
var desc= document.querySelector('.desc');
var name1= document.querySelector('.name');
var temp= document.querySelector('.temp');




button.addEventListener('click',function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+
'&appid=c88df918df629b12d9129651dfb2e5a6')
.then(response => response.json())
.then(data =>{

    console.log(data);
    var nameValue = data['name'];
    var tempValue = data['main']['temp'];
    var descValue = data['weather'][0]['description'];

    name1.innerHTML = nameValue;
    temp.innerHTML = tempValue;
    desc.innerHTML = descValue;

})




.catch(err => alert("wring city name!"))

})