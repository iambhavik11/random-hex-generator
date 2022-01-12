const bgChange = document.querySelector("body");
const btnGenerate = document.querySelector("#btn-generate");
const hexNo = document.querySelector("#hex-color");

const hexValues=[0,1,2,3,4,5,6,8,9,'a','b','c','d','e','f'];

btnGenerate.addEventListener("click",function(){
    let hex="#";

    for(let i=0;i<6;i++){
        const index = Math.floor(Math.random() * hexValues.length);
        hex += hexValues[index];
    }

    hexNo.innerText = hex;
    bgChange.style.backgroundColor = hex;
});
