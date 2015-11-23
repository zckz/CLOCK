(function(){
	var updateHour = function(){
		
		var date = new Date(),
			hours = date.getHours(),
			ampm,
			minutes = date.getMinutes(),
			seconds = date.getSeconds(),
			dayWeek = date.getDay(),
			day = date.getDate(),
			month = date.getMonth(),
			year = date.getFullYear();

		
		var pHours = document.getElementById('hours'),
			pAMPM = document.getElementById('ampm'),
			pMinutes = document.getElementById('minutes'),
			pSeconds = document.getElementById('seconds'),
			pDayWeek = document.getElementById('dayWeek'),
			pDay = document.getElementById('day'),
			pMonth = document.getElementById('month'),
			pYear = document.getElementById('year');

		
		
		var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		pDayWeek.textContent = week[dayWeek];

		
		pDay.textContent = day;

		
		var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
		pMonth.textContent = months[month];
		pYear.textContent = year;

		

		if (hours >= 12) {
			hours = hours - 12;
			ampm = 'PM';
		} else {
			ampm = 'AM';
		}

		
		if (hours == 0 ){
			hours = 12;
		}

		
		pHours.textContent = hours;
		pAMPM.textContent = ampm;

		if (minutes < 10){ 
			minutes= "0" + minutes; 
		}
		if (seconds < 10){ 
			seconds = "0" + seconds; 
		}

		pMinutes.textContent = minutes;
		pSeconds.textContent = seconds;
	};

	updateHour();
	var interval = setInterval(updateHour, 1000);
}())