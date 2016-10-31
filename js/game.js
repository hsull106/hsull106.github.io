
gamelength=30;
	timerID=null
var playing=false;
	var numholes=6*10;
	var currentpos=-1;

		function play() {
	stoptimer();
if(playing) {
	stopgame();
	return;
	}
	playing=true;
clrholes(); //按鈕初始化
	totalhits=0;
	document.cpanel.score.value=totalhits;//分數初始化
display("Playing");//顯示游戲開始
	launch();
showtime(gamelength);//計算時間
}

	function stoptimer() {
	if(playing)
	clearTimeout(timerID);
}


	function clrholes() {
	for(var k=0;k<document.dmz.elements.length;k++)
document.dmz.elements[k].checked=false;
	}

		function display(msg) {
	document.cpanel.state.value=msg;
	}

//游戲開始
	function launch() {
	var launched=false;
	while(!launched) {
	mynum=random(); //賦值隨機編號的按鈕號碼
	if(mynum!=currentpos) {
	document.dmz.elements[mynum].checked=true;
	currentpos=mynum;//currentpos被賦值出現的按鈕編碼
	launched=true;
	      }
   }
}

//產生隨機數
	function random() {
	return(Math.floor(Math.random()*100%numholes));
	}


//時間計算
	function showtime(remtime) {
	document.cpanel.timeleft.value=remtime;
	if(playing) {
	if(remtime==0) {
stopgame();
	return;
	}
	else {
	temp=remtime-1;
	timerID=setTimeout("showtime(temp)",1000);
	      }
   }
	}

	//游戲終止顯示分數
	function stopgame() {
	stoptimer();
	playing=false;
	document.cpanel.timeleft.value=0;
	clrholes();
	display("Game Over");
	alert('Game Over.\nYour score is:  '+totalhits);
	}



	 //分數計算
	function hithead(id) {
	if(playing==false) {
	clrholes();
	display("Push Start to Play");
	return;
	}
	if(currentpos!=id) {//currentpos在launch中已經被賦值出現的按鈕編碼
	totalhits+=-1;
	document.cpanel.score.value=totalhits;
document.dmz.elements[id].checked=false;
	}
	else {
	totalhits+=1;
	document.cpanel.score.value=totalhits;
	launch();
	document.dmz.elements[id].checked=false;
   }
	}
 
