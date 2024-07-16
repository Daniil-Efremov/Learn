document.addEventListener("DOMContentLoaded", ()=>{
    let
        gla = ["а", "у", "о", "и", "э", "ы", "я", "ю", "е", "ё",
               "А", "У", "О", "И", "Э", "Ы", "Я", "Ю", "Е", "Ё"],
        sog = ["б", "в", "г", "д", "ж", "з", "й", "к", "л", "м", "н", "п", "р", "с", "т", "ф", "х", "ц", "ч", "ш", "щ",
               "Б", "В", "Г", "Д", "Ж", "З", "Й", "К", "Л", "М", "Н", "П", "Р", "С", "Т", "Ф", "Х", "Ц", "Ч", "Ш", "Щ"],
        text = document.getElementById("text"),
        sogCounter = document.getElementById("sogCounter"),
        glaCounter = document.getElementById("glaCounter");
    function countLetters(txt, sample, target){
        let counter = 0;
        for(i = 0; i < txt.length; i++){
            for(j = 0; j < sample.length; j++){
                if(txt[i] === sample[j]){
                    counter++
                }
            }
        }
        target.innerText = counter;
    }
    document.getElementById("sogBtn").addEventListener("click", ()=>{
        countLetters(text.value , sog, sogCounter);
    });
    document.getElementById("glaBtn").addEventListener("click", ()=>{
        countLetters(text.value , gla, glaCounter);
    });
    document.getElementById("countAll").addEventListener("click", ()=>{
        countLetters(text.value , sog, sogCounter);
        countLetters(text.value , gla, glaCounter);
    });
});