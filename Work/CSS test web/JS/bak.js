
let clientWidth = document.getElementById('EQBAR').clientWidth - 175;
console.log(document.getElementById('EQBAR').clientWidth - 175)
let NBR_OF_BARS = Math.floor(clientWidth / 21 );
console.log(NBR_OF_BARS)

// 오디오 요소 태그 가져오기
let audio = document.getElementById("AudioPlay_tyA");

const ctx = new AudioContext();

// 오디오 소스 생성
const audioSource = ctx.createMediaElementSource(audio);

// 오디오 분석기 생성
const analayzer = ctx.createAnalyser();

// 소스를 분석기에 연결한 다음 컨텍스트의 대상으로 되돌립니다.
audioSource.connect(analayzer);
audioSource.connect(ctx.destination);

// 분석 주파수 인쇄
const frequencyData = new Uint8Array(analayzer.frequencyBinCount);
analayzer.getByteFrequencyData(frequencyData);





let r = 255;
let g = 0;
let b = 0;

// rainbow color chage
function myTimer () {
	if (r < 255 && g == 0 && b == 0) {
    	r++
    } else if (r == 255 && g < 255 && b == 0) {
        g++
    } else if (r > 0 && g == 255 && b == 0) {
        r--
    } else if (r == 0 && g == 255 && b < 255) {
        b++
    } else if (r == 0 && g > 0 && b == 255) {
        g--
    } else if (r < 255 && g == 0 && b == 255) {
    	r++
    } else if (r == 255 && g== 0 && b > 0) {
        b--
    }
    document.body.style.backgroundColor = "rgb("+r+","+g+","+b+")";
}

// 무지개 배경 초기화
let interval = setInterval(myTimer, 70);
clearInterval(interval);

// 함수들 눌렸을때 인식
let Night_Day = 0;
let rain_bak = 0;
let bakremoves = 0;
let musicback = 0;

// 모든 배경 버튼
function removeBack(){
		if(bakremoves == 0){
		bakremoves = 1;
		document.querySelector('.backGrondBtn').style.transition='1.5s';
		document.querySelector('#switch').disabled=true; //다른 버튼 클릭 x
		document.querySelector('#switch2').disabled=true; //다른 버튼 클릭 x
		document.querySelector('#switchAll').disabled=true; //다른 버튼 클릭 x
		$('#removbk').fadeOut('slow', function(){
			document.querySelector('.backGrondBtn').style.height='40px';
			if(musicback == 1){
				document.querySelector('.backGrondBtn').style.width='110px';
			}
			setTimeout(function(){
			document.querySelector('#switch').disabled=false;
			document.querySelector('#switch2').disabled=false;
			document.querySelector('#switchAll').disabled=false;
			}, 1650);
		});
	}else if(bakremoves == 1) {
		bakremoves = 0;
		document.querySelector('#switch').disabled=true; //다른 버튼 클릭 x
		document.querySelector('#switch2').disabled=true; //다른 버튼 클릭 x
		document.querySelector('#switchAll').disabled=true; //다른 버튼 클릭 x
		document.querySelector('.backGrondBtn').style.transition='1.5s';
		document.querySelector('.backGrondBtn').style.height='145px';
		if(musicback == 1){
			document.querySelector('.backGrondBtn').style.width='150px';
		}
		setTimeout(function() {
			$('#removbk').fadeIn('slow');
		}, 1550);
		setTimeout(function() {
			document.querySelector('#switch').disabled=false;
			document.querySelector('#switch2').disabled=false;
			document.querySelector('#switchAll').disabled=false;
		}, 1750);
	}
}

// 버튼 1 다크모드
function NightDay() {
	let clientWidth2 = document.getElementById('EQBAR').clientWidth - 175;
	const BARS = Math.floor(clientWidth2 / 21);
	// rainbow 해제
	clearInterval(interval);
	document.getElementById("switch2").checked = false;
	// 조건문
	rain_bak = 0;		
	if (Night_Day == 0) {
		document.querySelector('#switch').disabled=true;
		document.querySelector('#switch2').disabled=true;
		document.querySelector('#switchAll').disabled=true;
		document.querySelector('body').style.transition='0.6s';
		$('.tun, .darkMode, .rianbowIkon, .musicIkon').fadeOut(450, function(){
			$('.tun').fadeIn(450);
			$('.lightMode').fadeIn(450);	
			$('.rianbowIkon').fadeIn(450);
			$('.musicIkon').fadeIn(450);
			document.querySelector('#switch').disabled=false;
			document.querySelector('#switch2').disabled=false;
			document.querySelector('#switchAll').disabled=false;
			document.querySelector('body').style.transition='0s';
			document.querySelector('body').style.color='white';
			for(let i = 0; i < BARS; i++){
				if(document.querySelector('#bar'+i)){
					document.querySelector('#bar'+i).style.background="white";
				}
			}
		});
		document.querySelector('body').style.backgroundColor='black'; 
		Night_Day = 1;

	}else{
		document.querySelector('body').style.transition='0.6s';
		document.querySelector('#switch').disabled=true; //다른 버튼 클릭 x
		document.querySelector('#switch2').disabled=true; //다른 버튼 클릭 x
		document.querySelector('#switchAll').disabled=true; //다른 버튼 클릭 x
		$('.tun, .lightMode, .rianbowIkon, .musicIkon').fadeOut(450, function(){
			$('.tun').fadeIn(450);
			$('.darkMode').fadeIn(450);	
			$('.rianbowIkon').fadeIn(450);
			$('.musicIkon').fadeIn(450);
			document.querySelector('#switch').disabled=false;
			document.querySelector('#switch2').disabled=false;
			document.querySelector('#switchAll').disabled=false;
			document.querySelector('body').style.transition='0s';
			document.querySelector('body').style.color='black';
			for(let i = 0; i < BARS; i++){
				if(document.querySelector('#bar'+i)){
					document.querySelector('#bar'+i).style.background="black";
				}
			}
		});
		document.querySelector('body').style.backgroundColor='white'; 
		Night_Day = 0; 
	}
}


// 버튼 2 rainbow배경 
function RainBak() {
	let clientWidth2 = document.getElementById('EQBAR').clientWidth - 175;
	const BARS = Math.floor(clientWidth2 / 21);
	document.querySelector('#switch').disabled=true; //다른 버튼 클릭 x
	document.querySelector('#switch2').disabled=true; //다른 버튼 클릭 x
	document.querySelector('#switchAll').disabled=true; //다른 버튼 클릭 x 
	// 아이콘 변경 및 색상 조정
	document.querySelector('body').style.transition='0.4s';
	document.getElementById("switch").checked = false;

	let para = document.querySelector('.darkMode');
	let compStyles = window.getComputedStyle(para);
    if(compStyles.getPropertyValue('display') === 'none'){
    	$('.tun, .lightMode, .rianbowIkon, .musicIkon').fadeOut(450, function(){
			$('.tun').fadeIn(450);
			$('.darkMode').fadeIn(450);	
			$('.rianbowIkon').fadeIn(450);
			$('.musicIkon').fadeIn(450);
			document.querySelector('body').style.transition='0s';
			document.querySelector('body').style.color='black';
		});
    }else{
    	document.querySelector('body').style.color='black';
    }
	
	// 조건문
	Night_Day = 0;
	if (rain_bak == 0) {
		interval;
		rain_bak = 1;
		interval = setInterval(myTimer, 20);
		document.querySelector('#switch').disabled=false;
		document.querySelector('#switch2').disabled=false;
		document.querySelector('#switchAll').disabled=false;
		for(let i = 0; i < BARS; i++){
			if(document.querySelector('#bar'+i)){
				document.querySelector('#bar'+i).style.background="white";
			}
		}
	}else{
		clearInterval(interval);
		rain_bak = 0;
		document.querySelector('body').style.backgroundColor='white';
		document.querySelector('#switch').disabled=false;
		document.querySelector('#switch2').disabled=false;
		document.querySelector('#switchAll').disabled=false;
		for(let i = 0; i < BARS; i++){
			if(document.querySelector('#bar'+i)){
				document.querySelector('#bar'+i).style.background="black";
			}
		}
	}
}


const AudioPlayA = document.getElementById("AudioPlay_tyA");

function musicPlSt(){
	if(musicback == 0){
		document.querySelector('#switch').disabled=true; //다른 버튼 클릭 x
		document.querySelector('#switch2').disabled=true; //다른 버튼 클릭 x
		document.querySelector('#switch3').disabled=true; //다른 버튼 클릭 x
		document.querySelector('#switchAll').disabled=true; //다른 버튼 클릭 x

		// 오디오 객체 불러오기 및 EQ 설정
		AudioPlayA.currentTime = 0;
		AudioPlayA.play();
		AudioPlayA.onended = function() {
			AudioPlayA.play();
		};
		document.getElementById("EQBAR").style.transition="1.5s";
		document.getElementById("EQBAR").style.opacity=1;
		clientWidth2 = document.getElementById('EQBAR').clientWidth;
		
		document.querySelector('.backGrondBtn').style.transition='1s';
		document.querySelector('.backGrondBtn').style.width='150px';
		setTimeout(function(){
			$('#ex-in').fadeIn();
			document.querySelector('#switch').disabled=false;
			document.querySelector('#switch2').disabled=false;
			document.querySelector('#switch3').disabled=false;
			document.querySelector('#switchAll').disabled=false;
		}, 1000);
		let audiovooumd = document.getElementById("ex-in");
		let audiovooumdval = document.getElementById("ex-in").value;
		let vloumeplus = 0;
		vloumeplus = audiovooumdval / 100;
		AudioPlayA.volume = vloumeplus;
		
		audiovooumd.addEventListener('input', e=>{
			vloumeplus = audiovooumdval / 100;
			audiovooumdval = document.getElementById("ex-in").value;
			AudioPlayA.volume = vloumeplus;
		})
		

		// EQ바 작업
		// 시각화 도우미 컨테이너 가져오기
		const visualizerContainer = document.querySelector(".visualizer-container");

		// 미리 정의된 바 세트 생성
		// 만약 미리 생성되어 있다면 건너뜀
		if (!document.querySelector('.visualizer-container__bar')) {
			for( let i = 0; i < NBR_OF_BARS; i++ ) {

				const bar = document.createElement("DIV");
				bar.setAttribute("id", "bar" + i);
				bar.setAttribute("class", "visualizer-container__bar");
				visualizerContainer.appendChild(bar);
				if(rain_bak == 1 || Night_Day == 1){
					document.querySelector('#bar'+i).style.background="white";
				}else{
					document.querySelector('#bar'+i).style.background="black";
				}

			}
		}
		
		// 이 함수는 빈도 데이터에 따라 막대 높이를 조정하는 작업이 있습니다.
		function renderFrame() { 

			// 최신 빈도 데이터로 빈도 데이터 배열을 업데이트합니다.
			analayzer.getByteFrequencyData(frequencyData);

			for( let i = 0; i < NBR_OF_BARS; i++ ) {
				if (window.onresize == true){
					let EQVER = document.querySelector('.visualizer-container__bar');
					EQVER.style.height = 0;
				}
				// 빈도 데이터 배열의 길이가 1024이므로 가져오지 않습니다.
				// 값의 첫 번째 NBR_OF_BARS이지만 전체 스펙트럼에서 주파수를 잡으려고 시도합니다.
				const index = (i + 10) * 2;
				// fd는 0에서 255 사이의 주파수 값입니다.
				const fd = frequencyData[index];

				// 막대 DIV 요소를 가져옵니다.
				const bar = document.querySelector("#bar" + i);
				if( !bar ) {
					continue;
				}

				// fd가 정의되지 않은 경우 기본값은 0이고 fd가 4 이상인지 확인합니다. 
				// 이것은 시각 효과를 위해 최소 4px 높이의 조용한 주파수를 만듭니다.
				const barHeight = Math.max(4, fd || 0);
				bar.style.height = barHeight + "px";
			} 

			// 윈도우 창 변경시 호출
			window.onresize = function(){
				console.log(123)
				const bar = document.createElement("DIV");
				let clientWidth2 = document.getElementById('EQBAR').clientWidth -175;
				const BARS = Math.floor(clientWidth2 / 21);

				if(BARS < NBR_OF_BARS){
					for(let i = BARS-1; i < NBR_OF_BARS; i++){
						if(document.querySelector('#bar'+i)){
							document.querySelector('#bar'+i).remove()
						}
					}
					NBR_OF_BARS = BARS;
				}else if(BARS > NBR_OF_BARS){
					for(let i = NBR_OF_BARS; i < BARS; i++){
						bar.setAttribute("id", "bar" + i);
						bar.setAttribute("class", "visualizer-container__bar");
						visualizerContainer.appendChild(bar);
						if(rain_bak == 1 || Night_Day == 1){
							document.querySelector('#bar'+i).style.background="white";
						}else{
							document.querySelector('#bar'+i).style.background="black";
						}
					}
					NBR_OF_BARS = BARS;
				}
			}

			// 다음 애니메이션 프레임에서 자신을 호출합니다.
			window.requestAnimationFrame(renderFrame);

		}
		renderFrame();
		musicback = 1;
	}else{
		//EQ 지우기
		document.querySelector('#switch').disabled=true; //다른 버튼 클릭 x
		document.querySelector('#switch2').disabled=true; //다른 버튼 클릭 x
		document.querySelector('#switch3').disabled=true; //다른 버튼 클릭 x 
		document.querySelector('#switchAll').disabled=true; //다른 버튼 클릭 x 

		let clientWidth2 = document.getElementById('EQBAR').clientWidth;
		const BARS = Math.floor(clientWidth2 / 21);
		$('.visualizer-container__bar').fadeOut(1000, function(){
			for(let i = 0; i < BARS; i++){
				if(document.querySelector('#bar'+i)){
					document.querySelector('#bar'+i).remove()
				}
			}
		});
		setTimeout(function(){
			document.querySelector('#switch').disabled=false; //다른 버튼 클릭 x
			document.querySelector('#switch2').disabled=false; //다른 버튼 클릭 x
			document.querySelector('#switch3').disabled=false; //다른 버튼 클릭 x 
		  	document.querySelector('#switchAll').disabled=false; //다른 버튼 클릭 x 
		}, 1000)
		$('#ex-in').fadeOut('slow', function(){
			document.querySelector('.backGrondBtn').style.width='110px';
		});
		//노래 끄기 및 스위치 끄기
		let AudioPlayA = document.getElementById("AudioPlay_tyA");
		AudioPlayA.pause();
		document.getElementById("switch3").checked=false;
		musicback = 0;
	}
}