// 날씨 버튼
let bakremoves = 0;
function removeBack(){
  if(bakremoves == 0){
	bakremoves = 1;
	document.querySelector('.winter').style.transition='1.5s';
	document.querySelector('#switchAll').disabled=true;
	$('#removbk').fadeOut('slow', function(){
	  document.querySelector('.winter').style.height='30px';
	  document.querySelector('.winter').style.width='75px';
	  document.querySelector('.wrapper').style.transition='1.5s';
	  document.querySelector('.wrapper').style.margin= '-1px 0px 0px 6.5px';
	  setTimeout(function(){
		document.querySelector('#switchAll').disabled=false;
	  }, 1450);
	});
  }else if(bakremoves == 1) {
	bakremoves = 0;
	document.querySelector('.winter').style.transition='1.5s';
	document.querySelector('.winter').style.height='300px';
	document.querySelector('.winter').style.width='217px';
	document.querySelector('.wrapper').style.transition='1.5s';
	document.querySelector('.wrapper').style.margin='0 0 0 150px';
	document.querySelector('#switchAll').disabled=true;
	setTimeout(function() {
	  $('#removbk').fadeIn('slow');
	  document.querySelector('#switchAll').disabled=false;
	  document.querySelector('.winter').style.transition='0s';
	}, 1100);
  }
}
