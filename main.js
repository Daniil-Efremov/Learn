document.addEventListener("DOMContentLoaded", ()=>{

    const prom = new Promise((resolve, reject)=>{
        let x = 5;
        if(x >= 5){
            resolve("resolve: x>=5")
        }else{
            reject("reject: x<5")
        }
    }).then((msg) => {console.log(msg); 
        return new Promise((resolve, reject) =>{
        if( 1+1 == 3){
            resolve("resolve: 1 + 1 = 2");
        }else{
            reject("error")
        }
            })
    }).then((response)=> console.log(response))
    .catch((error)=> console.log(error))
    .catch((error)=>console.log(error))
    .finally(console.log("finally"));

});