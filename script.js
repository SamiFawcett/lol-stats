var RIOT_GAMES_API_KEY = 'RGAPI-3aabc279-e261-4730-9f42-5d6403e48757';
var userDataUrl = 'https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/';
var $summonerName;
var $userData;

function openStats(){
  //getting the value from the search bar textfield
  $summonerName = document.getElementById('summonerName').value;
  //Reset userdataurl if the user types another name into the search bar
  userDataUrl = 'https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/';
  userDataUrl += $summonerName+'?api_key='+RIOT_GAMES_API_KEY;
  

  $userData = $.get(userDataUrl, function(userData){
  	console.log(userData);
  	document.getElementById("summonerSearch").style.display = 'none';
  	$navItem = $("#nav-list");

  	$navItem.append("<li><button id='summary-bttn'>Summary</button></li>");
  	$navItem.append("<li><button id='champions-bttn'>Champions</button></li>");
  	$navItem.append("<li><button id='leagues-bttn'>Leagues</button></li>");
  	$navItem.append("<li><button id='runes-bttn'>Runes</button></li>");
  	$navItem.append("<li><button id='masteries-bttn'>Masteries</button></li>");
  });

  $userData.fail(function(){
  	
  		$("#summonerSearch").append("<div id='errorMessage'></div>")
  		$errorBox = $("#errorMessage");
  		$errorBox.append("<p id='message'>"+ $userData.responseText + "</p>");
  		setTimeout(function(){
  			$("head").append("<style> #message{ display:none }</style>");
  			//I reloaded the page because I couldn't get the text to reappear if another error was thrown
  			window.location.reload();
  		}, 1500); 	
  	
	});
}

