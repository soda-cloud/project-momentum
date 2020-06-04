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
