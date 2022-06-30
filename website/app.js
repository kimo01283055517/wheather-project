/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
let city = 'cario'
 


document.getElementById('generate').addEventListener('click',dofetch);

async function dofetch (e){
	//const API_KEY = "568306d6e80815c812d6986dd07143fa931b62bcf5ef9e94c2dbfcc17ff3c597";
	city = document.getElementById('zip').value ;
	const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=754d3bc83bcc2cd22d5f2fe15bfbe706`
	 

try{
 let response = await fetch(url)

  let data  = await  response.json();

    console.log(data);
	document.getElementById('date').innerText=newDate;
	document.getElementById('countryCode').innerText=data.main.feels_like;
	document.getElementById('lat').innerText=data.main.temp;
	document.getElementById('lng').innerText=data.main.temp_max;
	document.getElementById('placeName').innerText=data.main.temp_min;
	document.getElementById('PM25').innerText=data.coord.lat;
	document.getElementById('PM10').innerText=data.coord.lon;
	
}
catch(err){console.log('this is wrong ')}
}	
//http://api.openweathermap.org/data/2.5/weather?q=London&APPID=754d3bc83bcc2cd22d5f2fe15bfbe706