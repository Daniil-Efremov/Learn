document.addEventListener("DOMContentLoaded", ()=>{
    let
        yellowRect = document.getElementById("yellowRect"),
        redRect = document.getElementById("redRect"),
        animationFrames = [
            {
                transform:"translate(0px, 50px)",
                opacity:0
            },
            // {
            //     transform:"translate(0px, 25px)",
            //     opacity:0.5
            // },
            {
                transform:"translate(0px ,0px)",
                opacity:1
            }
        ],
        animationTiming = {
            duration: 1000,
            iterations:1,
            fill:"forwards"
        };

        yellowRect.addEventListener("click", ()=>{
            redRect.animate(animationFrames, animationTiming);
        });
});