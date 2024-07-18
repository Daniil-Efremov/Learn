$(document).ready(()=>{
    $.getJSON("https://randomuser.me/api/?results=10", (data)=>{
        console.log(data);
        console.log(data.results[0].name.first);
        for(i = 0; i< data.results.length; i++){
           
            $("#row").append($("<div></div>").text(data.results[i].name.first) );
        }
    });
})
