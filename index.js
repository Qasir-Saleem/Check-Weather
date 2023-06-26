
  let webObl = {
    baseurl: "https://api.openweathermap.org/data/2.5/weather?q",
    api: "c709b423693b8b3eda6bb620ef68d21d"


  }
  inp.addEventListener("keypress", (e) => {

    if (e.keyCode == 13) {

      weather(e.target.value)
    }

  });
  function weather(city) {



    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c709b423693b8b3eda6bb620ef68d21d`).then((res) =>{ return res.json()}).then((data) => {

    }).then(rendertoday)
  }
  const watherobj=
{
  
  api: "9cb06fcb403664702bb75f2f86c4beb5",
  baseUrl :"https://api.openweathermap.org/data/2.5/weather?q"
}

var advkey  = document.getElementById('advkey')
advkey.addEventListener ("keypress", (e)=>{
  if(e.keyCode ==13)
  {
      weather(e.target.value)
  }  
});
function weather(city){
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9cb06fcb403664702bb75f2f86c4beb5`).then((res) =>{
       return res.json()
      }).then(renderToDisp)



  }
function renderToDisp(resp){
console.log(resp)
document.getElementById('city_name').innerHTML = resp.name;
document.getElementById('coutnry-code').innerHTML = resp.sys.country;
var temp = resp.main.temp-273
var far = Math.floor(temp)
document.getElementById('tempp').innerHTML = `${far}&degC`;
document.getElementById('clear').innerHTML= resp.weather[0].main


}
