document.addEventListener("DOMContentLoaded", ()=>{
    let cnv = document.getElementById("canvas").getContext("2d");
    cnv.translate(200, 200);

    function drawAround(){
        
        cnv.beginPath();
        cnv.arc(0,0, 180, 0, Math.PI*2, true);
        cnv.lineWidth = 1;
        cnv.stroke();
        
        for(i = 0; i < 60; i++ ){
            if(i % 5 != 0){
                cnv.lineWidth = 3;
                cnv.beginPath();
                cnv.moveTo(200, 0);
                cnv.lineTo(190, 0);
                cnv.stroke();
            }
            cnv.rotate(Math.PI*2 / 60);
            
        };
    
        for(i = 0; i < 12; i++){
            cnv.lineWidth = 6;
            cnv.beginPath();
            cnv.moveTo(200, 0);
            cnv.lineTo(185, 0);
            cnv.stroke();
            cnv.rotate(Math.PI*2 / 12);
        };
    };

    function drawSecondsArrow(){
        let date = new Date();
        cnv.save();
        cnv.rotate((Math.PI * 2 * date.getSeconds()) / 60);
        console.log(date.getSeconds());
        cnv.beginPath();
        cnv.lineWidth = 1;
        cnv.strokeStyle = 'red' ;
        cnv.moveTo(0,0);
        cnv.lineTo(0,-170);
        cnv.stroke();
        cnv.restore();
    };

    function drawMinutesArrow(){
        let date = new Date();
        cnv.save();
        cnv.rotate((Math.PI * 2 * date.getMinutes()) / 60);
        cnv.beginPath();
        cnv.lineWidth = 3;
        cnv.strokeStyle = 'orange' ;
        cnv.moveTo(0,0);
        cnv.lineTo(0,-150);
        cnv.stroke();
        cnv.restore();
    };
    function drawHoursArrow(){
        let date = new Date();
        cnv.save();
        cnv.rotate((Math.PI * 2 * date.getUTCHours() +3) / 6);
        cnv.beginPath();
        cnv.lineWidth = 5;
        cnv.moveTo(0,0);
        cnv.lineTo(0,120);
        cnv.stroke();
        cnv.restore();
        
    };


    function animate(){
        cnv.save();
        cnv.clearRect(-200, -200, 400, 400);
        drawAround();
        drawSecondsArrow();
        drawMinutesArrow();
        drawHoursArrow();
        cnv.restore();
        requestAnimationFrame(animate);
    };
    animate();
});