	function weather1(){
    var APIkey = "19cbbf7dfcf9880e91117793b0cd204c";
	var req = new XMLHttpRequest();
	var city = document.getElementById('city').value;
	var country_code = document.getElementById('country_code1').value;
	req.open("GET", "http://api.openweathermap.org/data/2.5/weather?q="+city+","+country_code+"&appid="+APIkey, true);
	req.addEventListener('load', function(){
		if (req.status >= 200 && req.status < 400){
			var weather_file1 = JSON.parse(req.responseText)
			var temp = JSON.stringify(weather_file1.main.temp)
			temp_Celsius = temp - 273.15
			var weather = JSON.stringify(weather_file1.weather[0].description)
			var text1 = document.createElement('P');
			var text11 = document.createTextNode("In "+city+", the temperature is "+temp_Celsius+" Celsius and has "+weather+".")
			text1.appendChild(text11);
			document.getElementById('weather1').appendChild(text1)
		} else {
			console.log("Error:"+req.statusText);
		}})
		req.send(null);
		event.preventDefault();
	//console.log(JSON.parse(req.responseText))
	}

	function weather2(){
	var APIkey = "19cbbf7dfcf9880e91117793b0cd204c";
	var req = new XMLHttpRequest();
	var country_code = document.getElementById('country_code2').value;
	var zip = document.getElementById('zip').value;
	req.open("GET", "https://api.openweathermap.org/data/2.5/weather?zip="+zip+","+country_code+"&appid="+APIkey, true);
	req.addEventListener('load', function(){
		if (req.status >= 200 && req.status < 400){
			var weather_file2 = JSON.parse(req.responseText)
			var temp = JSON.stringify(weather_file2.main.temp)
			temp_Celsius = temp - 273.15
			var weather = JSON.stringify(weather_file2.weather[0].description)
			var text2 = document.createElement('P');
			var text22 = document.createTextNode("In "+zip+", the temperature is "+temp_Celsius+" Celsius and has "+weather+".")
			text2.appendChild(text22);
			document.getElementById('weather2').appendChild(text2)
		} else {
			console.log("Error:"+req.statusText);
		}})
		req.send(null);
		event.preventDefault();
	//console.log(JSON.parse(req.responseText));
	}

	function post(){
	var req = new XMLHttpRequest();
	var text_data = document.getElementById('post_input').value;
    req.open("POST", "http://httpbin.org/post", true);
    req.setRequestHeader('Content-Type', 'application/json');
    req.addEventListener('load', function()  {
    	if (req.status >= 200 && req.status < 400){
    		var returned_file = JSON.parse(req.responseText)
    		var returned_data = JSON.stringify(returned_file.data)
    		var text3 = document.createElement('P');
    		var text33 = document.createTextNode(returned_data)
    		text3.appendChild(text33);
    		document.getElementById('post_par').appendChild(text3)
    	} else {
    		console.log("Error:"+req.statusText);
    	}})
    	req.send(text_data);
    	event.preventDefault();
    }
    
    //console.log(JSON.parse(req.responseText));