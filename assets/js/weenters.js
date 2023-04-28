// API 생성 주소 "https://openweathermap.org/"
const API_KEY = "b47c8ff837b992a64efd8e9a7ceabb4a";
const COORDS = "coords";

// 여기서 부터 시작
function runwe(){
    const weather = document.querySelector(".js-weather");
    const wimg = document.querySelector("#wimg");
    const wther = document.querySelector(".wther");
    const winter = document.querySelector(".winter");
    
    var dateInfo = new Date(); 
    var hour = modifyNumber(dateInfo.getHours());
    var min = modifyNumber(dateInfo.getMinutes());
    var sec = modifyNumber(dateInfo.getSeconds());
    document.getElementById("time").innerHTML = "Last Update: " + hour + ":" + min  + ":" + sec;
    function modifyNumber(time){
        if(parseInt(time)<10){
            return "0"+ time;
        }
        else{
            return time;
        }
    }

    function getWeather(lat, lng) {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&lang=kr&appid=${API_KEY}&units=metric`
        )
        .then(function (response) { // .then = fetch가 완료 된 후 실행됨
            return response.json(); // json형태로 변환
        })
        .then(function (json) { 
            const temperature = json.main.temp; //온도
            const place = json.name; //현제 도시 이름
            const wicon = json.weather[0].icon; //날씨 아이콘
            const MainWeather = json.weather[0].main; // 날씨 상태
            const DescWeather = json.weather[0].description; //날씨 설명
          
            wther.innerText = `weather: ${MainWeather},  description: ${DescWeather}`;
            weather.innerHTML = `${temperature}°C <a href="https://www.google.com/search?q=${place} City" target="_blank">@${place}</a>`;
            wimg.innerHTML = '<img src="http://openweathermap.org/img/wn/'+ wicon +'@2x.png"></img>';
            winter.style.transition='1.5s';
            winter.style.opacity = "1";
        });
    }

    function saveCoords(coordsObj) { // localStorage에 저장
        localStorage.setItem(COORDS, JSON.stringify(coordsObj));
        }

    function handleGeoSucces(position) { // 요청 수락
        const latitude = position.coords.latitude; 
        const longitude = position.coords.longitude;
        const coordsObj = {
        latitude,
        longitude,
        };
        saveCoords(coordsObj); // localStorage에 저장 함수
        loadCoords();
    }

    function handleGeoError() { // 요청 거절
        console.log("Not allowed.");
        winter.style.display="none";
    }

    function askForCoords() { // 사용자 위치 요청 (요청 수락, 요청 거절)
        navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
    }

    function loadCoords() {
        const loadedCoords = localStorage.getItem(COORDS); // localStorage에서 위치정보 가져옴
        if(isMobiless() == false){
            if (loadedCoords === null) { // 위치 정보가 없으면
                askForCoords(); // 위치 정보 요청 함수
            } else {
                const parseCoords = JSON.parse(loadedCoords); // json형식을 객체 타입으로 바꿔서 저장
                getWeather(parseCoords.latitude, parseCoords.longitude, parseCoords.weather); // 날씨 요청 함수
            }
        }
    }
    loadCoords(); 
}

runwe();
setInterval(runwe, 1200000);
