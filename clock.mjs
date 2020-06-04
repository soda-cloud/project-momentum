<<<<<<< HEAD
export function time(){
    const main = document.querySelector('.clock')
    const percent = document.querySelector('.clock-persent')
    
    function result(){
        const today = new Date();
        const hours = today.getHours();
        const minutes = today.getMinutes();
        
        return [].push(hours, minutes);


    }
    console.log(result());

    console.log();
    
    
    
    
    
    function timeview(){
        const today = new Date();
        const hours = today.getHours();
        const minutes = today.getMinutes();
        const hoursView = hours.toString();
        const minutesView = minutes.toString();

       
        main.innerHTML = 
        `<div class="clock-main">${hoursView.length===2? 
            hoursView :'0'+ hoursView}:${minutesView.length===2? minutesView : '0'+minutesView}</div>`;
         setTimeout(timeview, 1000);
    }
    timeview();


    function percentView(){
        const today = new Date();
        const hours = today.getHours();
        const minutes = today.getMinutes();
        
        const setStart = 10;
        const setEnd = 22;
        const calculation = setEnd-setStart;
        
        function intime(){
            
            if (hours >= setStart && hours <= setEnd){
                percent.innerHTML = `<div>${Math.floor(((hours-setStart)/(calculation)*100)+(minutes/(calculation)/60*100))}</div>`;
            }else{hours > setEnd ? 
                percent.innerHTML = `<div>+${Math.floor(((hours-setEnd)/(calculation)*100)+(minutes/(calculation)/60*100))}</div>`:
                percent.innerHTML = `<div>+${Math.floor(((hours+24-setEnd)/(calculation)*100)+(minutes/(calculation)/60*100))}</div>`}
            };
            setTimeout(percentView, 1000);
            intime();
    }
    percentView();


};
=======
// HTML 불러오기
// 시계
const clockContainer = document.querySelector('.js-clock');
const clockTitle = clockContainer.querySelector('h1');

// js 기능 구성
// 시계
function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerHTML =
    `${hours < 10 ? `0${hours}` : `${hours}`}:` +
    `${minutes < 10 ? `0${minutes}` : minutes}:` +
    `${seconds < 10 ? `0${seconds}` : seconds}`;
}

// clock 초기화
// eslint-disable-next-line import/prefer-default-export
export function init() {
  getTime();
  setInterval(getTime, 1000);
}
>>>>>>> d0eb6d95984c3cc3084d6c9fbbda7f9ec0d62850
